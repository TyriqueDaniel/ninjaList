import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum
          blanditiis et, quae eligendi incidunt ratione ullam iste qui error
          debitis perspiciatis sint consectetur harum sit eum, accusantium
          temporibus nemo!
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum
          blanditiis et, quae eligendi incidunt ratione ullam iste qui error
          debitis perspiciatis sint consectetur harum sit eum, accusantium
          temporibus nemo!
        </p>
        <Link href="ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
