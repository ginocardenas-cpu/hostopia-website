/**
 * Full-width section with alternating backgrounds for product pages.
 * Use variant="gray" | "white" for alternating rhythm.
 */
type ProductSectionProps = {
  variant?: "gray" | "white";
  children: React.ReactNode;
  className?: string;
};

export default function ProductSection({
  variant = "white",
  children,
  className = "",
}: ProductSectionProps) {
  const bg = variant === "gray" ? { backgroundColor: "#f7f6f2" } : { backgroundColor: "#ffffff" };
  return (
    <section className={`py-[60px] overflow-visible ${className}`} style={bg}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
