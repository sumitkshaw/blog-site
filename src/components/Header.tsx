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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm">
      <div className="container mx-auto px-5 py-3 flex items-center justify-between max-w-5xl">
        {/* Logo */}
        <Link to="/" className="text-3xl tracking-tight font-['Great_Vibes'] font-semibold text-purple-500">
          Bhavyaa
          <span className="font-playfair font-bold text-foreground ml-1">
            Writes
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-5 text-muted-foreground">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted/30 transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          {/* Share Ideas */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUaUXHJBf5h__MZ7K5l8xNIiLOO8IJxr08RmKkJI2pDRSc7A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-muted/30 transition flex items-center justify-center"
          >
            <FileText className="w-5 h-5" />
          </a>

          {/* About */}
          <Link
            to="/about"
            className="p-2 rounded-full hover:bg-muted/30 transition flex items-center justify-center"
          >
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
