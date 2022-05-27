import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Cuadro from "./cuadro";
import Cuartos from "./cuartos";
import { FormattedMessage } from "react-intl";

function Home() {
  let [spaces, setSpaces] = useState([]);

  let urlcasa =
    "https://static.vecteezy.com/system/resources/previews/001/200/294/non_2x/house-png.png";

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setSpaces(res);
        console.log("Response", res);
      });
  }, []);

  function alternarCuartos(idstate) {
    if (document.getElementById(idstate).style.display === "") {
      document.getElementById(idstate).style.display = "none";
    } else {
      document.getElementById(idstate).style.display = "";
    }
  }

  return (
    <div>
      <h1>
        <FormattedMessage id="MySpaces" />
      </h1>
      {spaces.map((space) => {
        return (
          <div>
            <div
              onClick={() => {
                alternarCuartos("html" + space.id);
              }}
            >
              <Cuadro
                id={space.id}
                key={space.id}
                name={space.name}
                content={space.address}
                imgsrc={urlcasa}
              ></Cuadro>

            </div>
              <div id={"html" + space.id} style={{ display: "none" }}>
                <Cuartos id={space.id} key={space.id}></Cuartos>
              </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
