import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("privacy")}</h1>
      <h2 className="mt-5">{t("privacy_intro_title")}</h2>
      <p className="w-2/3 mt-5">{t("privacy_intro_content")}</p>
      <h2 className="text-3xl mt-5"> {t("privacy_property_title")} </h2>
      <p className="w-2/3 mt-5">{t("privacy_property_content")}</p>{" "}
      <h2 className="text-3xl mt-5"> {t("privacy_agreement_title")} </h2>
      <p className="w-2/3 mt-5">{t("privacy_agreement_content")}</p>
    </div>
  );
};

export default Privacy;

Privacy.Template = PageTemplate;
