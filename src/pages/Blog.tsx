import { useParams, Navigate, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft } from "lucide-react";

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-background font-montserrat">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-3xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Blog Content */}
        <article className="animate-fade-in">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl mb-8 shadow-md"
            />
          )}

          <time className="text-sm text-muted-foreground">{post.date}</time>
          <h1 className="font-playfair font-bold text-4xl md:text-5xl mt-3 mb-8 text-foreground">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((line, index) => {
              if (line.startsWith("# ")) {
                return (
                  <h1
                    key={index}
                    className="font-playfair font-bold text-3xl md:text-4xl mt-8 mb-4 text-foreground"
                  >
                    {line.replace("# ", "")}
                  </h1>
                );
              } else if (line.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="font-playfair font-semibold text-2xl md:text-3xl mt-6 mb-3 text-foreground"
                  >
                    {line.replace("## ", "")}
                  </h2>
                );
              } else if (line.startsWith("---")) {
                return <hr key={index} className="my-8 border-border" />;
              } else if (line.startsWith("*") && line.endsWith("*")) {
                return (
                  <p key={index} className="italic text-muted-foreground my-4">
                    {line.replace(/\*/g, "")}
                  </p>
                );
              } else if (line.trim()) {
                return (
                  <p key={index} className="text-foreground leading-relaxed my-4">
                    {line}
                  </p>
                );
              }
              return <br key={index} />;
            })}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
