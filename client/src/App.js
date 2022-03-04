import Router from "./Router";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Router />
      </HelmetProvider>
    </div>
  );
}

export default App;
