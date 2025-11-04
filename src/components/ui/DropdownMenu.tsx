import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownMenuProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const DropdownMenu = ({ options, selected, onSelect }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-card text-foreground hover:border-primary hover:text-primary transition-colors font-montserrat text-sm shadow-sm"
      >
        {selected}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-40 rounded-lg bg-background border border-border shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${
                selected === option ? "text-primary font-medium" : "text-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
