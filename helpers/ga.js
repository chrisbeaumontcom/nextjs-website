export function trackPageView(url) {
  try {
    window.gtag("config", "UA-6250479-1", {
      page_location: url
    });
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}
export const GATrackingID = "UA-6250479-1";
