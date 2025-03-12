import SideBar from "@/components/sidebar/sidebar";
import { useState } from "react";
import DropDown from "@/components/financeCahrt/DropDown";
import Chart from "@/components/financeCahrt/Chart";
import FinanceBox from "@/components/financeCahrt/FinanceBox";
import NavBar from "@/components/navBar/navBar";

export default function FinanceChart() {
  const [type, setType] = useState("Income Chart");  // Stores selected chart type
  const [duration, setDuration] = useState("This Month"); // Stores selected time duration

  return (
    <div className="flex flex-col md:flex-row ">
      <SideBar />
      <NavBar/>

      <div className="mt-5 flex flex-col flex-grow p-5 md:p-10">
        {/* Page Title */}
        <div>
          <h1 className="font-bold text-4xl max-md:text-[18px]">Finance Chart</h1>
          <p className="mt-2 text-[#5B6776] text-[12px]">Keep track of your financial plan</p>
        </div>

        {/* Statistic Section */}
        <div className="mt-24 max-md:mt-8 w-full">
          <div className="flex md:flex-row max-md:flex-col items-start justify-between md:items-center">
            <h1 className="font-bold text-[14px] max-md:mb-2">Statistic</h1>
            
            {/* Dropdowns */}
            <div className="flex flex-row gap-4">
              <DropDown
                options={["Income Chart", "Outcome Chart"]}
                selected={type}
                onSelect={(option) => setType(option)}
              />
              <DropDown
                options={["This Year", "This Month", "This Day"]}
                selected={duration}
                onSelect={(option) => setDuration(option)}
              />
            </div>
          </div>

          {/* Chart Component */}
          
          <Chart option1={type} option2={duration}/>
          
        </div>

        <div className="flex flex-col max-md:items-center max-md:gap-7 md:flex-row mt-96 max-md:mt-75 justify-between">
          <FinanceBox
          icon="/icons/icon1.png"
          name="Lifetime income"
          amount="40,728"/>

          <FinanceBox
          icon="/icons/icon2.png"
          name="Lifetime Outcome"
          amount="30,239"/>

          <FinanceBox
          icon="/icons/icon3.png"
          name="Bonus income"
          amount="2,490"/>
        </div>
      </div>
    </div>
  );
}
