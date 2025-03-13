import  HelpLists from "@/components/Card/HelpList";
import CardList from "@/components/Card/cardList";


export default function Mycard() {
  return (
    <>

      <div className="flex flex-col justify-around w-full h-full pl-70 gap-10 ">
            <div className="px-10">
                <h1 className="font-inter font-bold text-[32px] leading-[40px] tracking-[0%]">My Card</h1>
                <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[0%] text-[#5B6776]">Keep track of your financial plan</p>
            </div>
          
            <div className="flex justify-between px-6">
          

                  <div className=""><CardList /></div>

                  <div className="w-lg "><HelpLists/></div>
            </div>

      </div>
       


    </>
  );
}