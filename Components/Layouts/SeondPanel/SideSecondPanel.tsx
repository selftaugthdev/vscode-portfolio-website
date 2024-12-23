import React, { useEffect, useState } from "react";
import { DownIcon, RightIcon } from "../../SVG/IconsSVG";
import SidePanelSubLink from "./SidePanelSubLink";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

interface IProps {
  closeSideMenu: () => void;
}

export const SideSecondPanel: React.FC<IProps> = (props: any) => {
  const [aboutClose, setAboutClose] = useState(false);
  const [projectsClose, setProjectsClose] = useState(false);
  const [contactClose, setcontactClose] = useState(false);
  const [miscClose, setmiscClose] = useState(false);
  let isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });

  const router = useRouter();
  
const [activeCurrentSubLink, setActiveCurrentSubLink] = useState("");

useEffect(() => {
  const currentSubLink = window.location.href.split("/").pop();
  
  const subLinkMap = {
    Experience: "experience.css",
    Skills: "skills.js",
    Projects: "projects.ts",
    "": "index.html",
    Hobbies: "Hobbies",
    Blogs: "Blogs",
    Email: "Email",
    Gaming: "Gaming",
    Anime: "Anime",
    Learning: "Learning",
    Startup: "Startup"
  };

  // Handle numeric cases 1-6
  if (/^[1-6]$/.test(currentSubLink)) {
    setActiveCurrentSubLink(currentSubLink);
  } else {
    setActiveCurrentSubLink(subLinkMap[currentSubLink] || "");
  }
}, []);

  return (
    <div className="overflow-hidden menu-option">
      <h5 className="myweight ">EXPLORER</h5>
      <div
        className="pb-5 mb-5 z-1 scrollbar "
        style={{ height: "84%", overflowY: "scroll" }}
      >
        <div className="menu-drop">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setAboutClose(!aboutClose)}
            >
              <div className="myweight flex-min topPadd">
                {!aboutClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="flex-auto myweight">About</span>
            </div>
            {!aboutClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "index.html" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="index.html"
                      link="/"
                      icon={<span className="icons8-html-5"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Experience");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={`smallSide ${
                      activeCurrentSubLink === "experience.css" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="experience.css"
                      link="/Experience"
                      icon={<span className="icons8-css3"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Skills");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "skills.js" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="skills.js"
                      link="/Skills"
                      icon={<span className="icons8-javascript"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={`smallSide ${
                      activeCurrentSubLink === "projects.ts" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="projects.ts"
                      link="/Projects"
                      icon={<span className="icons8-typescript"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="pt-1 menu-drop">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setProjectsClose(!projectsClose)}
            >
              <div className="myweight flex-min topPadd">
                {!projectsClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="flex-auto myweight">Side Projects</span>
            </div>
            {!projectsClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/Projects/1");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "1" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Ayedot.js"
                      link="/Projects/1"
                      icon={<span className="icons8-nodejs"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/2");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "2" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Ayefan.js"
                      link="/Projects/2"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/3");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "3" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Onwos.ts"
                      link="/Projects/3"
                      icon={<span className="icons8-angularjs"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/4");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "4" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="fireflow.js"
                      link="/Projects/4"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/5");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "5" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Shortlit.js"
                      link="/Projects/5"
                      icon={<span className="icons8-nodejs"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Projects/6");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "6" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Xport.js"
                      link="/Projects/6"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="pt-1 menu-drop ">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setcontactClose(!contactClose)}
            >
              <div className="myweight flex-min topPadd">
                {!contactClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="flex-auto myweight">Contact</span>
            </div>
            {!contactClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/Email");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Email" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Email.tsx"
                      link="/Email"
                      icon={<span className="icons8-gmail"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="pt-1 pb-12 menu-drop">
          <div className="box-click">
            <div
              className="flex pl-1 cursor-pointer"
              onClick={() => setmiscClose(!miscClose)}
            >
              <div className="myweight flex-min topPadd">
                {!miscClose ? <DownIcon /> : <RightIcon />}
              </div>
              <span className="flex-auto myweight">Misc</span>
            </div>
            {!miscClose && (
              <div className="show-pre">
                <ul>
                  <li
                    onClick={() => {
                      router.push("/Hobbies");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Hobbies" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Hobbies.cpp"
                      link="/Hobbies"
                      icon={<span className="icons8-cplusplus"></span>}
                    />
                  </li>
{/*                   <li
                    onClick={() => {
                      router.push("/Blogs");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Blogs" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Blogs.py"
                      link="/Blogs"
                      icon={<span className="icons8-typescript"></span>}
                    />
                  </li> */}
                  <li
                    onClick={() => {
                      router.push("/Gaming");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Gaming" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Gaming.sln"
                      link="/Gaming"
                      icon={<span className="icons8-c-sharp"></span>}
                    />
                  </li>
                  {/* <li
                    onClick={() => {
                      router.push("/Anime");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Anime" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Anime.jsx"
                      link="/Anime"
                      icon={<span className="icons8-react"></span>}
                    />
                  </li> */}
                  <li
                    onClick={() => {
                      router.push("/Learning");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Learning" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Learning.ts"
                      link="/Learning"
                      icon={<span className="icons8-angularjs"></span>}
                    />
                  </li>
                  <li
                    onClick={() => {
                      router.push("/Startup");
                      isTabletOrMobile ? props.closeSideMenu() : null;
                    }}
                    className={` smallSide ${
                      activeCurrentSubLink === "Startup" ? "active" : ""
                    }`}
                  >
                    <SidePanelSubLink
                      name="Startup.js"
                      link="/Startup"
                      icon={<span className="icons8-nodejs"></span>}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isTabletOrMobile && (
        <ul className="pl-2 bottom-links">
          <li className="border-b border-gray-500 border-solid ">
            <span className="text-gray-400">All Rights Reserved. </span>
          </li>
          <li>
            <span className="text-gray-400"> Ⓒ Copyright {new Date().getFullYear()}. </span>
          </li>
        </ul>
      )}
    </div>
  );
};
