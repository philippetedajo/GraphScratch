import { LangProvider } from "../intl/LangProvider";
import { Progress } from "../components";
import "../styles/global.css";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const Template = Component.Template || EmptyTemplate;
  Progress();

  return (
    <LangProvider>
      <Template>
        <Component {...pageProps} />
      </Template>
    </LangProvider>
  );
}

const EmptyTemplate = ({ children }) => <>{children}</>;

export default MyApp;
