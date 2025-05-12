import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="registerForm" className="mb-16 text-start">

        <div className="w-full ">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="flex flex-row gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Country
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
              <button className='bg-gradient-to-b from-amber-500 to-bw-orange hover:from-amber-400 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out'>Register</button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</a>
            </div>
            
          </form>
        </div>
        {/* 
        <input type="text" placeholder="First Name" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="text" placeholder="Last Name" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="text" placeholder="Mobile" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="text" placeholder="Country" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="password" placeholder="Password" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="password" placeholder="Confirm Password" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" /> */}

      </section>
    </div>
  );
}