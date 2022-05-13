import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        // strategy는 스크립트를 로드하는 시점을 제어한다.
        strategy='lazyOnload'
        onLoad={() => {
          console.log('페이스북 스크립트 로드 완료');
        }}
      />
      <h1>First Post</h1>
      <h2>
        {' '}
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
