import { NextPage } from "next";
import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

const Email: NextPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const finalSendEmail = async () => {
    setLoading(true);
    const data = {
      email: email,
      message: message,
      name: name,
    };
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await res.json();

    setError("");
    setEmail("");
    setMessage("");
    setName("");
    setLoading(false);
    setDone(true);
  };

  return (
    <Scrollbars
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      universal={true}
    >
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content={`Contact me for any discussions on cool ideas or projects. `}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={"Contact me"} />
        <meta
          name="description"
          content={`Contact me for any discussions on cool ideas or projects. `}
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
        <div className="w-full h-full mx-auto">
          <section className="items-center justify-center mx-auto rounded-md shadow-xl">
            <div className="max-w-6xl pt-10 pb-10 mx-auto ">
              <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 mt-8 mr-2 sm:rounded-lg">
                    <h1 className="mx-auto text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl dark:text-white">
                      Get in touch
                    </h1>
                    <p className="mt-2 text-lg font-medium text-gray-600 text-normal sm:text-2xl dark:text-gray-400">
                      Fill in the form to start a conversation
                    </p>
                    <p className="mt-2 font-normal text-gray-400 text-normal text-md dark:text-gray-400">
                      You can contact me with any job offers, questions, suggestions or just
                      to say hi. I am always open to new ideas and
                      collaborations. It can be anything like collaborating on
                      good projects or startups or freelancing.
                    </p>
                    <p className="mt-2 text-sm text-red-600 dark:text-gray-400">
                      {error}
                    </p>
                  </div>

                  {!done ? (
                    <form className="flex flex-col justify-center p-6">
                      <div className="flex flex-col">
                        <label htmlFor="name" className="hidden">
                          Name
                        </label>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="hidden">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label htmlFor="tel" className="hidden">
                          Message
                        </label>
                        <textarea
                          name="details"
                          value={message}
                          id="details"
                          placeholder="Message"
                          onChange={(e) => setMessage(e.target.value)}
                          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                        ></textarea>
                      </div>

                      {!loading ? (
                        <button
                          type="button"
                          onClick={() => {
                            if (email === "") {
                              setError("Please enter your email.");
                            } else if (message === "") {
                              setError("Please enter your message.");
                            } else if (name === "") {
                              setError("Please enter your name.");
                            } else {
                              setError("");
                              setEmail("");
                              setMessage("");
                              setName("");
                              finalSendEmail();
                            }
                          }}
                          className="px-6 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-indigo-500"
                        >
                          Submit
                        </button>
                      ) : (
                        <div
                          className="flex pt-4 text-indigo-500 spinner-border"
                          role="status"
                        >
                          <img
                            src="https://img.icons8.com/ios/50/ffffff/loading-circle.gif"
                            className="flex rounded-full"
                            width="30"
                            height="30"
                          />
                          <span className="flex-auto pt-1 pl-2 font-medium text-white">
                            Loading...{" "}
                          </span>
                        </div>
                      )}
                    </form>
                  ) : (
                    <div className="flex items-center justify-center w-4/3">
                      <div className="justify-center text-sm font-medium text-center text-gray-300">
                        <div className="pb-3 text-lg text-left ">
                          Thank you for your message. <br /> I Will get back to
                          you as soon as possible.
                        </div>
                        <div className="pb-3 text-left ">
                          <img
                            src="https://c.tenor.com/mCiM7CmGGI4AAAAC/naruto.gif"
                            width="75%"
                            height="100"
                            className="text-center rounded-lg "
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>{" "}
          </section>
        </div>
      ) : (
        <div className="w-full h-full pb-20 ">
          <section className="items-center justify-center rounded-md shadow-xl">
            <div className="">
              <div className="overflow-hidden">
                <div className="p-3 ">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 dark:text-white">
                    Get in touch
                  </h1>
                  <p className="mt-2 text-lg font-medium text-gray-600 text-normal dark:text-gray-400">
                    Fill in the form to start a conversation
                  </p>
                  <p className="mt-2 font-normal text-gray-400 text-normal text-md dark:text-gray-400">
                    You can contact me with any job offers, questions, suggestions or just
                    to say hi. I am always open to new ideas and collaborations.
                    It can be anything like collaborating on good projects or
                    startups, freelancing, or anything else.
                  </p>
                  <p className="mt-2 text-sm text-red-600 dark:text-gray-400">
                    {error}
                  </p>
                </div>

                {!done ? (
                  <form className="justify-center p-3 pb-20">
                    <div className="">
                      <label htmlFor="name" className="hidden">
                        Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className="mt-2 ">
                      <label htmlFor="email" className="hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className="mt-2 ">
                      <label htmlFor="tel" className="hidden">
                        Message
                      </label>
                      <textarea
                        name="details"
                        value={message}
                        id="details"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                      ></textarea>
                    </div>

                    {!loading ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (email === "") {
                            setError("Please enter your email.");
                          } else if (message === "") {
                            setError("Please enter your message.");
                          } else if (name === "") {
                            setError("Please enter your name.");
                          } else {
                            setError("");
                            setEmail("");
                            setMessage("");
                            setName("");
                            finalSendEmail();
                          }
                        }}
                        className="px-6 py-3 mt-3 mb-20 font-bold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-indigo-500"
                      >
                        Submit
                      </button>
                    ) : (
                      <div
                        className="flex pt-4 mb-20 text-indigo-500 spinner-border"
                        role="status"
                      >
                        <img
                          src="https://img.icons8.com/ios/50/ffffff/loading-circle.gif"
                          className="flex rounded-full"
                          width="30"
                          height="30"
                        />
                        <span className="flex-auto pt-1 pl-2 font-medium text-white">
                          Loading...{" "}
                        </span>
                      </div>
                    )}
                  </form>
                ) : (
                  <div className="flex items-center justify-center w-full p-2 pt-5 pb-20 ">
                    <div className="justify-center text-sm font-medium text-center text-gray-300">
                      <div className="pb-3 text-lg text-left ">
                        Thank you for your message. <br /> Will get back to you
                        as soon as possible.
                      </div>
                      <div className="pb-3 text-left ">
                        <img
                          src="https://c.tenor.com/mCiM7CmGGI4AAAAC/naruto.gif"
                          width="100%"
                          height="100"
                          className="text-center rounded-lg "
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>{" "}
          </section>
        </div>
      )}
    </Scrollbars>
  );
};

export default Email;
