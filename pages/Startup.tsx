import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars-2";
import Head from "next/head";

const Startup: NextPage = () => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      {" "}
      <Head>
        <title>Startup</title>
        <meta name="description" content={`Startup`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Startup"} />
        <meta name="description" content={`Startup`} />
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
      <article className="ml-3 text-left scrollbar ">
        <section className="pr-5 mt-5 mb-12">
          <div className="flex flex-row items-center justify-center h-full bg-center bg-no-repeat bg-cover rounded-lg bg-applearn">
            <main className="flex flex-col w-full max-w-5xl m-4 overflow-hidden shadow-lg lg:flex-row backdrop-filter backdrop-blur-md bg-opacity-20 rounded-xl lg:m-6">
              <div className="flex-1 p-4 lg:p-6">
                <div className="flex items-center mb-4 text-lg text-white">
                  <div className="md:flex items-cente text0 ">
                    <h1 className="block w-full py-2 pl-3 text-4xl font-bold lg:inline">
                      Under Development
                    </h1>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>{" "}
      </article>
    </Scrollbars>
  );
};

export default Startup;
