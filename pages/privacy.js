import PageTemplate from "../templates/page.template";
import useTranslation from "../intl/useTranslation";

const Privacy = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-6xl">{t("privacy")}</h1>
      <p>
        quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
        aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
        voluptates repudiandae sint et molestiae non recusandae.
      </p>
    </div>
  );
};

export default Privacy;

Privacy.Template = PageTemplate;
