import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("about")}</h1>
      <p className="w-1/2 mt-5">{t("about_intro_content")}</p>
    </div>
  );
};

export default About;

About.Template = PageTemplate;
