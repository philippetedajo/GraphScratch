import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";
import { H1 } from "../components";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <H1 title={t("contact")} />
      <p className="w-1/2 mt-5">{t("contact_intro_content")}</p>
    </div>
  );
};

export default Contact;

Contact.Template = PageTemplate;
