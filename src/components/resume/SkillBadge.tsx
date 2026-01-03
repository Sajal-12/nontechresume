interface SkillBadgeProps {
  skill: string;
  variant?: "primary" | "secondary" | "accent";
}

const SkillBadge = ({ skill, variant = "secondary" }: SkillBadgeProps) => {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20",
  };

  return (
    <span className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 ${variants[variant]}`}>
      {skill}
    </span>
  );
};

export default SkillBadge;
