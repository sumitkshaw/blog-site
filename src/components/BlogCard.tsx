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
          group rounded-2xl border border-border overflow-hidden 
          bg-gradient-to-br from-background to-muted/30
          hover:from-primary/5 hover:to-accent/10
          shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)]
          transition-all duration-500 flex flex-col
          active:scale-[0.98] opacity-0 translate-y-4 animate-fade-in-up
        "
      >
        {/* Image */}
        {post.image && (
          <div className="relative w-full h-48 sm:h-56 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center">
              <div className="mb-4 px-4 py-2 rounded-full bg-white/90 dark:bg-zinc-800/90 text-xs sm:text-sm font-medium text-foreground shadow-md">
                Read More →
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            {/* Date + Tag */}
            <div className="flex items-center justify-between mb-2">
              <time className="text-xs sm:text-sm text-muted-foreground font-montserrat">
                {post.date}
              </time>

              <span
                className="
                  px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium 
                  bg-muted/60 dark:bg-zinc-800/60 border border-border
                  hover:bg-primary/10 hover:text-primary transition-all
                "
              >
                {post.tag}
              </span>
            </div>

            {/* Title */}
            <h2
              className="
                font-playfair font-semibold text-lg sm:text-xl mb-2 
                text-foreground group-hover:text-primary transition-all group-hover:translate-x-1
              "
            >
              {post.title}
            </h2>

            {/* Preview */}
            <p className="text-muted-foreground font-montserrat text-sm sm:text-base leading-relaxed line-clamp-2">
              {post.preview}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
