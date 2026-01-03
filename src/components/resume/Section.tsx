import { ReactNode } from "react";

interface SectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, icon, children, className = "" }: SectionProps) => {
  return (
    <section className={`mb-8 ${className}`}>
      <div className="flex items-center gap-3 mb-5">
        {icon && (
          <div className="p-2.5 rounded-lg gradient-accent text-accent-foreground">
            {icon}
          </div>
        )}
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border ml-2" />
      </div>
      {children}
    </section>
  );
};

export default Section;
