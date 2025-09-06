import { TextProps } from "./type";

const Text = ({ children, className, bg = false,variant }: TextProps) => {
  return (
    <p
      className={`font-bold ${variant === 'large' ? 'text-2xl' : 'text-xl'} ${
        bg ? "bg-black p-3 text-white" : ""
      } ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
