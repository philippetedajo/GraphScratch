import AuthTemplate from "../templates/auth.template";
import useTranslation from "../intl/useTranslation";

const Register = () => {
  const { t } = useTranslation();
  return (
    <form className="w-96">
      <h1 className="mb-10 mt-16">{t("register_title")}</h1>
      <h2>{t("register_subtitle")}</h2>
      <p className="mt-2 mb-5 text-fourth ">{t("register_message")}</p>
      <div className="flex flex-col mb-3">
        <label>{t("user")}</label>
        <input
          className="btn-form my-2"
          type="text"
          placeholder={t("username")}
        />
      </div>

      <div className="flex flex-col mb-3">
        <label>{t("password")}</label>
        <input
          className="btn-form my-2"
          type="password"
          placeholder={t("password")}
        />
      </div>
      <div className="flex flex-col">
        <label>{t("confirm_password")}</label>
        <input
          className="btn-form my-2"
          type="password"
          placeholder={t("confirm_password")}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-5 text-xs">
          <input className="mr-2" type="checkbox" />
          <span className="text-fourth"> {t("agree")}</span>
          <span className="text-third ml-1">{t("privacy_link")} </span>
        </div>
      </div>
      <div className="btn border-2 border-third bg-third text-secondary my-5">
        {t("register_in")}
      </div>
      <p className="my-5 text-center">
        {t("already_account")}
        <span className="text-third"> {t("already_account_login")}</span>
      </p>
    </form>
  );
};

export default Register;

Register.Template = AuthTemplate;
