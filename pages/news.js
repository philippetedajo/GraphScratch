import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";
import { H1 } from "../components";

const News = () => {
  const { t } = useTranslation();
  return (
    <div>
      <H1 title={t("news")} />
      <p className=" w-1/2 mt-5">{t("news_intro_content")}</p>
    </div>
  );
};

export default News;

News.Template = PageTemplate;
