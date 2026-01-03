import { ReactNode } from "react";

interface AchievementItemProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

const AchievementItem = ({ icon, title, description }: AchievementItemProps) => {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-soft">
      <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-medium text-foreground text-sm">{title}</p>
        {description && <p className="text-xs text-muted-foreground mt-0.5">{description}</p>}
      </div>
    </div>
  );
};

export default AchievementItem;
