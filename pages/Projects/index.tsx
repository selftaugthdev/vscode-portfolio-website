import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars-2";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { projectsdata } from "../../Components/JSON/projectsdata";
import Head from "next/head";

const Projects: NextPage = (props: any) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content={`Visual Studio Code Web Developer Portfolio.`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Projects | Side"} />
        <meta
          name="description"
          content={`Visual Studio Code Portfolio Website.`}
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
      <div className="w-full p-2 mt-2 ml-1 text-left ">
        <h2 className="pb-2 pl-5 text-3xl font-bold leading-tight text-indigo-500 lg:text-5xl ">
          Projects
        </h2>
        <p className="w-4/5 pt-1 pb-2 pl-5 font-medium text-gray-400 text-md">
          Side Projects for practice.
        </p>
        {!isTabletOrMobile ? (
          <div className="grid w-full pb-5 mt-3 mb-5 grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            {props?.projects?.map((obj: any, index: number) => (
              <div className="p-3 mb-4">
                <div className="w-full overflow-hidden transition-all duration-500 transform shadow-lg cursor-pointer rounded-xl hover:shadow-2xl hover:scale-105">
                  <Link href={`/Projects/${index + 1}`}>
                    <div>
                      <div className="pl-3 pr-3">
                        <Image
                          className="rounded-xl"
                          src={index === 0 ? "/ayethumb.jpg" : obj.banner}
                          alt="Ayedot - Short Blogging Platform logo"
                          width="500"
                          height="270"
                        />
                      </div>
                      <div className="flex justify-between pt-2 pb-2 pl-3 pr-3">
                        <div className="flex items-center space-x-4">
                          <Image
                            className="w-10 h-10 rounded-full"
                            src={obj.logo}
                            alt="Ayedot - Short Blogging Platform logo"
                            width="35"
                            height="35"
                          />
                          <h1 className="text-lg font-bold text-gray-100">
                            {obj.name}
                            <p className="w-4/5 pt-1 text-sm font-medium text-gray-400 ">
                              {obj.title}
                            </p>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid w-full mt-3 pb-60 grid-cols-1s xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 ">
            {props?.projects?.map((obj: any, index: number) => (
              <div className="mb-5 " key={index + 125}>
                <div className="w-full overflow-hidden transition-all duration-500 transform shadow-lg cursor-pointer rounded-xl hover:shadow-2xl hover:scale-105">
                  <Link href={`/Projects/${index + 1}`}>
                    <div>
                      <div className="">
                        <Image
                          className="rounded-xl"
                          src={index === 0 ? "/ayethumb.jpg" : obj.banner}
                          alt="Ayedot - Short Blogging Platform logo"
                          width="500"
                          height="270"
                        />
                      </div>
                      <div className="flex justify-between pt-1 pb-2 pl-3 pr-3">
                        <div className="flex items-center space-x-4">
                          <Image
                            className="w-10 h-10 rounded-full"
                            src={obj.logo}
                            alt="Ayedot - Short Blogging Platform logo"
                            width="45"
                            height="45"
                          />
                          <h1 className="text-lg font-bold text-gray-100">
                            {obj.name}
                            <p className="pt-1 text-sm font-medium text-gray-400 ">
                              {obj.title}
                            </p>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Scrollbars>
  );
};

export function getStaticProps() {
  const projects = projectsdata();
  return {
    props: {
      projects: projects,
    },
  };
}

export default Projects;
