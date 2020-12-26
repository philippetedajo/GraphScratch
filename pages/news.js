import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";

const News = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("news")} </h1>
      <p className=" w-1/2 mt-5">{t("news_intro_content")}</p>
    </div>
  );
};

export default News;

News.Template = PageTemplate;
