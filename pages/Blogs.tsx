import { NextPage } from "next";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useMediaQuery } from "react-responsive";
import { blogsdata } from "../Components/JSON/BlogsData";
import Head from "next/head";

const Blogs: NextPage = (props: any) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Blogs </title>
        <meta name="description" content={`Blogs`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Blogs"} />
        <meta name="description" content={`Blogs`} />
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
        <article className="pt-6 pb-40 mb-16 text-left pl-7 scrollbar ">
          <div className="md:flex md:mr-0 ">
            <div className="md:flex items-cente text0 ">
              <h1 className="text-3xl font-bold leading-tight text-indigo-500 lg:text-5xl">
                Blogs
              </h1>
            </div>
          </div>
          <div className="pt-3 font-medium text-gray-300 dark:text-gray-400">
            Blogs Written by me, Collaborated Blogs and some of my favorite and
            interesting blogs written by others.
          </div>
          <section className="pr-5 mb-12 mt-7">
            <article>
              <section className="grid mt-6 grid-cols-1s xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-6 gap-y-8">
                {props?.blogs?.map((blog: any) => (
                  <a
                    key={blog.title}
                    href={blog.link}
                    className="relative overflow-hidden duration-200 transform bg-white rounded-lg shadow-lg group hover:shadow-2xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="relative w-full ">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="object-cover object-center w-full h-full"
                        style={{ height: "12vw" }}
                      />
                    </div>
                    <div className="px-3 py-4">
                      <h3 className="pb-2 text-sm text-gray-500">
                        <span className="px-2 py-1 text-white bg-gray-900 rounded-lg">
                          <span className="absolute inset-0"></span>
                          {blog.tag}
                        </span>
                      </h3>
                      <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        {blog.title}
                      </p>
                    </div>
                  </a>
                ))}
              </section>
            </article>
          </section>
        </article>
      ) : (
        <article className="p-2 pb-40 pl-3 text-left scrollbar">
          <div className=" items-cente text0">
            <h1 className="text-3xl font-bold leading-tight text-indigo-500 lg:text-5xl">
              Blogs
            </h1>
          </div>
          <div className="pt-3 text-sm font-medium text-gray-300 dark:text-gray-400">
            Blogs Written by me, Collaborated Blogs and some of my favorite and
            interesting blogs written by others.
          </div>
          <section className="mt-2 mb-12 ">
            <article>
              <section className="grid mt-6 grid-1">
                {props?.blogs?.map((blog: any) => (
                  <a
                    key={blog.title}
                    href={blog.link}
                    className="mb-5 overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-full ">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="object-cover object-center"
                        width="100%"
                        style={{ height: "35vw" }}
                      />
                    </div>
                    <div className="px-3 py-4">
                      <h3 className="pb-2 text-sm text-gray-500">
                        <span className="px-2 py-1 text-white bg-gray-900 rounded-lg">
                          <span className="absolute inset-0"></span>
                          {blog.tag}
                        </span>
                      </h3>
                      <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        {blog.title}
                      </p>
                    </div>
                  </a>
                ))}
              </section>
            </article>
          </section>
        </article>
      )}
    </Scrollbars>
  );
};

export function getStaticProps() {
  const blogs = blogsdata();
  return {
    props: {
      blogs: blogs,
    },
  };
}

/* export default Blogs; */
