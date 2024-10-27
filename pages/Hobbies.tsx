import { NextPage } from "next";
import Link from "next/link";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const Hobbies: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Hobbies</title>
        <meta
          name="description"
          content={`What i like to do the most in my spare time.`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Contact me"} />
        <meta
          name="description"
          content={`What i like to do the most in my spare time.`}
        />
        <link rel="canonical" href={"https://www.thierrydebelder.com"} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://www.thierrydebelder.com"} />
        <meta property="og:site_name" content="Thierry De Belder" />
        <meta property="og:image" content="/mainthumbnail.PNG" />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:widgets:csp" content="on" />
      </Head>
      {!isTabletOrMobile ? (
        <div className="">
          <main className="w-full max-w-5xl m-4 overflow-hidden shadow-lg backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl lg:m-6">
            <div className="p-12">
              <div className="">
                <h1 className="pb-2 text-3xl font-bold leading-tight text-indigo-500 lg:text-5xl">
                  Hobbies
                </h1>
                <div className="text-gray-400 dark:text-gray-400">
                  {" "}
                  List of stuff i like to do in my Spare Time.
                </div>
                <div className="grid grid-cols-3 gap-4 pt-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Blogs">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            className="h-20 p-3 rounded-md"
                            src="https://img.icons8.com/?size=100&id=MxVguCxiwVia&format=png&color=000000"
                            alt="Trading icon"
                          />
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          Trading
                        </h2>{" "}
                      </div>
                    </Link>
                  </div>
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Gaming">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            className="h-20 p-3 rounded-md"
                            src="https://img.icons8.com/?size=100&id=YObj0fzpW3Re&format=png&color=000000"
                            width="80"
                            height="50"
                            alt="Gaming icon"
                          />
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          Gaming
                        </h2>
                      </div>
                    </Link>
                  </div>
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Anime">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            className="h-20 p-2 rounded-md"
                            src="https://img.icons8.com/?size=100&id=yPOgUFWHVx7X&format=png&color=000000"
                            alt="naruto icon"
                          />
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          Netflix
                        </h2>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Learning">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            src="https://img.icons8.com/?size=100&id=qk6EKKDxdVwc&format=png&color=000000"
                            alt="Learning icon"
                            className="h-20 p-2 rounded-md"
                          />{" "}
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          Learning
                        </h2>
                      </div>
                    </Link>
                  </div>
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Startup">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            src="https://img.icons8.com/?size=100&id=B0YxODenuYvG&format=png&color=000000"
                            className="h-20 p-4 rounded-md"
                            alt="Startup icon"
                          />
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          StartUp
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="p-3 ">
          <main className="w-full overflow-hidden shadow-lg backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl">
            <div className="p-1">
              <div className="">
                <h1 className="pb-2 text-3xl font-bold leading-tight text-indigo-500 lg:text-5xl">
                  Hobbies
                </h1>
                <div className="text-gray-400 dark:text-gray-400">
                  {" "}
                  List of stuff i like to do in my Spare Time.
                </div>
                <div className="grid grid-cols-3 gap-4 pt-5 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Blogs">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            className="p-3 rounded-md "
                            src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-blogging-free-time-wanicon-lineal-color-wanicon.png"
                            alt="Blogging icon"
                            width="80"
                            height="auto"
                          />
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          Blogging
                        </h2>{" "}
                      </div>
                    </Link>
                  </div>
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Gaming">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            className="p-3 rounded-md"
                            src="https://img.icons8.com/ios/50/000000/controller.png"
                            width="80"
                            height="auto"
                            alt="Gaming icon"
                          />
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          Gaming
                        </h2>
                      </div>
                    </Link>
                  </div>
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Anime">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            className="p-2 rounded-md"
                            src="https://img.icons8.com/ios/50/000000/naruto.png"
                            alt="naruto icon"
                            width="80"
                            height="auto"
                          />
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          Animes
                        </h2>
                      </div>
                    </Link>
                  </div>{" "}
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Learning">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            src="https://img.icons8.com/ios/50/000000/learning.png"
                            alt="Learning icon"
                            className="p-2 rounded-md "
                            width="80"
                            height="auto"
                          />{" "}
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          Learning
                        </h2>
                      </div>
                    </Link>
                  </div>
                  <div className="block p-1 transition-colors rounded-md cursor-pointer hover:bg-gray-50 hover:bg-opacity-30">
                    <Link href="/Startup">
                      <div>
                        <div className="flex items-center justify-center mb-2 bg-white rounded-md">
                          <img
                            src="https://img.icons8.com/ios/50/000000/rocket--v1.png"
                            className="p-4 rounded-md"
                            alt="Startup icon"
                            width="80"
                            height="auto"
                          />
                        </div>
                        <h2 className="font-semibold text-center text-white">
                          StartUp
                        </h2>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </Scrollbars>
  );
};

export default Hobbies;
