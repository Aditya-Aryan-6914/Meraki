interface NeonIconProps {
  icon: string;
  color: string;
  className?: string;
}

export function NeonIcon({ icon, color, className = '' }: NeonIconProps) {
  return (
    <div
      className={`text-6xl ${className}`}
      style={{
        filter: `drop-shadow(0 0 10px ${color}) drop-shadow(0 0 20px ${color}) drop-shadow(0 0 30px ${color})`,
      }}
    >
      {icon}
    </div>
  );
}
