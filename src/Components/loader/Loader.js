import React from "react";


const Loader = () => {
  return (
    <>
      className={style.Loader}
      type="ThreeDots"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000}
    </>
  );
};

export default Loader;

