import Link from 'next/link';
import Image from 'next/image';
import Input from '@/components/SignIn/Input';
import SignButton from '@/components/SignIn/SignButton';

export default function CraeteAcc() {
  return (
    <>
    <div className="bg-blue-950 max-md:bg-white w-screen h-screen flex flex-row max-md:flex-col justify-between">
    
            {/*LARGE SCREENS*/}
            <div className='max-md:hidden'>
                <div className="mb-6">
                    <Image src="/images/Tracker.png" alt="Logo" width={161} height={54} />
                </div>
                <div className='ml-[150px] mt-[100px]'>
                    <Image src="/images/Work_from_home.png" alt="picture" width={500} height={500}/>
                </div>
            </div>
    
            {/*SMALL SCREENS*/}
            <div className='hidden max-md:flex h-30 w-screen bg-blue-950  rounded-b-2xl'>
            <div className="mt-7">
                    <Image src="/images/Tracker.png" alt="Logo" width={180} height={54} />
                </div>
            </div>

        <div className='bg-white w-[100vh]'>
            <div className='md:ml-[100px] ml-14 mt-[50px] max-md:pt-30 flex md:justify-center h-[80vh] w-[70vh] flex-col'>
                <h1 className='font-semibold text-3xl'>Create account</h1>
                <div className="flex flex-row gap-0.5 mt-4 text-[15px] text-gray-700">
                <p>Already have account? </p> <Link href="" className='cursor-pointer font-semibold text-blue-700'><h3>Log in</h3></Link>
                </div>
                <div className='flex gap-[20px] max-md:gap-0.5 flex-row'>
                <Input placeholder="Full Name" type="text" width="1/2" resp="1/4"/>
                <Input placeholder="Username" type="text" width="1/2" resp="1/4"/>
                </div>
                <Input placeholder="Email address" type="text" width="70vh" resp="1/2"/>

                <Input placeholder="Password" type="password" width="70vh" resp="1/2"/>
                <Input placeholder="Confirm password" type="password" width="70vh" resp="1/2"/>
               

                <div className='flex flex-row mt-4 items-center gap-1'>
                 
                    <input type="checkbox" className='w-5'/>
                    <p className='text-[12px] text-gray-700'>I've read and agree with your</p>
                    <Link href="" className='cursor-pointer text-[12px] font-semibold text-blue-700'><h3>Terms of services</h3></Link>
                    
                </div>
                <div className='mt-5'>
                <SignButton text="Create Account"/>
                </div>
                
            </div>
        </div>
    </div>
    </>
  );
}