import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import NmapForm from 'src/components/nmap-form';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hackerion</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Set ip address and let's get started</h1>
        <NmapForm />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
