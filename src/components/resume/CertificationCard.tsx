import { Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer?: string;
  featured?: boolean;
}

const CertificationCard = ({ title, issuer, featured = false }: CertificationCardProps) => {
  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 hover:shadow-soft ${
      featured 
        ? "gradient-card border-accent/30" 
        : "bg-card border-border hover:border-accent/30"
    }`}>
      <div className={`p-2 rounded-lg ${featured ? "gradient-accent" : "bg-accent/10"}`}>
        <Award className={`w-4 h-4 ${featured ? "text-accent-foreground" : "text-accent"}`} />
      </div>
      <div>
        <p className="font-medium text-foreground text-sm">{title}</p>
        {issuer && <p className="text-xs text-muted-foreground">{issuer}</p>}
      </div>
    </div>
  );
};

export default CertificationCard;
