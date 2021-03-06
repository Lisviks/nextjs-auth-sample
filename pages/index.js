import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>SignIn</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email || session.user.name} <br />
            <div>You can now access our super secret pages</div>
            <button>
              <Link href='/secret'>To The Secret</Link>
            </button>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </main>
    </div>
  );
}
