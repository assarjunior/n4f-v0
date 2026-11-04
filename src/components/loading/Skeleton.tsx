type SkeletonProps = {
  className?: string;
  surface?: "maroon" | "beige";
};

export function Skeleton({
  className = "",
  surface = "maroon",
}: SkeletonProps) {
  const background =
    surface === "maroon" ? "bg-brand-beige/15" : "bg-brand-maroon/15";

  return (
    <div
      aria-hidden="true"
      className={`
        animate-pulse
        rounded-xs
        motion-reduce:animate-none
        ${background}
        ${className}
      `}
    />
  );
}
