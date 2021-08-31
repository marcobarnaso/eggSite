import React from "react";
import ImageOne from "../images/imageOne.jpg";
import ImageTwo from "../images/imageTwo.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="egg" className="image-scale" 
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Avocado Eggs</h2>
          <p className="mb-2">Crispy, delicious and nutricious.</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="egg" className="image-scale" 
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Avocado Toast</h2>
          <p className="mb-2">Crispy, delicious and nutricious.</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;
