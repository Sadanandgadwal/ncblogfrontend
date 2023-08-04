import "@/styles/globals.css";
import axios from "axios";

// axios.defaults.baseURL = "https://nextb-production.up.railway.app";
axios.defaults.baseURL = "http://localhost:4000";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
