// import { ButtonProps } from "./type";

// const Button = ({ children }: ButtonProps) => {
//   return (
//     <div className=" flex relative">
//       <span className="w-[166px] h-14 bg-purple-500 z-0 border-4 border-black rounded-xl origin-bottom -rotate-6 absolute"></span>
//       <button className=" w-40 h-14 font-bold border-4 border-black text-xl rounded-2xl z-10 bg-white cursor-pointer">
//         {children}
//       </button>
//     </div>
//   );
// };

// export default Button;
import { ButtonProps } from "./type";

const Button = ({ children, variant = "large" }: ButtonProps) => {
  // سایزها بر اساس variant
  const sizes =
    variant === "large"
      ? {
          span: "w-[166px] h-14",
          button: "w-40 h-14 text-xl",
        }
      : {
          span: "w-[130px] h-10",
          button: "w-32 h-10 text-base",
        };

  return (
    <div className="flex relative">
      <span
        className={`${sizes.span} bg-purple-500 z-0 border-4 border-black rounded-xl origin-bottom -rotate-6 absolute`}
      ></span>
      <button
        className={`${sizes.button} font-bold border-4 border-black rounded-2xl z-10 bg-white cursor-pointer`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
