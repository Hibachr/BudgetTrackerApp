import  HelpLists from "@/components/HelpList";
import CardList from "@/components/cardList";


export default function Mycard() {
  return (
    <>

      <div className="flex flex-col justify-around w-full h-screen">
            <div className="px-10">
                <h1 className="font-inter font-bold text-[32px] leading-[40px] tracking-[0%]">My Card</h1>
                <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[0%] text-[#5B6776]">Keep track of your financial plan</p>
            </div>
          
            <div className="flex w-full justify-between px-10">
          

                  <div className=""><CardList /></div>

                  <div className="w-lg "><HelpLists/></div>
            </div>

      </div>
       


    </>
  );
}