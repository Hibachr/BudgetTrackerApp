import Link from 'next/link';
import Image from 'next/image';
import Input from '@/components/SignIn/Input';
import SignButton from '@/components/SignIn/SignButton';

export default function Login() {
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
                <h1 className='font-semibold text-3xl'>Sign in</h1>
                <div className="flex flex-row gap-0.5 mt-4 text-[15px] text-gray-700">
                <p>Don't have account?</p> 
                <Link href="/createAcc" className='cursor-pointer font-semibold text-blue-700'>
                <h3>Create Account</h3></Link>

                </div>

                <Input placeholder="Email Address" type="text" width="70vh"  resp="1/2"/>

                <Input placeholder="Password" type="password" width="70vh"  resp="1/2"/>
               

                <div className='max-md:w-1/2 flex flex-row justify-between mt-4'>
                    <div className='flex flex-row gap-1.5 items-center'>
                        <input type="checkbox" className='w-5'/>
                        <p className='text-[15px] text-gray-700'>Remember me</p>
                    </div>
                    <div>
                    <Link href="" className='cursor-pointer font-semibold text-blue-700'><h3>Forgot password</h3></Link>
                    </div>
                </div>
                <div className='mt-5'>
                <SignButton text="Sign in"/>
                </div>
                
            </div>
        </div>
    </div>
    </>
  );
}