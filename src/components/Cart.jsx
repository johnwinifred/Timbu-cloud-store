import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import React from "react";
import { Link } from "react-router-dom";

function Cart({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange
}) {
  return (
    <div className={ ` z-50 fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-50 ${visibility ? 'block' : 'hidden'}`}>
      <div className="w-3/5 h-5/6 my-8 mx-auto bg-gray-200 p-4 flex flex-col relative">
        <div className="flex bg-gray-300 p-2.5 justify-between">
          <h2>Shopping cart</h2>
          <button className="text-black" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="flex flex-col items-start py-4 overflow-y-scroll">
          {products.length === 0 && (
            <span className="block p-8 m-auto">
              Your basket is currently empty
            </span>
          )}
          {products.map((product) => (
            <div className="flex flex-row justify-between items-center w-full bg-white p-2.5  border-2 gap-2 border-[#008080]" key={product.id}>
              <img src={product.image} alt={product.name} className="w-24 bg-white" />
              <div className="flex-basis-1/2">
                <h3 className="font-normal text-black">{product.name}</h3>
                <span>{product.price * product.count}$</span>
              </div>
              <select
                className="w-16 text-black outline-none"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}>
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button className="text-black" onClick={() => onProductRemove(product)}>
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          {products.length > 0 && (
            <Link to={'/checkout'}>
            <button className="bg-[#008080] p-2.5 text-base text-white self-center my-8">
              Proceed to checkout
            </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
