import { Link } from "wouter";
import { blogPosts } from "@/lib/constants";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              Career Resources
            </h1>
            <p className="text-lg text-gray-600">
              Explore our collection of articles, guides, and resources to help you make informed career decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                imageSrc={post.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-light">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-4">
              Get Personalized Career Guidance
            </h2>
            <p className="text-gray-600 mb-8">
              While these resources provide valuable information, AI Career Architect offers personalized guidance based on your unique skills and interests.
            </p>
            <Link href="/#early-access">
              <Button size="lg" className="font-medium">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
