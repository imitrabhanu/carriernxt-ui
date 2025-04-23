import { useParams, Link } from "wouter";
import { blogPosts } from "@/lib/constants";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const params = useParams();
  const postId = params.id;

  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <Link href="/blog">
          <Button>Return to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <main>
      {/* Article Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
            </Link>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 text-sm">
              <span className="flex items-center mr-4">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                5 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container mx-auto -mt-8 mb-8 max-w-4xl">
        <img
          src={post.imageSrc}
          alt={post.title}
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-light">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-4">
              Want More Personalized Guidance?
            </h2>
            <p className="text-gray-600 mb-8">
              AI Career Architect provides tailored career recommendations based on your unique skills, interests, and academic performance.
            </p>
            <Link href="/#early-access">
              <Button size="lg" className="font-medium">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-2xl mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter((relatedPost) => relatedPost.id !== postId)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <div key={index} className="bg-light rounded-lg overflow-hidden">
                  <img
                    src={relatedPost.imageSrc}
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{relatedPost.date}</p>
                    <Link href={`/blog/${relatedPost.id}`} className="text-primary font-medium hover:underline">
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
