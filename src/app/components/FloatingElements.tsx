import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  icon: string;
  left: string;
  top: string;
  delay: number;
  duration: number;
  color: string;
}

export function FloatingElements() {
  const [elements] = useState<FloatingElement[]>([
    { id: 1, icon: '🎭', left: '10%', top: '20%', delay: 0, duration: 20, color: '#3b82f6' },
    { id: 2, icon: '🎸', left: '80%', top: '15%', delay: 2, duration: 25, color: '#f97316' },
    { id: 3, icon: '🎵', left: '15%', top: '60%', delay: 4, duration: 18, color: '#a855f7' },
    { id: 4, icon: '💃', left: '85%', top: '70%', delay: 1, duration: 22, color: '#ec4899' },
    { id: 5, icon: '🪘', left: '25%', top: '40%', delay: 3, duration: 24, color: '#eab308' },
    { id: 6, icon: '📖', left: '70%', top: '45%', delay: 5, duration: 19, color: '#14b8a6' },
    { id: 7, icon: '🎤', left: '40%', top: '80%', delay: 2, duration: 21, color: '#f43f5e' },
    { id: 8, icon: '🎨', left: '60%', top: '25%', delay: 4, duration: 23, color: '#8b5cf6' },
    { id: 9, icon: '🎺', left: '5%', top: '75%', delay: 1, duration: 20, color: '#06b6d4' },
    { id: 10, icon: '✨', left: '90%', top: '50%', delay: 3, duration: 17, color: '#fbbf24' },
  ]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Floating Cultural Icons */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute text-6xl opacity-20"
          style={{
            left: element.left,
            top: element.top,
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
            filter: `drop-shadow(0 0 20px ${element.color})`,
          }}
        >
          {element.icon}
        </div>
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(0px) rotate(0deg);
          }
          75% {
            transform: translateY(20px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
}
