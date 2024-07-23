import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "ka",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ka: {
        translation: {
          name: "ჟუჟუნა",
          wine: "ღვინო არც ისე წყნარი და არც ბოლომდე ცქრიალაა",
          description:
            " მას ადრეულ რთველზე მიღებული რქაწითელითა და მწვანეთი ვამზადებთ, ამიტომაც სახასიათო სიმჟავე აქვს. მეორადი დუღილისგან კი ბუნებრივ მსუბუქ გაზს იძენს.",
        },
      },
      en: {
        translation: {
          name: "jujuna",
          wine: "The wine is neither still nor fully sparkling",
          description:
            "That's why we prepare it with Rkatsiteli and green grapes obtained in the early harvest It has a characteristic acidity. and natural light gas from secondary fermentationacquires",
        },
      },
    },
  });

export default i18n;
