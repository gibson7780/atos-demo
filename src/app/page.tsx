"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  // get 5 params passed in from richard life app
  const channelIdParam = searchParams.get("channelId");
  const secureCodeParam = searchParams.get("secureCode");
  const isChMemberParam = searchParams.get("isChMember");
  const chUUIDParam = searchParams.get("chUUID");
  const chMobileNoParam = searchParams.get("chMobileNo");

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div
        className={styles.center}
        style={{
          color: "green",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* http://localhost:3002/?secureCode=1&channelId=2&isChMember=3&chUUID=4&chMobileNo=5 */}
        <div>secureCode: {secureCodeParam}</div>
        <div>channelId: {channelIdParam}</div>
        <div>isChMember: {isChMemberParam}</div>
        <div>chUUID: {chUUIDParam}</div>
        <div>chMobileNo: {chMobileNoParam}</div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
