import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <h2 className={styles.title}>Home</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        quaerat.
      </p>
      <Link href={"/ninja"}>
        <a className={styles.btn}>See ninja listings</a>
      </Link>
    </div>
  );
}
