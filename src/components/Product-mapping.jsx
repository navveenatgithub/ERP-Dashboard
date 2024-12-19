import React from "react";

function ProductMapping() {
return (
<div className="flex flex-col">
  <p className="w-auto h-[21px] font-roboto text-lg font-medium leading-[21.09px] text-left">
    Product Mapping Report
  </p>

  <div className="flex flex-row gap-[20px] mt-[5px] justify-between">

    <div className="flex flex-row gap-[20px] mt-[5px]">
      <p className="h-[15px] font-roboto mt-[5px]">
        Purchase Order
      </p>

      <div class="relative my-[5px] h-[25px] w-[67px]">
        <div className="h-[25px] w-[67px]">
          <button type="button"
            className="h-[25px] w-[67px] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white pl-[5px] py-[3px] text-sm font-semibold text-[#5970F5] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button" aria-expanded="true" aria-haspopup="true">
            Lad
            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[55px] h-[29px] bg-[#5970F5] my-[5px] rounded-lg">
        <div
          className="flex  rounded-lg focus-within:ring-2 h-full w-screen focus-within:ring-blue-500 items-center px-2">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.77778 9.27778L11 11.5M1 5.94444C1 7.12318 1.46825 8.25365 2.30175 9.08714C3.13524 9.92064 4.2657 10.3889 5.44444 10.3889C6.62318 10.3889 7.75365 9.92064 8.58714 9.08714C9.42064 8.25365 9.88889 7.12318 9.88889 5.94444C9.88889 4.7657 9.42064 3.63524 8.58714 2.80175C7.75365 1.96825 6.62318 1.5 5.44444 1.5C4.2657 1.5 3.13524 1.96825 2.30175 2.80175C1.46825 3.63524 1 4.7657 1 5.94444Z"
              stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <p className="font-roboto text-[12px] text-white font-medium leading-[11.72px] ml-[5px]">
            Find
          </p>
        </div>
      </div>

    </div>



    <button
      className="right-0 h-[29px] w-[52px] bg-[#5970F5] px-[5px] rounded-lg text-white mt-[5px] font-roboto text-[12px] font-medium leading-[11.72px] text-centre"
      type="button">
      Print
    </button>

  </div>




  <div className="flex flex-row justify-between">



  </div>


  <div className="container mx-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-[#C3CBFF] font-roboto text-[13px] text-black font-normal leading-[15.23px] ">
          <th className="py-[5px] px-[10px] text-center">S No</th>
          <th className="py-[5px] px-[10px] text-center">Raw Material</th>
          <th className="py-[5px] px-[10px] text-center">UOM</th>
          <th className="py-[5px] px-[10px] text-center">Warehouse</th>
          <th className="py-[5px] px-[10px] text-center">Required Quantity
          </th>
          <th className="py-[5px] px-[10px] text-center">Available Quantity
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-[30px]">
          <td className="py-[5px] px-[10px] text-center">01</td>
          <td className="py-[5px] px-[10px] text-center">Wooden Box</td>
          <td className="py-[5px] px-[10px] text-center">kg</td>
          <td className="py-[5px] px-[10px] text-center">ASD</td>
          <td className="py-[5px] px-[10px] text-center">12</td>
          <td className="py-[5px] px-[10px] text-center">12</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
);
}

export default ProductMapping