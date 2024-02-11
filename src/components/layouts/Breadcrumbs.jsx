import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa"

const Breadcrumbs = ({ className, link1, value1, link2, value2, value3 }) => {
  return (
    <>
      <p
        className={`font-poppins font-normal text-sm md:text-base capitalize flex gap-[2px] items-center text-[#02344F] ${className}`}
      >
        <NavLink to={link1}>{value1}</NavLink>
        <FaAngleRight />
        <NavLink to={link2}>{value2}</NavLink>
        <FaAngleRight />
        <p className="text-sm md:text-base text-[#757575]">{value3}</p>
      </p>
    </>
  );
};

export default Breadcrumbs;
