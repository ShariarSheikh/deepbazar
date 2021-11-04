import "tailwindcss/tailwind.css";
import "../styles/globals.css";
//redux application store
import { Provider } from "react-redux";
import { store } from "../redux/store";

import Header from "../components/Header/Index";
import Footer from "../components/Footer/Index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </Provider>
  );
}

export default MyApp;
