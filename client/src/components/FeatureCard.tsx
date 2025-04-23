import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-light rounded-lg p-6 transition-transform hover:scale-105">
      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
        <Icon className="text-primary text-2xl" />
      </div>
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
