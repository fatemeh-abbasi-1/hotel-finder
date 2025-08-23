import { TextProps } from "./type";

const Text = ({ children }: TextProps) => {
  return <p className="font-bold">{children}</p>;
};

export default Text;
