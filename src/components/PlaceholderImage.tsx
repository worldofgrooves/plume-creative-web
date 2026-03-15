interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function PlaceholderImage({
  label,
  aspectRatio = "16/9",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-image rounded-sm ${className}`}
      style={{ aspectRatio }}
    >
      <span className="text-center px-4">{label}</span>
    </div>
  );
}
