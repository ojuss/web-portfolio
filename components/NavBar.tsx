import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import GitHubButton from "./GitHubButton";
import Link from "next/link";
import { postsDir, tagsDir } from "../utils/routes";
import Logo from "./Logo";
import LinkedInButton from "./LinkedInButton";
import GmailButton from "./GmailButton";
import DevCommunityButton from "./DevCommunity";

const NavBar = () => {
  return (
    <nav
      className={`fixed z-10 flex min-w-full items-center justify-between py-4 px-4 backdrop-blur-[20px] backdrop-saturate-[1.8] backdrop-filter sm:px-10`}
    >
      <div className={"mx-auto flex w-full max-w-6xl justify-between"}>
        <div
          className={`navbar flex items-center space-x-3 text-xs sm:space-x-8 sm:text-lg`}
        >
          {/* <Link href="/">
            <span className="relative font-daddybee text-7xl text-green-400 dark:text-white hover:text-transparent hover:bg-clip-text transition-colors duration-300 ease-in-out"
                  style={{
                    '--gradient-from': '#3B82F6',  // blue-400
                    '--gradient-via': '#8B5CF6',  // purple-500
                    '--gradient-to': '#EC4899',   // pink-500
                  }}
            >
              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                ojus.
              </span>
              ojus.
            </span>
          </Link> */}

          <Logo />
          <Link href={`/projects`}>
            ./projects
          </Link>
          <Link href={`/${postsDir}`}>
            ./{postsDir}
          </Link>
          <a target="_blank" rel="noreferrer" href="">
            ./photos
          </a>
          <Link href={`/${tagsDir}`}>
            ./{tagsDir}
          </Link>
        </div>
        <div className={`navbar flex items-center space-x-2 sm:space-x-6`}>
          <DarkModeToggle />
          <LinkedInButton />
          <GitHubButton />
          <GmailButton />
          <DevCommunityButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
