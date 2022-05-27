import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Elemento extends Component {
  render() {
    return (
        <tr>
          <th scope="row">{this.props.id}</th>
          <td>{this.props.idVal}</td>
          <td>{this.props.device}</td>
          <td>{this.props.value}</td>
        </tr>
    );
  }
}

export default Elemento;
