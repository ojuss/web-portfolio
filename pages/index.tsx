import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import { getSortedPostsMeta } from "@/lib/getPosts";
import { PostMeta } from "@/lib/types";
import Image from 'next/image'
import Typing from "@/components/Typing";
import HomepagePostLayout from "@/layouts/HomepagePostLayout";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <div>
      <Head>
        <title>Ojus&apos;s Website</title>
        <link rel="icon" href="/byelol.ico" />
      </Head>
      <NavBar />
      <div className={"bg-dark-100 px-4 dark:bg-black sm:px-8"}>
        <div
          className={
            "mx-auto flex w-full max-w-prose flex-col justify-center py-16"
          }
        >
          <section
            className={
              "mt-16 w-full self-start text-dark-900 dark:text-gray-50"
            }
          >
            <h1 className={"text-4xl inline-block rounded text-green-500 dark:text-green-100 font-semibold"}>Ojus Kumar.</h1>
            
          </section>
          <section className="mb-8 mt-6 space-y-4 text-lg">
            
            <p>
              Hello world! I'm Ojus, a computer science undergrad {" "}
              <a
                href="https://ptu.ac.in/"
                target="_blank"
                rel="noreferrer"
                className={
                  "rounded bg-blue-300 px-0.5 py-0.5 font-medium text-black hover:bg-blue-400 hover:text-black dark:bg-blue-900 dark:text-white dark:hover:bg-blue-400 dark:hover:text-white"
                }
              >
                @Punjab Technical University
              </a>
              . I enjoy coding competitively and building fun things.{" "}
            </p>
            <p>
              Check out{" "}
              <Link
                href="/projects"
                className="rounded px-0.5 py-0.5 font-medium text-blue-400 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-900"
              >
                ./projects
              </Link>{" "}
              or my GitHub (
              <a
                href="https://github.com/ojuss"
                target="_blank"
                rel="noreferrer"
                className={
                  "rounded px-0.5 py-0.5 font-medium text-green-400 hover:text-green-700 dark:text-green-300 dark:hover:text-green-900"
                }
              >
                @ojuss
              </a>
              ) to see some cool projects!
            </p>
          </section>
          {/*
          <section className={"self-stretch"}>

             
            <p className="text-center text-3xl font-light text-dark-500">
              Posts && Blogs
            </p>
            
            <HomepagePostLayout posts={posts} />
            
            <Image src="/images/posts/pit.jpeg" alt="Pit" width={300} height={300} />
          </section> 
          */}
          <div className=" pb-8 flex justify-center items-center w-full">
            <div className="w-64 h-64 overflow-hidden rounded-full">
              <Image 
                src="/images/posts/pit.jpeg" 
                alt="Pit" 
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className=" space-y-4 text-lg">
            <p>
               I'm passionate about <span className="text-react">React.js</span> and <span className="text-golang">Go</span> development, creating minimilistic front-ends and strong back-ends. Always eager to sharpen my skills!
            </p>
            <p>
              When I'm not glued to my computer screen, you'll probably find me strumming my guitar or spiking a volleyball on the court. Music and sports are my go-to escapes from the tech grind.
            </p>
            <p>
              Curious to catch up or talk to me? Check out my projects and let's connect on LinkedIn!
            </p>
          </div>
          <h1 className={"text-2xl inline-block rounded text-blue-500 dark:text-blue-100 font-semibold"}>Technologies && Frameworks 🛠️</h1>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsMeta();
  return {
    props: {
      posts,
    },
  };
};
