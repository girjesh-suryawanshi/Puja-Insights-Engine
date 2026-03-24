export function SectionHeading({ title, subtitle, align = "center" }: { title: string; subtitle?: string; align?: "center" | "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
