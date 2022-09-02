
import React from "react";
import { Link } from "react-router-dom";

export const ProductList = ({
  productListTitle,
  productListDesctiption,
  productListBtn,
  productListImg,
  productLink,
}) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />

      <div className="w-full md:w-1/2 xl:w-1/4 px-4">
        <div className="bg-white rounded-lg overflow-hidden mb-10">
          <img src={productListImg} alt="a" className="w-full" />
          <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3>
              <Link
                to={productLink}
                className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
              >
                {productListTitle}
              </Link>
            </h3>
            <p className="text-base text-body-color leading-relaxed mb-7">
              {productListDesctiption}
            </p>
            <Link
              to={productLink}
              className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
            >
              {productListBtn}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
