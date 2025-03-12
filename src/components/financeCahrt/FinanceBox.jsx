import Image from "next/image";

export default function FinanceBox({ icon, name, amount }) {

  return (
    <div className=" p-3 w-64 max-md:w-[80%] h-16 rounded-md shadow max-md:border-2 max-md:border-gray-100 flex flex-row items-center gap-3">
      <Image src={icon} width={40} height={30}/>
      <div className="flex flex-col">
        <div className="text-xs">{name}</div>
        <div className="font-bold">${amount}</div>
      </div>
    </div>
  );
}
