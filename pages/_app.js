import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import { trackPageView } from "../helpers/ga.js";
//import GalleryContext from "../components/GalleryContext";

class MyApp extends App {
  state = {
    galleryLoaded: false,
    galleryItems: null,
    itemDetails: null,
    itemShow: false
  };
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    //console.log("_app.js");
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

// <GalleryContext.Provider value={{  galleryLoaded: this.state.galleryLoaded }}  >
// </GalleryContext.Provider>

export default MyApp;
