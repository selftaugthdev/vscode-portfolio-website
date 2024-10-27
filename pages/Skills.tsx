import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars-2";
import Head from "next/head";

const Skills: NextPage = () => {
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Skills</title>
        <meta name="description" content={`Skills`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Skills"} />
        <meta name="description" content={`Skills`} />
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
      <div className="w-full p-5 pb-40 mt-2 ml-3 text-left ">
        <h2 className="text-3xl font-bold leading-tight text-indigo-500 lg:text-5xl ">
          Skills
        </h2>
        <p className="max-w-2xl mt-4 text-lg font-medium text-gray-300">
          Data Structures and Algorithms, Frontend Development, Backend
          Development, Database Management, System Design and Cloud.
        </p>

        <div className="w-full pb-5 mb-5 ">
          <div className="mt-5">
            <p className="mt-2 text-xl tracking-tight text-gray-400">
              Programming
            </p>
            <dl className="mt-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/144/000000/javascript--v1.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    JavaScript
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/96/000000/typescript.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    TypeScript
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
{/*                   <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/48/null/python--v1.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Python
                  </p> */}
                </dt>
              </div>
            </dl>
          </div>

          <div className="pt-5 mt-5">
            <p className="mt-2 text-xl tracking-tight text-gray-400">
              Full-Stack Development
            </p>
            <dl className="mt-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      width="90%"
                      src="https://img.icons8.com/color/144/000000/react-native.png"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    React
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/fluency/144/000000/node-js.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Node.js
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img width="90%" src="https://i.ibb.co/Kj1TqRv/image.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Next.js
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Tailwind
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/144/000000/bootstrap.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Bootstrap
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/144/000000/sass.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    SASS
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
{/*                   <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://img.icons8.com/ios-filled/150/000000/jquery.png"
                      width="90%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    JQuery
                  </p> */}
                </dt>
              </div>
            </dl>
          </div>

          <div className="pt-5 mt-5">
            <p className="mt-2 text-xl tracking-tight text-gray-400">
              Database
            </p>
            <dl className="mt-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/ios-filled/100/000000/sql.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    SQL
                  </p>
                </dt>
              </div>
{/*               <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/48/null/redis.png" />{" "}
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Redis
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/48/null/postgreesql.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    PostgresSQL
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/1200px-Cassandra_logo.svg.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Cassandra
                  </p>
                </dt>
              </div> */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    MongoDB
                  </p>
                </dt>
              </div>
            </dl>
          </div>

          <div className="pt-5 mt-5">
            <p className="text-xl tracking-tight text-gray-400 ">DevOps</p>
            <dl className="mt-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
{/*               <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://img.icons8.com/color/144/000000/amazon-web-services.png"
                      width="70%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    AWS
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://i.ibb.co/CnLsjhp/download.png"
                      width="70%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Cloudflare
                  </p>
                </dt>
              </div> */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img src="https://img.icons8.com/color/144/000000/git.png" />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Git
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://img.icons8.com/fluency/144/000000/github.png"
                      width="80%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    GitHub
                  </p>
                </dt>
              </div>
{/*               <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://img.icons8.com/color/144/000000/bitbucket.png"
                      width="80%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Bitbucket
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://img.icons8.com/color/144/000000/azure-1.png"
                      width="80%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Azure App Service
                  </p>
                </dt>
              </div> */}
            </dl>
          </div>

          <div className="pt-5 mt-5">
            <p className="text-xl tracking-tight text-gray-400 ">Tools</p>
            <dl className="mt-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://img.icons8.com/fluency/144/000000/visual-studio-code-2019.png"
                      width="80%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Visual Studio Code
                  </p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILwHh21Dky51ePyPy2V_qsPeQWd5n136Sa8PQuhIMmOGLpprK6Zt7qWn9cRL21LE3RzM&usqp=CAU"
                      width="80%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    Postman
                  </p>
                </dt>
              </div>
              {/* <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-white rounded-md">
                    <img
                      src="https://img.icons8.com/color/144/000000/jira.png"
                      width="80%"
                    />
                  </div>
                  <p className="pt-3 ml-16 text-lg font-medium leading-6 text-gray-100">
                    JIRA
                  </p>
                </dt>
              </div> */}
            </dl>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Skills;
