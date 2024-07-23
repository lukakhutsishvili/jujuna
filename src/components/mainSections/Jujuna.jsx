import { useContext, useEffect } from "react";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { context } from "../../App";

function Jujuna() {
  const { t, i18n } = useTranslation();
  const { country } = useContext(context);

  useEffect(() => {
    if (country.toLowerCase() !== "georgia" && country) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ka");
    }
  }, [country, i18n]);

  return (
    <div className="xl:bg-[url('/images/desktopjujuna.png')] bg-[url('/images/mobilejujuna.png')] bg-center xl:h-[720px] xl:pr-[434px]  bg-cover bg-no-repeat py-[30px] h-[459px] pl-6 pr-9 text-white">
      <h1 className="xl:text-[64px] font-tommaso text-[48px]">{t("name")}</h1>
      <p className="xl:mr-[500px] xl:mt-[70px] font-tommaso text-[36px] mt-6 opacity-[0.7]">
        {t("wine")}
      </p>
      <p className="xl:text-[24px] font-arialgeo text-[20px] mt-6">
        {t("description")}
      </p>
    </div>
  );
}

export default Jujuna;
