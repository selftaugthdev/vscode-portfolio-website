import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { SideSecondPanel } from "./SeondPanel/SideSecondPanel";
import Clock from "react-live-clock";
import countapi from "countapi-js";
import { numberTOWords } from "../Helper/utility";
import { SideMainPanel } from "./SideMainPanel/SideMainPanel";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

const Layout: React.FC = ({ children, visitorsCount }: any) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 943px)" });
  const [VisitorCount, setVisitorCount] = useState("");
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (isTabletOrMobile) {
      setOpenSideMenu(false);
    }
  }, [isTabletOrMobile]);

  useEffect(() => {
    if (typeof window !== "undefined" && router.pathname !== "/") {
      let recentLinks: any = localStorage.getItem("history");
      recentLinks = recentLinks ? JSON.parse(recentLinks) : [];
      recentLinks = recentLinks.slice(0, 4);
      recentLinks = recentLinks.filter(
        (link: string) => link !== window.location.pathname
      );
      recentLinks.unshift(window.location.pathname);
      localStorage.setItem("history", JSON.stringify(recentLinks));
    }
  }, [router.pathname]);

  const toggleSideMainMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  countapi.visits("global").then((result: any) => {
    setVisitorCount(numberTOWords(result.value));
  });
  return (
    <>
      <div className="w-full header">
        <div className="pl-2 logo ">
          <img
            src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
            alt="Visual Studio Code Icon"
            width="60"
            height="60"
          />
        </div>
        <ul className="header-menu">
          <li className="header-menu-link">
            <Link href="/">About</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Experience">Experience</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Skills">Skills</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Projects">Projects</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Email">Contact</Link>
          </li>
          <li className="header-menu-link">
            <Link href="/Hobbies">Hobbies</Link>
          </li>
        </ul>
        {!isTabletOrMobile ? (
          <div className="header-app-icons">
            <div className="flex flex-row items-center">
              <button
                onClick={() => history.back()}
                className="flex flex-col items-center justify-center p-1 m-1 text-gray-400 rounded-full transition-color hover:bg-gray-100 hover:bg-opacity-60 focus:outline-none focus:ring-2"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  style={{ fill: "white" }}
                >
                  <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>
              </button>
              <div
                className="p-1 mr-2 text-white rounded-full "
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgba(248, 113, 113, 1)",
                }}
              ></div>
              <div
                className="p-1 mr-2 text-white rounded-full "
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgba(251, 191, 36, 1)",
                }}
              ></div>
              <div
                className="p-1 mr-5 text-white rounded-full"
                style={{
                  width: "0.75rem",
                  height: "0.75rem",
                  backgroundColor: "rgba(52, 211, 153, 1)",
                }}
              ></div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="w-full scrollbar">
        <nav
          className={`${
            openSideMenu ? styles.navside : styles.navsidecollapse
          }`}
        >
          <SideMainPanel
            toggleSideMainMenu={toggleSideMainMenu}
            mainActiveSideButton={openSideMenu}
          />
          {openSideMenu && (
            <SideSecondPanel closeSideMenu={() => setOpenSideMenu(false)} />
          )}
        </nav>
        <main
          className={`${
            openSideMenu ? styles.mainside : styles.mainsidecollapse
          } scrollbar  `}
        >
          {children}
        </main>
      </div>

      {!isTabletOrMobile ? (
        <div className="relative z-50 pb-6 bg-blue-400 bottom-header">
          <ul className="pt-1 right " style={{ fontSize: "12px" }}>
            <li>Made with ❤️ in</li>
            <li>NEXT.JS</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
          </ul>
          <ul className="left ">
            <li>{VisitorCount} Total Visits</li>
            <li>
              {
                <Clock
                  format={"dddd, MMMM Mo, YYYY, h:mm:ss A"}
                  ticking={true}
                />
              }
            </li>
            <li>UTF-8</li>
            <li>
              <i className="fa fa-radiation-alt"></i> Port: 4000
            </li>
          </ul>
        </div>
      ) : (
        <div className="fixed relative z-50 pb-6 bg-blue-400 bottom-header">
          <ul className="pt-1 right " style={{ fontSize: "12px" }}>
            <li>NEXT.JS</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
          </ul>
          <ul className="left ">
            <li>{VisitorCount} Total Visits</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Layout;
