import "@/styles/globals.css";
import { AppHeader } from "@/components/header";
export default function App({ Component, pageProps }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
    </>
  );
}
