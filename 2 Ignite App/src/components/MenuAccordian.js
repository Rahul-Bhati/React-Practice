import React, { useState } from "react";

const MenuAccordian = ({ show, setshow }) => {
  const arr = ["Panner", "Alu Paranta", "Dosa", "Puri"];
  console.log(show, setshow);
  //const [show, setShow] = useState(false);

  const handleClick = () => {
    setshow();
  }
  return (
    <>
      <div className=" bg-gray-100 shadow-lg p-4 flex justify-between cursor-pointer mt-2" onClick={handleClick}>
        <span className="font-bold">
          Recomanded
        </span>
        <span>
          {show ? <span> 🔽 </span> : <span> 🔼 </span>}
        </span>
      </div>
      {show && arr.map((item, index) => {
        return (
          <div className="pb-2">
            <div key={index} className="flex justify-between pt-4 p-4">
              <div className="p-2 w-9/12">
                <h3 className="font-bold">{item}</h3>
                <p className="font-thin">A rich and creamy Indian delicacy, bursting with flavors and cooked to perfection.</p>
                <span>{19000 / 100} ₹</span>
              </div>
              <div className="h-auto w-3/12 rounded-lg object-fill">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/vw47vue5l6ykx6tl4zwk" />
              </div>
            </div>
            <hr />
          </div>
        )

      })}
    </>
  )
}

export default MenuAccordian;