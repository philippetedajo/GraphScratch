import Head from "next/head";
import PageTemplate from "../templates/page.template";

const Home = () => {
  return (
    <div>
      <Head>
        <title>NextWind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <p className="mt-20 text-5xl text-center w-2/3">
          Nextwind est un boilerplate Next Js complet concue avec Tailwind css,
          permettant de demarrer rapidement un projet Next js, il dispose pour
          le moment d'un module de traduction, d'un systeme d'authentification
          et de quelques pages prefabriquer avec soin.
        </p>
      </div>
    </div>
  );
};

export default Home;

Home.Template = PageTemplate;
