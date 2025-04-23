import { Star, StarHalf } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  imageSrc: string;
}

const TestimonialCard = ({
  name,
  role,
  testimonial,
  rating,
  imageSrc,
}: TestimonialCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-current text-accent" size={16} />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-current text-accent" size={16} />);
    }

    return stars;
  };

  return (
    <div className="bg-light rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <img
          src={imageSrc}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-heading font-semibold text-lg">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
        <div className="ml-auto text-accent flex">
          {renderStars()}
        </div>
      </div>
      <p className="text-gray-600">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
