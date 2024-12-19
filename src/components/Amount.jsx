import React from "react";

function Amount(){
    return(
        <div className="flex flex-row">
        <svg className="my-auto" width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="white" />
          <path
            d="M18.9211 23.8421H16.2895V33.0526H18.9211V23.8421ZM26.8158 23.8421H24.1842V33.0526H26.8158V23.8421ZM38 35.6842H13V38.3158H38V35.6842ZM34.7105 23.8421H32.0789V33.0526H34.7105V23.8421ZM25.5 14.9737L32.3553 18.5789H18.6447L25.5 14.9737ZM25.5 12L13 18.5789V21.2105H38V18.5789L25.5 12Z"
            fill="#6E5600" />
        </svg>



        <div className="mx-auto flex flex-col text-center">
          <p className="font-roboto text-base font-medium leading-4 text-left w-28 h-5 gap-0">Total Amount</p>
          <p className="font-roboto text-[24px] font-bold leading-[28.13px] text-centre">1005</p>
        </div>
      </div>
    );
}

export default Amount