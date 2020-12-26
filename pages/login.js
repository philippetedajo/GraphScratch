import AuthTemplate from "../templates/auth.template";
import useTranslation from "../intl/useTranslation";

const Login = () => {
  const { t } = useTranslation();

  return (
    <form className="w-96">
      <h1 className="mb-10 mt-16">{t("login_title")}</h1>
      <h2>{t("login_subtitle")}</h2>
      <p className="mt-2 mb-5 text-fourth ">{t("login_message")}</p>
      <div className="flex flex-col mb-3">
        <label>{t("user")}</label>
        <input
          className="btn-form my-2"
          type="text"
          placeholder={t("username")}
        />
      </div>
      <div className="flex flex-col">
        <label>{t("password")}</label>
        <input
          className="btn-form my-2"
          type="password"
          placeholder={t("password")}
        />
      </div>
      <div className="flex items-center mb-5 text-xs">
        <input className="mr-2" type="checkbox" />
        <span className="text-fourth"> {t("remember")}</span>
      </div>
      <div className="btn border-2 border-third bg-third text-secondary my-8">
        {t("login_in")}
      </div>
      <p className="my-5 text-center">
        {t("No_account")}
        <span className="text-third"> {t("no_account_join")}</span>
      </p>
    </form>
  );
};

export default Login;

Login.Template = AuthTemplate;
