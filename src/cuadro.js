import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Tabla from "./tabla";

class Cuadro extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src={this.props.imgsrc}
                alt="Imagen casa"
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">{this.props.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cuadro;
