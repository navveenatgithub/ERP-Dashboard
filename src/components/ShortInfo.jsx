import React from "react";

function ShortInfo(){
return(
<div>
    <div className="flex flex-row">

        <svg className="my-aut" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_24_691)">
                <path
                    d="M27.5 22.5V12.5H22.5V22.5H12.5V27.5H22.5V37.5H27.5V27.5H37.5V22.5H27.5ZM25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50Z"
                    fill="#5970F5" />
            </g>
            <defs>
                <clipPath id="clip0_24_691">
                    <rect width="50" height="50" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <div className="ml-[10px] flex flex-col text-center">
            <p className=" font-roboto text-base font-medium leading-4 text-left text-[12px] gap-0">SSKL Pvt Ltd</p>
            <div className="flex flex-row">
                <p className="font-roboto text-[10px] font-medium leading-5 text-left">Name: Raghu.T </p>
                <p className="ml-2 font-roboto text-[10px] font-medium leading-5 text-left">GSTIN: G766GHEBGGEB6T4</p>
            </div>
            <p className="flex flex-row font-roboto text-[10px] font-medium leading-5 text-left">Address: No.7, Kalati
                Road, Coimbatore-29</p>

        </div>
    </div>
</div>
);
}

export default ShortInfo