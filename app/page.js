import Link from 'next/link';
import { readFileSync } from 'fs';
import { join } from 'path';

function getManifest() {
  try {
    const raw = readFileSync(join(process.cwd(), 'public', 'manifest.json'), 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function StatusBadge({ status }) {
  const colors = {
    ready: 'var(--status-ready)',
    draft: 'var(--status-draft)',
    archived: 'var(--status-archived)',
  };
  const color = colors[status] || colors.draft;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '11px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color,
    }}>
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: color,
      }} />
      {status}
    </span>
  );
}

export default function Home() {
  const previews = getManifest();
  const active = previews.filter(p => p.status !== 'archived');
  const archived = previews.filter(p => p.status === 'archived');

  return (
    <main style={{ padding: '24px 16px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '4px',
        }}>
          <span style={{ fontSize: '20px' }}>♟️</span>
          <h1 style={{
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}>
            Janet Previews
          </h1>
        </div>
        <p style={{
          fontSize: '13px',
          color: 'var(--text-muted)',
          paddingLeft: '30px',
        }}>
          {active.length} active preview{active.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Active Previews */}
      {active.length === 0 ? (
        <div style={{
          padding: '48px 24px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '14px',
          border: '1px dashed var(--border)',
          borderRadius: '12px',
        }}>
          No previews yet. They'll appear here when Janet creates them.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {active.map((preview) => (
            <Link
              key={preview.slug}
              href={`/preview/${preview.slug}`}
              style={{
                display: 'block',
                padding: '16px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '8px',
              }}>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                }}>
                  {preview.title}
                </h2>
                <StatusBadge status={preview.status} />
              </div>
              <p style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
                marginBottom: '10px',
              }}>
                {preview.description}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                }}>
                  {preview.date}
                </span>
                <span style={{
                  fontSize: '12px',
                  color: 'var(--accent)',
                  fontWeight: 500,
                }}>
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Archived Section */}
      {archived.length > 0 && (
        <div style={{ marginTop: '32px' }}>
          <h3 style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '12px',
          }}>
            Archived
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {archived.map((preview) => (
              <Link
                key={preview.slug}
                href={`/preview/${preview.slug}`}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  opacity: 0.6,
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '14px' }}>{preview.title}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{preview.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{
        marginTop: '48px',
        paddingTop: '16px',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
        }}>
          Janet AI -- World of Grooves Studio
        </p>
      </div>
    </main>
  );
}
