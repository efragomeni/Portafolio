import { useState } from "react";
import "./Hamburger.css";

export const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={`hamburger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      aria-label="Menu"
    >
      <svg width="30" height="30" viewBox="0 0 100 100">
        <line className="line top" x1="20" y1="30" x2="80" y2="30" />
        <line className="line middle" x1="20" y1="50" x2="80" y2="50" />
        <line className="line bottom" x1="20" y1="70" x2="80" y2="70" />
      </svg>
    </button>
  );
};
