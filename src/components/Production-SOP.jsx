import React from "react";

function ProductionSop(){
return(

<div className="flex flex-col">

    <p className="w-auto h-[21px] font-roboto text-lg font-medium leading-[21.09px] text-left">
        Product SOP
    </p>

    <div className="flex flex-row mt-[20px] py-[3px]">

        <p className="py-[3px] font-roboto font-normal text-xs leading-4 text-black">Product</p>
        <input
            className="ml-[5px] p-[3px] h-[25px] w-[55px] rounded font-roboto font-normal text-[11px] leading-[13px] text-black py-[5px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)]"
            type="text" value="Product Y" />

        <p className="py-[3px] ml-[5px] font-roboto font-normal text-xs leading-4 text-black">Batch Number</p>
        <input
            className="ml-[5px] p-[3px] h-[25px] w-[55px] rounded font-roboto font-normal text-[11px] leading-[13px] text-black py-[5px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)]"
            type="text" value="76286309" />

        <p className="py-[3px] ml-[5px] font-roboto font-normal text-xs leading-4 text-black">Production Date</p>
        <input
            className="ml-[5px] p-[3px] h-[25px] w-[55px] rounded font-roboto font-normal text-[11px] leading-[13px] text-black py-[5px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)]"
            type="text" value="05/06/2024" />
    </div>

    <div className="container mx-auto">
        <table
            className="min-w-full bg-white mt-[5px] h-auto border border-[#DFDFDF] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] ">
            <thead>
                <tr className="bg-[#5970F5] text-white text-sm leading-[normal]">
                    <th className="border border-[#DFDFDF] py-[5px] px-[10px] text-center">Description of Process</th>

                    <th className="border border-[#DFDFDF] py-[5px] px-[10px] text-center">Sub Process</th>
                    <th className="border border-[#DFDFDF] py-[5px] px-[10px] text-center">Start Time</th>
                    <th className="border border-[#DFDFDF] py-[5px] px-[10px] text-center">End Time</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-[#F6F4F4] text-blue-700 text-sm leading-normal">

                    <td className="border border-[#DFDFDF] py-[5px] px-[10px] text-center">Process one</td>
                    <td className="border border-[#DFDFDF] py-[5px] px-[10px] text-center">Sub Process Ten</td>
                    <td className="border border-[#DFDFDF] py-[5px] px-[10px] text-center">11:54</td>
                    <td className="border border-[#DFDFDF] py-[5px] px-[10px] text-center">17:54</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>


);
}

export default ProductionSop