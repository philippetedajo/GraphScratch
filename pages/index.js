import Head from "next/head";
import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Nextwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <p className="mt-20 text-5xl text-center w-2/3">
          {t("home_intro_content")}
        </p>
      </div>
    </div>
  );
};

export default Home;

Home.Template = PageTemplate;
