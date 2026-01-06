const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full border-[3px] border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Pomodorofocus
      </span>
    </div>
  );
};

export default Logo;
