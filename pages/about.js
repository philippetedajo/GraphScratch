import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";
import { H1 } from "../components";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <H1 title={t("about")} />
      <p className="w-1/2 mt-5">{t("about_intro_content")}</p>
    </div>
  );
};

export default About;

About.Template = PageTemplate;
