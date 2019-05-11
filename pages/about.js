import Nav from '../components/nav'
import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>About MWA</title>
      <meta name='description' content='About the MWA'/>
      <meta name='keywords' content='MWA, Modern Web App, PWA, Progressive Web App, Next.js, Next, Tailwind, Redux, WebDev'/>
      <meta name='author' content='VanishMax'/>
    </Head>
    <Nav />
    <div className='hero'>
      <h1 className='title'>Modern Web App</h1>
      <img src='/static/MWA.png' alt='Modern Web App'/>
    </div>
  </div>
)
