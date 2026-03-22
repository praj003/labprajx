import { useState, useEffect } from "react";
import "./Background.css";

function Background() {
const [mouse, setMouse] = useState({ x: 0, y: 0 });

useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="background">
      <div
        className="blob"
        style={{
          left: mouse.x - 150, // center blob around cursor
          top: mouse.y - 150,
        }}
      ></div>
      {/* Optional overlay (darkens it) */}
      <div 
      className="bg-overlay">
      </div>

    </div>
  );
}

export default Background;