import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio("/audio/loop.mp3");
    audioRef.current.loop = true;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  // Handle audio state changes
  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current
        .play()
        .catch((error) => console.log("Audio play failed:", error));
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  // Body click handler
  useEffect(() => {
    const handleBodyClick = () => {
      setIsAudioPlaying((prev) => !prev);
    };

    document.addEventListener("click", handleBodyClick);
    return () => document.removeEventListener("click", handleBodyClick);
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={() => setIsAudioPlaying((prev) => !prev)}
      />
      <Hero />
      <About />
    </main>
  );
}

export default App;
