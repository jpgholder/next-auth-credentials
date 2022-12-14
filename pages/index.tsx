import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSession, signOut, signIn } from "next-auth/react";

const Home: NextPage = () => {
  const { data } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {data ? (
          (() => {
            console.log(data);
            return <h2>You are signed in!</h2>;
          })()
        ) : (
          <h2>You are not signed in!</h2>
        )}
        <div className={styles.flex_container}>
          {!data && (
            <button
              style={{ marginRight: "10px" }}
              onClick={() => {
                window.location.replace("/auth/register");
              }}
            >
              Register
            </button>
          )}
          {!data && (
            <button
              onClick={() => {
                signIn();
              }}
            >
              Sign in
            </button>
          )}
          {data && (
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
