import React from "react";
import { useEffect, useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { animedata } from "../Components/JSON/animedata";
import { useMediaQuery } from "react-responsive";
import { AlarmType } from "aws-sdk/clients/cloudwatch";

const AnimeComponent: React.FC = () => {
  const [play, setPlay] = useState<any>(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const player: any = React.createRef();

  useEffect(() => {
    if (player.current) {
      player.current.play();
    }
  }, []);

  const managePlayer = (play: any) => {
    if (player.current) {
      if (play) {
        player.current.play();
      } else {
        player.current.pause();
      }
    }
    setPlay(play);
  };

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      {!isTabletOrMobile ? (
        <article className="pb-20 mt-3 ml-3 text-left scrollbar w-100 bg-appanime ">
          <div className="flex flex-row overflow-hidden shadow-lg  rounded-xl">
            <div className="pt-5 pr-3 animeplayer">
              {play ? (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/pause--v1.png"
                  width="40"
                  height="40"
                  className="cursor-pointer "
                  onClick={() => managePlayer(false)}
                />
              ) : (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  width="40"
                  height="40"
                  className="cursor-pointer "
                  onClick={() => managePlayer(true)}
                />
              )}
            </div>
            <section className="w-full p-4 m-20 bg-gray-700 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-20 sahdow-lg">
              <div className="pb-5 ">
                <h1 className="text-3xl font-bold text-white md:text-3xl lg:text-5xl font-heading">
                  Anime
                </h1>
                <audio autoPlay loop ref={player}>
                  <source src="/NARUTORING.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <h2 className="mt-3 text-lg font-medium text-gray-100">
                  Watching Anime is also one of the things that I like to do in
                  my spare time.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                {animedata()?.map((anime) => (
                  <div
                    key={anime.title}
                    className="flex flex-col items-center justify-center w-full p-12 bg-red-900 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-20 sahdow-lg"
                  >
                    <div className="mb-8">
                      <img
                        className="object-cover object-center rounded-full h-36 w-36"
                        src={anime.img}
                        alt="naruto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="mb-2 text-xl font-bold text-white">
                        {anime.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      ) : (
        <article className="pb-40 text-left scrollbar w-100 bg-appanimemob ">
          <div className="flex flex-row overflow-hidden shadow-lg  rounded-xl">
            <div className="pt-5 pr-3 animeplayer">
              {play ? (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/pause--v1.png"
                  width="40"
                  height="40"
                  className="cursor-pointer "
                  onClick={() => managePlayer(false)}
                />
              ) : (
                <img
                  src="https://img.icons8.com/flat-round/64/000000/play--v1.png"
                  width="40"
                  height="40"
                  className="cursor-pointer "
                  onClick={() => managePlayer(true)}
                />
              )}
            </div>
            <section className="w-full p-3 m-4 mt-40 bg-gray-700 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-20 sahdow-lg">
              <div className="pb-5 ">
                <h1 className="text-3xl font-bold text-white md:text-3xl lg:text-5xl font-heading">
                  Anime
                </h1>
                <audio autoPlay loop ref={player}>
                  <source src="/NARUTORING.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
                <h2 className="mt-3 text-lg font-medium text-gray-100">
                  Watching Anime is also one of the things that I like to do in
                  my spare time.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                {animedata()?.map((anime) => (
                  <div
                    key={anime.title}
                    className="flex flex-col items-center justify-center w-full p-12 bg-red-900 rounded-lg backdrop-filter backdrop-blur-sm bg-opacity-20 sahdow-lg"
                  >
                    <div className="mb-8">
                      <img
                        className="object-cover object-center rounded-full h-36 w-36"
                        src={anime.img}
                        alt="naruto"
                      />
                    </div>
                    <div className="text-center">
                      <p className="mb-2 text-xl font-bold text-white">
                        {anime.title}
                      </p>
                      <p className="text-base font-normal text-gray-100">
                        {anime.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      )}
    </Scrollbars>
  );
};

export default AnimeComponent;
