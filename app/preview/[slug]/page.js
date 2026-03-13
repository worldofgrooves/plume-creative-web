import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import Link from 'next/link';

function getManifest() {
  try {
    const raw = readFileSync(join(process.cwd(), 'public', 'manifest.json'), 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const manifest = getManifest();
  return manifest.map((p) => ({ slug: p.slug }));
}

export default async function PreviewPage({ params }) {
  const { slug } = await params;
  const manifest = getManifest();
  const preview = manifest.find((p) => p.slug === slug);

  if (!preview) {
    return (
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100dvh',
        padding: '24px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '16px', marginBottom: '16px' }}>Preview not found</p>
        <Link href="/" style={{
          fontSize: '14px',
          color: 'var(--accent)',
          fontWeight: 500,
        }}>
          ← Back to hub
        </Link>
      </main>
    );
  }

  // For HTML type previews, render in an iframe
  const previewUrl = `/previews/${slug}/index.html`;

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100dvh',
      background: 'var(--bg)',
    }}>
      {/* Top bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
        flexShrink: 0,
      }}>
        <Link href="/" style={{
          fontSize: '13px',
          color: 'var(--accent)',
          fontWeight: 500,
        }}>
          ← Hub
        </Link>
        <span style={{
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '-0.01em',
        }}>
          {preview.title}
        </span>
        <span style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
        }}>
          {preview.status}
        </span>
      </div>

      {/* Preview iframe */}
      <div style={{ flex: 1, position: 'relative' }}>
        <iframe
          src={previewUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            background: '#ffffff',
          }}
          title={preview.title}
        />
      </div>
    </main>
  );
}
