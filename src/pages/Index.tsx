import Header from "@/components/resume/Header";
import Section from "@/components/resume/Section";
import ExperienceCard from "@/components/resume/ExperienceCard";
import SkillBadge from "@/components/resume/SkillBadge";
import CertificationCard from "@/components/resume/CertificationCard";
import AchievementItem from "@/components/resume/AchievementItem";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Target, 
  Users, 
  Heart,
  Mic,
  Trophy,
  Star,
  Shield,
  Droplets,
  Building
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-10">
        {/* Professional Summary */}
        <Section title="Professional Summary" icon={<Target className="w-5 h-5" />}>
          <div className="p-5 rounded-xl gradient-card border border-primary/10 shadow-soft">
            <p className="text-muted-foreground leading-relaxed">
              Results-driven Business Development Associate with hands-on experience in EdTech sales through 
              <span className="text-primary font-semibold"> 6 months of intensive training at iDigitalpreneur</span>, 
              where I specialized in selling digital courses and building client relationships. With a strong foundation 
              in technology (B.E. in CSE), excellent communication skills, and proven leadership as a 
              <span className="text-primary font-semibold"> Student Coordinator </span> and 
              <span className="text-primary font-semibold"> NCC Cadet</span>, I bring discipline, perseverance, 
              and a growth mindset to drive revenue and expand market reach.
            </p>
          </div>
        </Section>

        {/* Key Skills for BDA */}
        <Section title="Core Competencies" icon={<Star className="w-5 h-5" />}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <SkillBadge skill="Sales & Negotiation" variant="primary" />
            <SkillBadge skill="Lead Generation" variant="primary" />
            <SkillBadge skill="Client Relationship" variant="primary" />
            <SkillBadge skill="EdTech Sales" variant="primary" />
            <SkillBadge skill="Public Speaking" variant="accent" />
            <SkillBadge skill="Team Leadership" variant="accent" />
            <SkillBadge skill="Communication" variant="accent" />
            <SkillBadge skill="Market Research" variant="accent" />
            <SkillBadge skill="CRM Tools" variant="secondary" />
            <SkillBadge skill="Digital Marketing" variant="secondary" />
            <SkillBadge skill="Cold Calling" variant="secondary" />
            <SkillBadge skill="Presentation Skills" variant="secondary" />
          </div>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience" icon={<Briefcase className="w-5 h-5" />}>
          <div className="space-y-4">
            <ExperienceCard
              title="Sales Training Associate"
              company="iDigitalpreneur"
              location="Remote"
              period="6 Months Training"
              highlight={true}
              points={[
                "Completed intensive 6-month sales training program focused on EdTech course selling",
                "Developed expertise in digital marketing, copywriting, and Facebook ads strategy",
                "Practiced consultative selling techniques to understand customer needs and provide tailored solutions",
                "Gained hands-on experience in lead nurturing, follow-up strategies, and closing deals",
                "Learned to effectively communicate product value propositions to diverse audiences"
              ]}
            />

            <ExperienceCard
              title="Smart Contract & Web3 Developer"
              company="ConsenSys (USA)"
              location="Remote"
              period="Jul 2023 – Aug 2024"
              points={[
                "Contributed to blockchain projects demonstrating strong technical aptitude and attention to detail",
                "Collaborated with international teams, showcasing cross-cultural communication skills",
                "Managed project timelines and deliverables independently as a freelancer"
              ]}
            />

            <ExperienceCard
              title="Web Developer (Freelancer)"
              company="Upwork"
              location="Remote"
              period="May 2022 - Aug 2022"
              points={[
                "Successfully delivered client projects while managing expectations and deadlines",
                "Built strong client relationships through clear communication and quality deliverables"
              ]}
            />
          </div>
        </Section>

        {/* Education */}
        <Section title="Education" icon={<GraduationCap className="w-5 h-5" />}>
          <div className="p-5 rounded-xl bg-card border border-border shadow-soft">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-primary font-medium">Chandigarh University, Mohali, Punjab</p>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                  7.74 CGPA
                </span>
                <p className="text-sm text-muted-foreground mt-1">2020 - 2024</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Certifications */}
        <Section title="Certifications" icon={<Award className="w-5 h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <CertificationCard 
              title="Public Speaking Certification" 
              issuer="Professional Development"
              featured={true}
            />
            <CertificationCard 
              title="Sales Pro Certification" 
              issuer="iDigitalpreneur"
              featured={true}
            />
            <CertificationCard title="AWS Cloud Solution Architect" issuer="Amazon Web Services" />
            <CertificationCard title="Digital Marketing" issuer="iDigitalpreneur" />
            <CertificationCard title="AI 10X Certification" />
            <CertificationCard title="Software Testing" />
          </div>
        </Section>

        {/* Leadership & Activities */}
        <Section title="Leadership & Activities" icon={<Users className="w-5 h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <AchievementItem
              icon={<Shield className="w-4 h-4" />}
              title="NCC Cadet"
              description="Developed discipline, leadership, and teamwork skills through National Cadet Corps"
            />
            <AchievementItem
              icon={<Building className="w-4 h-4" />}
              title="CAB Meeting Coordinator (2024)"
              description="Corporate Advisory Board Meeting - Chandigarh University"
            />
            <AchievementItem
              icon={<Users className="w-4 h-4" />}
              title="Student Coordinator"
              description="Chandigarh University - Event management & team leadership"
            />
            <AchievementItem
              icon={<Droplets className="w-4 h-4" />}
              title="Regular Blood Donor"
              description="Twice a week blood donor - Committed to social welfare"
            />
            <AchievementItem
              icon={<Trophy className="w-4 h-4" />}
              title="Event Lead - CU Fest"
              description="Led and organized events at Chandigarh University festival"
            />
            <AchievementItem
              icon={<Heart className="w-4 h-4" />}
              title="Chandigarh Welfare Trust"
              description="Active contributor to community initiatives"
            />
          </div>
        </Section>

        {/* Achievements */}
        <Section title="Key Achievements" icon={<Trophy className="w-5 h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <AchievementItem
              icon={<Trophy className="w-4 h-4" />}
              title="Gold Medalist - Chess"
              description="MHRT (Mahatma Hansraj Tournament) - Inter-college level"
            />
            <AchievementItem
              icon={<Mic className="w-4 h-4" />}
              title="Technical Content Creator"
              description="Published articles on Medium about Web Development"
            />
            <AchievementItem
              icon={<Star className="w-4 h-4" />}
              title="250+ LeetCode Problems"
              description="Strong analytical and problem-solving abilities"
            />
            <AchievementItem
              icon={<Users className="w-4 h-4" />}
              title="HackOverflow Society Coordinator"
              description="Student Coordinator at Chandigarh University tech society"
            />
          </div>
        </Section>

        {/* Technical Skills (Secondary) */}
        <Section title="Technical Proficiency" icon={<Star className="w-5 h-5" />}>
          <p className="text-sm text-muted-foreground mb-3">
            Strong technical background enabling effective communication with product and engineering teams:
          </p>
          <div className="flex flex-wrap gap-2">
            <SkillBadge skill="JavaScript" />
            <SkillBadge skill="React.js" />
            <SkillBadge skill="Digital Marketing Tools" />
            <SkillBadge skill="Google Cloud Platform" />
            <SkillBadge skill="AI Tools" />
            <SkillBadge skill="CRM Software" />
            <SkillBadge skill="MS Office" />
            <SkillBadge skill="Prompt Engineering" />
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Open to BDA opportunities in EdTech, SaaS, and Technology sectors
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a 
              href="mailto:sajalvictorious83@gmail.com"
              className="px-6 py-2.5 gradient-accent text-accent-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-soft"
            >
              Contact Me
            </a>
            <a 
              href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
