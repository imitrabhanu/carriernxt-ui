import { Link } from "wouter";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
}

const BlogCard = ({ id, title, excerpt, date, imageSrc }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-transform hover:shadow-md hover:-translate-y-1">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Link href={`/blog/${id}`} className="text-primary font-medium hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
