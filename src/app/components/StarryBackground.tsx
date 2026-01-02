export function StarryBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-purple-950 opacity-50"></div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 3;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}
