import Image from "next/image";
import { useState } from "react";


export default function Input({placeholder, type, width, resp}) {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={` md:w-${width} max-md:w-${resp} mt-4 px-[10px] py-[20px] flex justify-between items-center border-2 border-gray-300 rounded-sm h-[50px]`}>
            <input type={type === 'password' ? (showPassword ? "text" : "password") : type} placeholder={placeholder} className={` w-full text-[15px] text-blue-950 outline-0 border-0`}/>
            
            {type === 'password' && <Image src={showPassword ? "/icons/hide-password.png" : "/icons/show-password.png"} width={25} height={25} className='cursor-pointer ml-2' onClick={() => setShowPassword(!showPassword)}/>}
                 

        </div>
    );
}
