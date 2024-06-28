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
              . I enjoy programming and have a knack for Algorithms, Data Structures and Development.{" "}
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
         
          <section className={"self-stretch"}>

             {/*
            <p className="text-center text-3xl font-light text-dark-500">
              Posts && Blogs
            </p>
            
            <HomepagePostLayout posts={posts} />
            */}
            <Image src="/images/posts/pit.jpeg" alt="Pit" width={300} height={300} />
          </section> 
          
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