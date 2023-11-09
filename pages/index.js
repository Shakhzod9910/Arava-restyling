import Head from 'next/head'
import Main from './home'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Arava</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}
