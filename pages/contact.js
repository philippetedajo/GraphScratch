import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("contact")} </h1>
      <p className="w-1/2 mt-5">{t("contact_intro_content")}</p>
    </div>
  );
};

export default Contact;

Contact.Template = PageTemplate;
