import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <article
        className="
          group bg-card border border-border rounded-xl overflow-hidden 
          shadow-sm hover:shadow-lg hover:-translate-y-1 
          transition-all duration-500 flex flex-col 
          opacity-0 translate-y-4 animate-fade-in-up
        "
      >
        {/* Image Section */}
        {post.image && (
          <div className="relative w-full h-48 md:h-56 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay with “Read More” */}
            <div
              className="
                absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                opacity-0 group-hover:opacity-100 transition-all duration-500
                flex items-end justify-center
              "
            >
              <div className="mb-4 px-4 py-2 rounded-full bg-white/90 dark:bg-zinc-800/90 text-sm font-medium text-foreground shadow-md">
                Read More →
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            {/* Date + Tag */}
            <div className="flex items-center justify-between mb-2">
              <time className="text-sm text-muted-foreground font-montserrat">
                {post.date}
              </time>

              {/* Tag bubble */}
              <span
                className="
                  px-3 py-1 rounded-full text-xs font-medium 
                  bg-muted text-foreground/90
                  dark:bg-zinc-800 dark:text-zinc-200
                  border border-border
                "
              >
                {post.tag}
              </span>
            </div>

            {/* Title */}
            <h2
              className="
                font-playfair font-semibold text-xl md:text-2xl mb-2 
                text-foreground group-hover:text-primary transition-colors
              "
            >
              {post.title}
            </h2>

            {/* Preview Text */}
            <p className="text-muted-foreground font-montserrat leading-relaxed line-clamp-2">
              {post.preview}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
