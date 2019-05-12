import React from 'react'

import '../styles/index.css'
import App, { Container } from 'next/app'
import Head from 'next/head'

import Nav from '../components/nav'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta name="theme-color" content="#810051"/>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>
          <meta name='keywords' content='MWA, Modern Web App, PWA, Progressive Web App, Next.js, Next, Tailwind, Redux, WebDev'/>
          <meta name='author' content='VanishMax'/>
        </Head>
        <Nav/>
        <Component {...pageProps} />
      </Container>
    )
  }
}
