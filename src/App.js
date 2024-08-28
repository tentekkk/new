"use client";
import React from "react";
import Game from "./game";
import three from "./3.jpeg";
import five from "./5.jpeg";
import six from "./6.jpeg";
import line from "./line.svg";

function App() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="md:text-8xl pb-5 pt-5 text-7xl">
        <p className="font-ds">Ainalayin</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 pb-14">
        <div className="md:text-6xl text-5xl">
          <p className="font-ds">itstentek</p>
        </div>
        <div className="text-4xl pt-3">🐹🐹🐹</div>
      </div>
      <div className="flex md:flex-row justify-center items-center md:gap-24 gap-12 md:pb-24 pb-10 flex-col-reverse">
        <div className="flex flex-col justify-center items-center">
          <div className="text-6xl pb-3">
            <p className="font-ds">Moscow Girl</p>
          </div>
          <div className="w-96 text-3xl text-center">
            <p className="font-greyqo">"In your presence, even the rain becomes a waltz, each drop a note in the symphony of our dance."</p>
            <p className="font-greyqo pt-3">~🥤</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={line} alt="" width={100} height={100} />
          <div className="flex flex-col w-56 h-72 relative bg-pink-200 opacity-85">
            <img src={three} alt="3rd image" className="rounded-xl" style={{width: "100%", height: "100%", objectFit: "cover"}} />
          </div>
          <img src={line} alt="" width={100} height={100} />
        </div>
      </div>
      <div className="flex md:flex-row justify-center items-center gap-5 flex-col">
        <div className="flex flex-col w-56 h-72 relative bg-pink-200 opacity-85">
          <img src={five} alt="6th image" className="rounded-xl" style={{width: "100%", height: "100%", objectFit: "cover"}} />
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={line} alt="6th image" width={100} height={100} />
          <div className="text-6xl pb-3">
            <p className="font-ds">My cutie pie</p>
          </div>
          <img src={line} alt="6th image" width={100} height={100} />
        </div>

        <div className="flex flex-col w-56 h-72 relative bg-pink-200 opacity-85">
          <img src={six} alt="6th image" className="rounded-xl" style={{width: "100%", height: "100%", objectFit: "cover"}} />
        </div>
      </div>
      <div className="text-5xl pb-3 md:pt-20 pt-10 text-center">
        <p className="font-ds">I wanna be your coronary artery</p>
      </div>
      {/* TIC TAC TOE */}
      <Game />
    </div>
  );
}

export default App;
