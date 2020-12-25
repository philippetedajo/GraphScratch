import Router from "next/router";
import NProgress from "nprogress";
import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const Template = Component.Template || EmptyTemplate;

  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

const EmptyTemplate = ({ children }) => <>{children}</>;

export default MyApp;
