import React from "react";

function PurchaseOrder() {
return (
<div className="flex flex-col">

  <div className="flex flex-row justify-between ">

    <p className="w-auto my-[10px] ml=[5px] h-[21px] font-roboto text-lg font-medium leading-[21.09px] text-centre">
      Purchase Order
    </p>

    <div class="relative my-auto">
      <div>
        <button type="button"
          className="inline-flex w-[80px] h-[25px] justify-center text-centre gap-x-1.5 rounded-md bg-white text-[13px] font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 px-[4px] py-[3px] "
          id="menu-button" aria-expanded="true" aria-haspopup="true">
          Options
          <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

  </div>




  <div className="flex flex-row justify-between h-[29px] my-[5px] ">
    <div className="flex flex-row justify-between w-[299px] h-[25px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white my-[5px] rounded-lg">
      <div
        className="flex  rounded-lg focus-within:ring-2 h-full w-screen focus-within:ring-blue-500 items-center px-2">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.625 10.625L13.125 13.125M1.875 6.875C1.875 8.20108 2.40178 9.47285 3.33947 10.4105C4.27715 11.3482 5.54892 11.875 6.875 11.875C8.20108 11.875 9.47285 11.3482 10.4105 10.4105C11.3482 9.47285 11.875 8.20108 11.875 6.875C11.875 5.54892 11.3482 4.27715 10.4105 3.33947C9.47285 2.40178 8.20108 1.875 6.875 1.875C5.54892 1.875 4.27715 2.40178 3.33947 3.33947C2.40178 4.27715 1.875 5.54892 1.875 6.875Z"
            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


        <input type="text" className="flex-grow h-full bg-opacity-0 border-none focus:outline-none"
          placeholder="  Search..." />
      </div>
    </div>


    <button
      className="h-[29px] w-[69px] bg-[#5970F5] p-[5px] rounded-lg text-white font-roboto text-[12px] font-medium leading-[11.72px] text-left"
      type="button">
      + Add PO
    </button>
  </div>


  <div className="container mx-auto">
    <table className="min-w-full bg-white mt-[5px] h-auto " style={{ width: "682px" }}>
      <thead>
        <tr className="bg-[#5970F5]  text-white text-sm leading-[normal]">
          <th className=" text-center"></th>
          <th className="py-[5px] px-[10px] text-center">Sno</th>
          <th className="py-[5px] px-[10px] text-center">Vendor Name</th>
          <th className="py-[5px] px-[10px] text-center">Product Name</th>
          <th className="py-[5px] px-[10px] text-center">Delivery Date</th>
          <th className="py-[5px] px-[10px] text-center">Order Quantity</th>
          <th className="py-[5px] px-[10px] text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white text-blue-700 text-sm leading-normal">
          <td className="py-[5px] px-[10px]">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
          </td>
          <td className="py-[5px] px-[10px] text-center">1</td>
          <td className="py-[5px] px-[10px] text-center">Vendor 1</td>
          <td className="py-[5px] px-[10px] text-center">Product 1</td>
          <td className="py-[5px] px-[10px] text-center">2024-07-10</td>
          <td className="py-[5px] px-[10px] text-center">100</td>
          <td className="py-[5px] px-[10px] text-center">Edit</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
);
}

export default PurchaseOrder