const helpLinks = [
  "Check Your Cash Flow",
  "Change Primary Card",
  "Pay Tax",
  "Make Invoice",
  "Refer a Friend",
];

const colors = ["#ED1865", "#D61D72", "#8E1BB6", "#1642E8", "#38A3DB"];

import Image from "next/image";
export default function HelpLists() {
  return (
    <div className="border border-[#E2E8F0] p-4 rounded-lg w-lg h-[600px] flex flex-col gap-8">
      <div className="flex items-center justify-between px-3">
        <div><p className="font-inter font-normal text-[24px] leading-[30px] tracking-[-2.4%] text-[#344055] pt-4">See Our Help</p></div>
        <div className="px-3 pt-2"><Image src="/icons/Icon3.png" alt="Logo" width={6} height={15} /></div>
      </div>

      <div className="px-3 flex flex-col gap-10">
        <div className=" divide-y divide-[#E2E8F0] border-b border-[#E2E8F0] flex flex-col gap-3 pt-2 ">
          {helpLinks.map((item, index) => (
            <li className="py-2 list-none flex items-center justify-between ">
              <div className="flex items-center">
              <div className="w-1 h-12 rounded-tr-[4px] rounded-br-[4px]"style={{ backgroundColor: colors[index % colors.length] }}></div>
                <div className="pb-3 font-inter font-semibold text-[16px] leading-[24px] tracking-[-1%] text-[#344055] px-3   "><a key={index} >{item}</a></div>
               
              </div>
              
              
              <div className="px-3"><Image src="/icons/Icon2.png" alt="Logo" width={7.5} height={15} /></div>

            </li>
          ))}
        </div>

        <button className="font-inter font-semibold text-[18px] leading-[24px] tracking-[-2%] text-[#79808A] border border-[#E2E8F0] w-[135px] h-[47px]  rounded-full border hover:bg-[#E6EEFC]">Look More</button>
      </div>


    </div>
  );
};