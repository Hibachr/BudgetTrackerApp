import Link from 'next/link';
import Image from 'next/image';
import Input from '@/components/SignIn/Input';

export default function Login() {
  return (
    <div className="bg-blue-950 w-screen h-screen flex max-md:flex-col">
      
      {/* LARGE SCREENS */}
      <div className="hidden md:flex flex-col items-center justify-center w-1/2">
        <div className="mb-6">
          <Image src="/images/Tracker.png" alt="Logo" width={161} height={54} />
        </div>
        <Image src="/images/Work_from_home.png" alt="picture" width={500} height={500} />
      </div>

      {/* SMALL SCREENS HEADER */}
      <div className="md:hidden flex justify-center items-center h-[80px] w-full bg-blue-950 rounded-b-2xl">
        <Image src="/images/Tracker.png" alt="Logo" width={180} height={54} />
      </div>

      {/* FORM CONTAINER */}
      <div className="bg-white w-full md:w-1/2 flex justify-center items-center h-full">
        <div className="w-full max-w-[400px] px-6">
          <h1 className="font-semibold text-3xl">Sign in</h1>
          <div className="flex flex-row gap-1 mt-4 text-[15px] text-gray-700">
            <p>Don't have an account?</p>
            <Link href="/createAcc" className="cursor-pointer font-semibold text-blue-700">
              <h3>Create Account</h3>
            </Link>
          </div>

          <Input placeholder="Email Address" type="text" width="full" />
          <Input placeholder="Password" type="password" width="full" />

          <div className="flex justify-between mt-4">
            <label className="flex items-center gap-2 text-[15px] text-gray-700">
              <input type="checkbox" className="w-5" />
              Remember me
            </label>
            <Link href="#" className="cursor-pointer font-semibold text-blue-700">
              <h3>Forgot password?</h3>
            </Link>
          </div>

          <div className="mt-5">
            <button className="flex items-center justify-center gap-2 w-full h-[40px] bg-blue-700 rounded-sm text-white">
            <Image src="/icons/arrow.png" width={15} height={15} alt="arrow" />
            Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
