import Image from "next/image";

export default function Home() {
  return <>
  <div className="flex justify-center select-none  flex-col items-center h-screen">

        <div className="w-[380px]  px-10 py-15 rounded-md border-[1px] border-gray-300 shadow-md">

          <h3 className="text-center text-[22px] font-semibold italic">cDrive</h3>

          <div>
            <span  className="text-[14px] font-semibold">Username</span><br />
            <input className="w-full  font-semibold  placeholder:text-gray-400 text-[14.5px] my-1 border-[#808385] outline-none rounded-[4px]  border-[2px] px-1.5 py-1.5" type="text" placeholder="Please enter your username here." />
          </div>

          <div>
            <span className="text-[14px] font-semibold">Password</span><br />
            <input className="w-full font-semibold  placeholder:text-gray-400 my-1 text-[14.5px] border-[#888C8C] outline-none border-[2px] px-1.5 py-1.5 rounded-[4px]" type="password" placeholder="Please enter your password here." />
          </div>

          <div className="flex justify-end text-[13px] font-semibold text-gray-500  hover:text-gray-700">
            <button className="hover:cursor-pointer">Forget Password?</button>
          </div>

          <button className="bg-[#60666B] text-[14px] text-white font-[500] shadow px-3 py-1.5 hover:cursor-pointer hover:bg-[#767a7e] my-2 rounded-[2px] w-[100%]">Let's Go</button>

          <p className="text-[13px] px-1 font-semibold text-center">By continuing, you agree to cDrive's conditions and privacy policy.</p>

        </div>
  </div>
  </>
}
