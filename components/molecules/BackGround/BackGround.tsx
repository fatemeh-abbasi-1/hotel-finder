import React from "react";

const BackGround = () => {
  return (
    <div className="flex">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="my-custom-bg"></div>
      ))}
    </div>
  );
};

export default BackGround;
