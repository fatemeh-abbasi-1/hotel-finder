const Button = () => {
  return (
    <div className="flex justify-center relative ">
      <span className="w-[170px] h-14 bg-purple-500 z-0 border-4 border-black rounded-xl origin-bottom -rotate-6 absolute"></span>
      <button className=" w-40 h-14 font-bold border-4 text-xl rounded-2xl z-10 bg-white cursor-pointer">
        sign up
      </button>
    </div>
  );
};

export default Button;
