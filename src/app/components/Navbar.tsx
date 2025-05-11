"use client";

import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import userStoreInstance  from './../store/user';

export default function Navbar() {

  const { data: session } = useSession();

  const hardcodedUserid = 'user1';

  const userStore = userStoreInstance((state) => state); // Correct usage
  userStore.fetchDataBase(hardcodedUserid);
  userStore.fetchLocalStorage(hardcodedUserid);

  const userCollection = userStoreInstance((state) => state.userCollection);
  const userState = userStoreInstance((state) => state.userState);

  const [timeLeft, setTimeLeft] = useState({ days: 29, hours: 23, minutes: 59, seconds: 59 });



  useEffect(() => {

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = userCollection.promotionEnd - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [userCollection]); // Add user.promotionEnd as a dependency

  return (
    <nav className="bg-bw-deepblue text-white px-4 h-max-[80px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <a href="/" className="hover:underline">
          <img src="/img/logo.png" alt="Logo" className="h-full" />
        </a>

        {/* promotion */}
        <div className="flex flex-row items-center text-center gap-8">
          <p>
            PROMOTION<br />ENDS IN
          </p>
          <div>
            <div className="grid grid-cols-4 gap-4 text-3xl">
              <span>{timeLeft.days} :</span>
              <span>{timeLeft.hours} :</span>
              <span>{timeLeft.minutes} :</span>
              <span>{timeLeft.seconds}</span>
            </div>

            <div className="grid grid-cols-4 gap-4 text-sm">
              <span>Days</span>
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        {/* <button className='bg-gradient-to-b from-amber-500 to-bw-orange hover:from-amber-400 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out'>
          Login
        </button> */}

        
        {/* Login/Logout Button */}
        {session ? (
          <div className="flex items-center gap-4">
            <p>Welcome, {session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-gradient-to-b from-amber-500 to-bw-orange hover:from-amber-400 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-gradient-to-b from-amber-500 to-bw-orange hover:from-amber-400 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}