import React from "react";
import { useState, useRef } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";
import { Link } from "react-router-dom";
// Music Player Setting

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="lg:px-100 px-[10%] py-4">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="spacing text-2xl font-semibold uppercase tracking-widest">
            Quotable
          </h1>
        </Link>
        <div className="flex items-center gap-x-4 p-2 duration-300">
          <Link to={"/"}>
            <div className="rounded-xl p-2 duration-300 hover:bg-yellow-200">
              <IoMdHome className="rounded-xl text-2xl hover:cursor-pointer" />
            </div>
          </Link>
          <Link to={"/create"}>
            <div className="rounded-xl p-2 duration-300 hover:bg-yellow-200">
              <FaPlusSquare className="rounded-xl text-2xl hover:cursor-pointer" />
            </div>
          </Link>
          <div>
            <button onClick={togglePlay}>
              {isPlaying ? (
                <MdMusicOff className="rounded-xl text-2xl hover:cursor-pointer" />
              ) : (
                <MdMusicNote className="rounded-xl text-2xl hover:cursor-pointer" />
              )}
            </button>
            <audio
              ref={audioRef}
              src="../../public/music.mp3"
              type="audio/mp3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
