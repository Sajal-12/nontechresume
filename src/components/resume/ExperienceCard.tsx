interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
  highlight?: boolean;
}

const ExperienceCard = ({ title, company, location, period, points, highlight = false }: ExperienceCardProps) => {
  return (
    <div className={`p-5 rounded-xl border transition-all duration-300 hover:shadow-card ${
      highlight 
        ? "gradient-card border-primary/20 shadow-soft" 
        : "bg-card border-border hover:border-primary/30"
    }`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
          <p className="text-primary font-medium">{company}</p>
          {location && <p className="text-sm text-muted-foreground">{location}</p>}
        </div>
        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium whitespace-nowrap">
          {period}
        </span>
      </div>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
