import Image from 'next/image';

export default function SignButton({text}) {
    return (
        
        <button className='flex items-center justify-center gap-2 w-[70vh] max-md:w-1/2 h-[40px] mt-5 bg-blue-700 rounded-sm text-white'>{text} <Image src="/icons/arrow.png" width={15} height={15}/></button>
    );
}