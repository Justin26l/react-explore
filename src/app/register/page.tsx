import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="registerForm" className="mb-16">
        First Name, Last name, email, mobile, country, password, confirm password
        <input type="text" placeholder="First Name" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="text" placeholder="Last Name" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="text" placeholder="Mobile" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="text" placeholder="Country" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="password" placeholder="Password" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />
        <input type="password" placeholder="Confirm Password" className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full" />

        <button className='w-1/2 bg-gradient-to-b from-amber-500 to-bw-orange hover:from-amber-400 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out'>
          Register
        </button>

      </section>
    </div>
  );
}