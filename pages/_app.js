import "../styles/globals.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    import("jquery/dist/jquery.js");
    import("@popperjs/core/dist/umd/popper.js");
    import("bootstrap/dist/js/bootstrap.bundle");
  }

  return <Component {...pageProps} />;
}

export default MyApp;
