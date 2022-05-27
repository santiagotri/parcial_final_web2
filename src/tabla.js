import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Elemento from "./elemento";
import { FormattedMessage } from "react-intl";

function Tabla(props) {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col-1">#</th>
            <th scope="col-2">
              <FormattedMessage id="ID" />
            </th>
            <th scope="col-2">
              <FormattedMessage id="Device" />
            </th>
            <th scope="col-4">
              <FormattedMessage id="Value" />
            </th>
          </tr>
        </thead>
        <tbody>
          
         
          
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
