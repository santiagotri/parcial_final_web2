import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Elemento from "./elemento";
import { FormattedMessage } from "react-intl";
import Tabla from "./tabla";
import CuadroCuarto from "./cuadro";

function Cuartos(props) {
  let urlcuarto =
    "https://us.123rf.com/450wm/sommersby/sommersby1204/sommersby120400076/13002496-3d-hacer-cuarto-vac%C3%ADo.jpg";
  let [Cuartos, setCuartos] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setCuartos(res);
        console.log("Response", res);
      });
  }, []);
  return (
    <div>
      <h1>
        <FormattedMessage id="MyRooms" />
      </h1>
      <div className="">
        <div className="col"></div>
        {Cuartos.map((cuarto) => {
          if (cuarto.homeId == props.id) {
            return (
              <CuadroCuarto
                id={cuarto.homeId + cuarto.name}
                key={cuarto.homeId + cuarto.name}
                name={cuarto.name}
                content={cuarto.type}
                imgsrc={urlcuarto}
              ></CuadroCuarto>
            );
          }
        })}
        <div className="col">
            <Tabla ></Tabla>
        </div>
      </div>
    </div>
  );
}

export default Cuartos;
