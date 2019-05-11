import React from 'react'
import Head from 'next/head'
import 'isomorphic-unfetch'

import Nav from '../components/nav'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '' }
  }


  static async getInitialProps () {
    const res = await fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    const json = await res.json()
    let quote = json[0].content.match(/<p>(.*)<\/p>/i)[1]
    return { quote: quote, author: json[0].title }
  }

  componentDidMount() {
    this.setState({ url: "https://cataas.com/cat?width=500&height=375"})
  }

  render() {
    return (
      <div>
        <Head>
          <title>Modern Web App</title>
          <meta name='description' content='MWA is a progressive solution to build awesome web applications'/>
          <meta name='keywords' content='MWA, Modern Web App, PWA, Progressive Web App, Next.js, Next, Tailwind, Redux, WebDev'/>
          <meta name='author' content='VanishMax'/>
        </Head>
        <Nav />
        <div className='hero'>
          <h1 className='title'>Redux Cat-counter</h1>

          <div className="default-grid">
            <div className="flex md:hidden lg:hidden">
              <div className="w-full my-8 mx-2">
                <div className="rounded shadow-lg text-lg p-4">
                  <p className="text-justify" dangerouslySetInnerHTML={{__html: this.props.quote}}/>
                  <p className="text-right italic pt-4">{this.props.author}</p>
                </div>
              </div>
            </div>

            <div className="flex md:hidden lg:hidden">
              <div className="w-full my-8 mx-2">
                <div className="rounded shadow-lg text-lg p-4">
                  <p>Kekes</p>
                </div>
              </div>
            </div>

            <div className="flex md:hidden lg:hidden">
              <div className="w-full rounded shadow-lg my-8 mx-2">
                <div className="w-full">
                  {this.state.url && <img className="w-full rounded" src={this.state.url} alt="Catass"/>}
                </div>

                <div className="px-6 py-6">
                  <div className="font-bold text-xl mb-2 text-center">Modern Web App</div>
                </div>
              </div>
            </div>
        </div>

          <div className="middle-grid">
            <div className="hidden md:flex lg:hidden">
              <div className="md:w-1/2 my-8 mx-2">
                <div className="rounded shadow-lg text-lg p-4">
                  <p className="text-justify" dangerouslySetInnerHTML={{__html: this.props.quote}}/>
                  <p className="text-right italic pt-4">{this.props.author}</p>
                </div>
              </div>

              <div className="md:w-1/2 my-8 mx-2">
                <div className="rounded shadow-lg text-lg p-4">
                  <p>Kekes</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex lg:hidden">
              <div className="md:w-full rounded shadow-lg my-8 mx-2">
                <div className="w-full">
                  {this.state.url && <img className="w-full rounded" src={this.state.url} alt="Catass"/>}
                </div>

                <div className="px-6 py-6">
                  <div className="font-bold text-xl mb-2 text-center">Modern Web App</div>
                </div>
              </div>
            </div>
          </div>

          <div className="large-grid">
            <div className="hidden lg:flex">

              <div className="w-1/4 my-8 mx-2">
                <div className="rounded shadow-lg text-lg p-4">
                  <p className="text-justify" dangerouslySetInnerHTML={{__html: this.props.quote}}/>
                  <p className="text-right italic pt-4">{this.props.author}</p>
                </div>
              </div>

              <div className="w-1/2 rounded shadow-lg my-8 mx-2">
                <div className="w-full">
                  {this.state.url && <img className="w-full rounded" src={this.state.url} alt="Catass"/>}
                </div>

                <div className="px-6 py-6">
                  <div className="font-bold text-xl mb-2 text-center">Modern Web App</div>
                </div>
              </div>

              <div className="w-1/4 my-8 mx-2">
                <div className="rounded shadow-lg text-lg p-4">
                  <p>Kekes</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
