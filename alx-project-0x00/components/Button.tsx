import React from "react";

interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
}) => {
  let sizeClasses = "";
  if (size === "small") sizeClasses = "px-2 py-1 text-sm";
  if (size === "medium") sizeClasses = "px-4 py-2 text-base";
  if (size === "large") sizeClasses = "px-6 py-3 text-lg";

  return (
    <button
      className={`bg-blue-500 text-white font-semibold ${sizeClasses} ${shape} hover:bg-blue-600`}
    >
      {title}
    </button>
  );
};

export default Button;
