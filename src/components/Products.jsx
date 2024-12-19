import React from "react";

function Products(){
return(
<div className="flex flex-row">
    <svg className="my-auto" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="white" />
        <path d="M37.5 18.75L25 12.5L12.5 18.75V31.25L25 37.5L37.5 31.25V18.75Z" stroke="#007E32" stroke-width="4"
            stroke-linejoin="round" />
        <path d="M12.5 18.75L25 25M25 25V37.5M25 25L37.5 18.75M31.25 15.625L18.75 21.875" stroke="#007E32"
            stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <div className="mx-auto flex flex-col text-center">
        <p className="font-roboto text-base font-medium leading-4 text-left w-28 h-5 gap-0">Total Products</p>
        <p className="font-roboto text-[24px] font-bold leading-[28.13px] text-centre">456</p>
    </div>

</div>
);
}

export default Products