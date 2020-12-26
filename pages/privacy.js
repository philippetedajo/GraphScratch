import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";
import { H1 } from "../components";

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div>
      <H1 title={t("privacy")} />
      <h2 className=" text-3xl mt-5 ">{t("privacy_intro_title")}</h2>
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
