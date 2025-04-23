import { useState } from "react";
import { Target, BookOpen, Languages, Bot, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import { features, testimonials, blogPosts, appFeatures, tierFeatures } from "@/lib/constants";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                India's 1<sup>st</sup> AI Career Coach for Bharat
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Personalized career guidance in your language. Discover the
                perfect career path with AI-powered recommendations tailored for
                students across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#early-access"
                  className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors text-lg"
                >
                  <Target className="mr-2 h-5 w-5" /> Get Early Access
                </a>
                <a
                  href="#features"
                  className="inline-flex justify-center items-center bg-white border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-md font-medium transition-colors text-lg"
                >
                  <BookOpen className="mr-2 h-5 w-5" /> Learn More
                </a>
              </div>
              <div className="flex items-center text-gray-500">
                <div className="flex -space-x-2 mr-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-sm">Trusted by 500+ students across India</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 flex justify-center lg:justify-end">
                <div className="w-64 sm:w-80 shadow-2xl rounded-3xl overflow-hidden border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="AI Career Architect App"
                    className="w-full"
                  />
                </div>
                <div className="absolute top-1/4 -left-4 sm:left-0 w-56 sm:w-64 shadow-2xl rounded-3xl overflow-hidden border-8 border-white transform -rotate-6">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Students using AI Career Architect"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Why Choose AI Career Architect?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered platform is transforming career
              guidance for students across Bharat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-8 sm:p-12">
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
                  Built for Tier 2 & 3 Cities
                </h3>
                <p className="text-white/90 mb-6">
                  Designed specifically for students in Bharat who lack access
                  to quality career guidance and resources.
                </p>
                <ul className="space-y-3 mb-8">
                  {tierFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-white">
                      <CheckCircle className="mr-3 h-5 w-5 text-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#early-access"
                  className="inline-flex items-center bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="hidden md:block relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Students in classroom"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 sm:py-24 bg-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Your Personal Career Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Preview how our mobile app helps students discover and navigate
              their ideal career path.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ul className="space-y-8">
                {appFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {feature.step}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 flex justify-center relative">
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl -z-10"></div>
                <div className="border-8 border-white shadow-2xl rounded-3xl overflow-hidden inline-block">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="AI Career Architect App Interface"
                    className="w-72 h-auto"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 border-8 border-white shadow-2xl rounded-3xl overflow-hidden inline-block rotate-6 z-10">
                  <img
                    src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="AI Career Architect Chat Interface"
                    className="w-48 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students and parents who've discovered their career
              paths with AI Career Architect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                imageSrc={testimonial.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="py-16 sm:py-24 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
                Get Early Access to AI Career Architect
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join our exclusive waitlist and be among the first to experience
                AI-powered career guidance tailored for Bharat. Limited spots
                available!
              </p>

              <div className="bg-white rounded-lg p-6 sm:p-8">
                <h3 className="font-heading font-semibold text-primary text-xl mb-4">
                  Sign up for Early Access
                </h3>
                <EarlyAccessForm />
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Students looking at phone"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-10 -left-10 bg-white rounded-lg shadow-xl p-6 transform -rotate-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-secondary">
                      <CheckCircle size={20} />
                    </div>
                    <p className="font-heading font-semibold text-foreground">
                      500+ Early Signups
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6 transform rotate-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                      <Target size={20} />
                    </div>
                    <p className="font-heading font-semibold text-foreground">
                      Launching Soon!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 sm:py-24 bg-light">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Career Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our latest articles to help you make informed career
              decisions.
            </p>
          </div>

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

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center bg-white border border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Resources <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
