import "../styles/globals.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import { PortfolioProvider } from "../contexts/portfolio.context";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    import("jquery/dist/jquery.js");
    import("@popperjs/core/dist/umd/popper.js");
    import("bootstrap/dist/js/bootstrap.bundle");
  }

  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}

export default MyApp;
