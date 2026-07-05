import { cn } from "@/lib/utils";

type MagicButtonProps = {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
};

export const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-50%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E50914_0%,#000000_50%,#E50914_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-black px-7 text-sm font-medium text-white backdrop-blur-3xl transition-transform hover:scale-105",
          otherClasses
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};
