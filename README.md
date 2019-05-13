# Modern Web App (Next)

![MWA - Modern Web App](./static/MWA.jpg)
*Modern Web APP built with next.js and tailwind css*
<hr>

This is the second edition of the Modern Web App project
that is made to be a perfect view on the modern web development.
It consists of the following technologies:
* React as a base
* Next.js to be a good SSR react-cover
* Tailwind CSS gives a fully customizable design
* PWA to show the evolution of the web (in progress)

You can become familiar with MWA by looking under the hood
of the first edition made in a pure React. Read about this
app on [Medium](https://medium.com/@vanishmax/here-it-is-modern-web-app-651946efaa93)
(English) or [Habr](https://habr.com/post/432368/) (Russian)
and learn many technologies like SPA, SSR, PWA, Universal or
Isomorphic app, Code Splitting and design with material-ui there.

Then return to this repo and see how the light-weight framework
like Next.js can simplify our life and Tailwind CSS can make it
pretty.

And see [the demo](https://mwa-next.herokuapp.com/)

## What is in this example?

There is the following structure of the app which Next requires:
* Static is a directory that serves our assets
* Styles provides a customizable stylization
* Pages are serves as routes in the Next app
* Components are easily expand our abilities
* Redux serves the app's state

### Routing

Routing is made via prefetch links provided by Next.js. So, there
is no React-router needed. Every link has to lead to the pages
directory, and those components are served as primary. There are
an about page and the main page - home. Navigation (AppBar) is
independent of the router - is shown every time, even when the
pages meet errors.

### Content loading

***getInitialProps()*** - This is the function provided by Next.
It load content by the server, so no client touches it. In the
home page the quotation block gets the quotation of famous
people during server rendering. it means that when the page will
be rendered in the first time - it will have the quotation.

***componentDidMount()*** - lifecycle method accessed only by
a client when the page is fully ready. In the example it
writes in the home page's state the link for a random cat.
If you want to check - go to the browser's "View Page Source"
and try to find the image. There won't be any since the sources
are written by server that has no images in it. But search for
the quotation - there it is, rendered by server.

***Redux*** is here to be a showcase how global state could
be managed in the application with SSR. The counter simply
increases and decreases the number, while the Redux-store keeps
the state not depending on the page at where you are.

### SEO

The purpose of the Server Side Rendering is to improve the
performance and the Search Engine Optimization since the Single
Page Apps are bad for it. Next provides the Head component
to serve all the titles, meta tags and much more by the server.

Again, if you'll take a look at the page sources - there is a
good Head tag structure in it which  is rendered by the server.
It is an important criterion of the MWA.

### Design

No more words - MWA is fully adaptive. Just check  with your
mobile device or by resizing the browser's window.

### License
This project is licensed under the terms of the [MIT license](https://github.com/VanishMax/MWA-next/blob/master/LICENSE)
