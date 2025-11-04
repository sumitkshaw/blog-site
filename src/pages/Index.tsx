import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import DropdownMenu from "@/components/ui/DropdownMenu";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const categories = ["All", "Tech", "History", "Self Discipline", "Vlog"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tag === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background font-montserrat">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="font-['Great_Vibes'] font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              Bhavyaa
            </span>
            <span className="font-playfair font-bold text-foreground">
              Writes🌸
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            A minimal space for thoughts, reflections, and quiet moments✨
          </p>

          <DropdownMenu
            options={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>



        {/* Blog Grid */}
        <div
          className="
            grid gap-8
            sm:grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3
            xl:gap-10
            transition-all duration-300
          "
        >
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
