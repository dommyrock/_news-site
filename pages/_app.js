import { Auth } from "@supabase/ui";
import Head from "next/head"
import { supabase } from "../utils/initSupabase";
import "./../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Space News</title>
    </Head>
    <body>
    <main className={"dark"}>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </Auth.UserContextProvider>
    </main>
    </body>

    </>
  );
}
