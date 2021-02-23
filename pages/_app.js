import { Progress } from "../components";
import "../styles/global.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function App({ Component, pageProps }) {
  const Template = Component.Template || EmptyTemplate;
  Progress();

  const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Template>
        <Component {...pageProps} />
      </Template>
    </ApolloProvider>
  );
}

const EmptyTemplate = ({ children }) => <>{children}</>;

export default App;
