"use client";

import Image from "next/image";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col  gap-12">
      <section id="features" className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row w-full py-6 gap-4">
          <div className="order-2 md:order-1 row-span-2 h-[36rem] md:h-[46rem]">
            <Image src={"/img/home/hand.png"} alt="Hero" width={500} height={900} className="w-full" />
          </div>
          
          <div className="order-1 md:order-2 relative flex flex-col text-center justify-center gap-4">
            <div className="p-4">
              <p className="font-atr-extrabold text-5xl md:text-6xl text-bw-lightblue">COPY TRADING</p>
              <p className="text-4xl md:text-5xl italic text-white">with Blackwell Intest</p>
            </div>

            <div className="flex flex-row gap-4 w-1/2 mx-auto">
              <div className="flex-1 rounded-md md:rounded-xl overflow-clip">
                <Image src={"/img/home/google-play.jpg"} alt="Hero" width={393} height={118} className="w-full"/>
              </div>
              <div className="flex-1 rounded-md md:rounded-xl overflow-clip">
                <Image src={"/img/home/app-store.jpg"} alt="Hero" width={393} height={118} className=" h-auto" />
              </div>
            </div>

            <div className="absolute right-0 z-[-1]">
              <Image src={"/img/home/regular.png"} alt="Hero" width={393} height={118} className="w-32 h-32" />
            </div>
          </div>
          
          <div className="order-3 relative flex flex-col text-end md:text-start justify-center gap-4">
            <div className="p-4">
              <p className="font-atr-extrabold text-3xl text-bw-lightblue">Choose & Trade</p>
              <p className="font-atr-extrabold text-3xl text-bw-gold">Ready-To-Go Strategies</p>
              <p className="text-md md:text-lg text-white">Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.</p>
            </div>

            <div className="flex flex-row gap-4 w-1/2 mx-auto pb-24">
              <div className="flex-1 rounded-md md:rounded-xl overflow-clip">
                <Image src={"/img/home/google-play.jpg"} alt="Hero" width={393} height={118} className="w-full"/>
              </div>
              <div className="flex-1 rounded-md md:rounded-xl overflow-clip">
                <Image src={"/img/home/app-store.jpg"} alt="Hero" width={393} height={118} className=" h-auto" />
              </div>
            </div>
            <Link to="/register">
              <button className='w-1/2 bg-gradient-to-b from-amber-500 to-bw-orange hover:from-amber-400 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out'>
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      <section id="quickguide" className="flex flex-col items-center gap-32 text-white text-xl">

        <div className="flex flex-col items-center gap-8">
          <p className="font-atr-extrabold text-3xl text-bw-lightblue">Fast Matching</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col justify-end items-end">
              <Image src={"/img/home/mobile-1.png"} alt="Hero" width={700} height={1600} className="w-3/4 h-auto max-h-screen" />
            </div>

            <div className="flex flex-col justify-center items-start gap-6">
              <div className="flex flex-row justify-center">
                <Image src={"/img/home/list-icon.png"} alt="Hero" width={100} height={35} className="w-18 pt-3 pe-2" />
                <p>Spotlight</p>
              </div>
              <div className="flex flex-row justify-center">
                <Image src={"/img/home/list-icon.png"} alt="Hero" width={100} height={35} className="w-18 pt-3 pe-2"  />
                <p>Top Strategies</p>
              </div>
              <div className="flex flex-row justify-center">
                <Image src={"/img/home/list-icon.png"} alt="Hero" width={100} height={35} className="w-18 pt-3 pe-2"  />
                <p>Low Drawdown</p>
              </div>
              <div className="flex flex-row justify-center">
                <Image src={"/img/home/list-icon.png"} alt="Hero" width={100} height={35} className="w-18 pt-3 pe-2"  />
                <p>Medium Drawdown</p>
              </div>
              <div className="flex flex-row justify-center">
                <Image src={"/img/home/list-icon.png"} alt="Hero" width={100} height={35} className="w-18 pt-3 pe-2"  />
                <p>High Drawdown</p>
              </div>
              <div className="flex flex-row justify-center">
                <Image src={"/img/home/list-icon.png"} alt="Hero" width={100} height={35} className="w-18 pt-3 pe-2"  />
                <p>New Strategies</p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-2/3">
          <p className="font-atr-extrabold text-3xl text-bw-lightblue">Easy Analysis</p>
          <p>Instant clarity on the Masters’ profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place. </p>
          <div className="flex flex-col justify-end items-end">
            <Image src={"/img/home/mobile-2.png"} alt="Hero" width={700} height={1600} className="w-3/4 h-auto max-h-screen" />
          </div>
        </div>

      </section>

      <section id="promote" className="mb-16">
        <Image src={"/img/home/bg-1.png"} alt="Hero" width={8000} height={2542} className="w-full max-h-screen" />
        <p className="font-atr-extrabold text-3xl text-bw-lightblue">Trade Like a Pro in Minutes</p>

      </section>
      <section id="enquire" className="mb-16">
      </section>
    </div>
  );
}