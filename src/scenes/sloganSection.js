import React from "react";
import "../styles/global.css";
import galletaImage from "../images/vista-superior-galletas-chispas-chocolate-tela.jpg";

class SloganSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: galletaImage,
      text: "Orgullosos de crear nuestro producto con los mejores ingredientes colombianos, selectamente dulces al gusto.",
    };
  }

  render() {
    return (
      <div className="neumorphic-section-container">
        <div className="neumorphic-image-container">
          <img
            src={this.state.image}
            alt="Imagen de galleta sobre el plato"
            className="neumophic-image shadow"
          />
        </div>
        <div className="neumorphic-text-container">
          <h1 className="slogan-title">
            Con orgullo <span className="flagColor-yellow">COLO</span>
            <span className="flagColor-blue">MBI</span>
            <span className="flagColor-red">ANO</span>
          </h1>
          <p className="slogan-home">{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default SloganSection;
