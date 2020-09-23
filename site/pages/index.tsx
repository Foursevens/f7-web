import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import styles from '../styles/Home.module.css';
import { MainContainer } from './containers';

interface Props {
  data: {
    menus: Array<{
      menu_items: Array<{ href: string; title_en: string }>;
      title_en: string;
    }>;
  };
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('http://localhost:1337/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query {
        menus {
          menu_items {
            href
            title_en
          }
        }
      }`,
    }),
  });
  const { data } = (await response.json()) as Props;
  return { props: { data } };
};

export default function Home({ data }: Props): React.ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foursevens</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <MainContainer headerMenu={data.menus[0].menu_items}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a className={styles.card} href="https://nextjs.org/docs">
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a className={styles.card} href="https://nextjs.org/learn">
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              className={styles.card}
              href="https://github.com/vercel/next.js/tree/master/examples"
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              className={styles.card}
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </MainContainer>
    </div>
  );
}
