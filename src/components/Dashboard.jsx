import React from 'react';
import PurchaseOrder from './Purchase-Order';
import Icons from './Icons';
import ShortInfo from './ShortInfo';
import Amount from './Amount';
import RawMaterials from './RawMaterials';
import Orders from './Orders';
import Products from './Products';
import ProductMapping from './Product-mapping';
import ProductionSop from './Production-SOP';
import BarChart from './Barchart';
import LineChart from './Linechart';


const Dashboard = () => {
return (
<div
  className="mx-[15px] mt-[100px] bg-[#f1f3ff] grid grid-rows-[10%_30%_25%_auto] grid-cols-[225px_225px_225px_225px_auto] gap-[15px] w-[1480px] h-[630px] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] rounded-lg px-[7px] py-[7px]">

  <div
    className="products grid col-start-1 col-end-2 row-start-1 row-end-2 bg-[#007e32] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] text-white p-[5px] pl-[10px] rounded-lg">
    <Products />
  </div>

  <div
    className="orders grid col-start-2 col-end-3 row-start-1 row-end-2 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-[#00068b] text-white p-[5px] pl-[10px] rounded-lg">
    <Orders />
  </div>

  <div
    className="raw grid col-start-3 col-end-4 row-start-1 row-end-2 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-[#ad0000] text-white p-[5px] pl-[10px] rounded-lg">
    <RawMaterials />
  </div>

  <div
    className="amount grid col-start-4 col-end-5 row-start-1 row-end-2 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-[#6e5600] text-white p-[5px] pl-[10px] rounded-lg">
    <Amount />
  </div>

  <div
    className="short-info  bg-[#c3cbff] grid col-start-5 col-end-6 row-start-1 row-end-2 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] text-black p-[5px] pl-[10px] rounded-lg">
    <ShortInfo />
  </div>

  <div
    className="c1r1 bg-[#ffffff] grid col-start-1 col-end-4 row-start-2 row-end-3 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-[10px] rounded-lg">
    <div className="h-auto w-auto bg-white flex items-center justify-center">
      <LineChart />
    </div>
  </div>

  <div
    className="c1r2 bg-[#ffffff] grid col-start-1 col-end-4 row-start-3 row-end-4 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white px-[10px] py-[5px] rounded-lg">
    <ProductMapping />
  </div>
  <div
    className="c1r3 bg-[#ffffff] grid col-start-1 col-end-4 row-start-4 row-end-5 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white px-[10px] py-[5px] rounded-lg">
    <PurchaseOrder />
  </div>

  <div
    className="c2r1 bg-[#ffffff] grid col-start-4 col-end-6 row-start-2 row-end-4 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg">
      <div className="h-auto w-auto bg-white flex items-center justify-center">
      <BarChart />
    </div>

  </div>

  <div
    className="px-[10px] c2r2 bg-[#ffffff] grid col-start-4 col-end-6 row-start-4 row-end-5 shadow-[0_0_4px_0_rgba(0,0,0,0.25)] bg-white p-4 rounded-lg">
    <ProductionSop />
  </div>

</div>


);
};

export default Dashboard;