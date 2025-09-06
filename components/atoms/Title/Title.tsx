import { TitleProps } from "./type";

const Title = ({
  children,
  className = "",
  bg = false,
  variant,
}: TitleProps) => {
  return (
    <h1
      className={`font-bold leading-tight ${
        variant === "large" ? "text-4xl" : "text-3xl"
      } ${bg ? "bg-black text-white text-center p-4" : ""} ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
