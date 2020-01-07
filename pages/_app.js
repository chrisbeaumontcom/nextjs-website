import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import { trackPageView } from '../helpers/ga.js';
import NProgress from 'nprogress';
//import GalleryContext from "../components/GalleryContext";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      NProgress.start();
    };
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
      NProgress.done();
    };
    Router.onRouteChangeError = () => {
      NProgress.done();
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

// <GalleryContext.Provider value={{  galleryLoaded: this.state.galleryLoaded }}  >
// </GalleryContext.Provider>

export default MyApp;
