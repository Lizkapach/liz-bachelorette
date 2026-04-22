import { useState, useEffect, useRef } from 'react';
import FloralBorder from './FloralBorder';
import Countdown from './Countdown';

const VIDEOS = ['/videos/cake.mp4', '/videos/yoga.mp4'];
const CROSSFADE_DURATION = 2000; // ms
const VIDEO_DISPLAY_TIME = 8000; // ms per video before crossfade

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current
      setOpacity(0);

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % VIDEOS.length);
        setOpacity(1);
      }, CROSSFADE_DURATION);
    }, VIDEO_DISPLAY_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section reveal">
      {/* Video background layer */}
      <div className="hero-video-layer">
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[i] = el; }}
            className="hero-video"
            src={src}
            autoPlay
            muted
            loop
            playsInline
            style={{
              opacity: i === activeIndex ? opacity : 0,
            }}
          />
        ))}
        <div className="hero-video-overlay" />
      </div>

      {/* Content on top */}
      <div className="hero-inner">
        <FloralBorder />
        <div className="hero-content">
          <h1 className="hero-title">Bridesmaids Club</h1>
          <p className="hero-subtitle">YOU ARE INVITED TO</p>
          <h2 className="hero-bride-name">liz's</h2>
          <p className="hero-event-name">BACHELORETTE DAY'S</p>
          <div className="hero-details">
            <p>14-15 TH MAY 2026</p>
            <p>EYANOT SAPIR B&B</p>
            <p>KIRYAT ANAVIM, JERUSALEM</p>
          </div>
          <Countdown />
        </div>
      </div>
    </section>
  );
}
