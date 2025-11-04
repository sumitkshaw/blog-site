import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, FileText, Moon, Sun } from "lucide-react";

const Header = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-5xl">
        
        {/* Logo / Title */}
        <Link to="/" className="flex items-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="font-['Great_Vibes'] font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              Bhavyaa
            </span>
            <span className="font-playfair font-bold text-foreground">
              Writes
            </span>
          </h1>
        </Link>

        {/* Navigation Icons */}
        <div className="flex items-center gap-6">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            ) : (
              <Sun className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            )}
          </button>

          {/* Share Tab */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUaUXHJBf5h__MZ7K5l8xNIiLOO8IJxr08RmKkJI2pDRSc7A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline font-montserrat text-sm">
              Share Ideas
            </span>
          </a>

          {/* About Tab */}
          <Link
            to="/about"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <User className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline font-montserrat text-sm">
              About
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
