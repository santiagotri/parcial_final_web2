import React from "react";
import ReactDOM from "react-dom";

import Home from "./home";
import 'bootstrap/dist/css/bootstrap.css';
import { IntlProvider } from "react-intl";

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

const getLocale = () => {
  return navigator.language || navigator.userLanguage;
};

getLocale();

ReactDOM.render(
<IntlProvider
    locale={getLocale()}
    messages={getLocale() === "es" ? localeEsMessages : localeEnMessages}
  >
    <Home />
  </IntlProvider>
, document.getElementById("root"));