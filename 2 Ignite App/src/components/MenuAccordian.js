import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuAccordian = ({ show, setshow }) => {
  const arr = ["Panner", "Alu Paranta", "Dosa", "Puri"];
  // console.log(show, setshow);
  //const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    setshow();
  }

  const handleAdd = (item) => {
    dispatch(addItem(item));
    /* 
      whenever we call dispatch addItem, it will call the reducer function and add the item to the cart
      behind the scene redux create a object 
      {
        type: addItem,
        payload: item
      }
      and pass it to the reducer function and reducer function will update the store 
    */

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
          <div key={index} className="pb-2">
            <div className="flex justify-between pt-4 p-4">
              <div className="p-2 w-9/12">
                <h3 className="font-bold">{item}</h3>
                <p className="font-thin">A rich and creamy Indian delicacy, bursting with flavors and cooked to perfection.</p>
                <span>{19000 / 100} ₹</span>
              </div>
              <div className="h-auto w-3/12 rounded-lg object-fill relative">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/vw47vue5l6ykx6tl4zwk" className="rounded-lg object-cover relative" />
                <button className="bg-green-400 text-white px-4 py-2 rounded-lg absolute bottom-0 left-12 font-bold" onClick={() => handleAdd(item)}>Add +</button>
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