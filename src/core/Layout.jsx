import React, { Fragment } from "react";
import "materialize-css";
import { Slide, Slider, Caption } from "react-materialize";

const Layout = () => {
  return (
    <Fragment>
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: true,
          interval: 6000,
        }}
      >
        <Slide image={<img alt="" src={require("./img/books1.jpeg")} />}>
          <Caption placement="center">
            <h3>La Tienda de Libros virtual más grande del país!</h3>
            <h5 className="light grey-text text-lighten-4">
              Compra tus libros aquí.
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={require("./img/usados.jpeg")} />}>
          >
          <Caption placement="left">
            <h3>No importa la condición</h3>
            <h5 className="light grey-text text-lighten-4">Nuevo o usado.</h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={require("./img/delivery.jpeg")} />}>
          <Caption placement="right">
            <h3>Te lo llevamos a la casa</h3>
            <h5 className="light grey-text text-lighten-4">
              No tienes de salir de tu hogar.
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={require("./img/biblio.jpeg")} />}>
          <Caption placement="center">
            <h3>Todos los generos en libros!</h3>
            <h5 className="light grey-text text-lighten-4">
              Desde non-fiction a literatura clásica.
            </h5>
          </Caption>
        </Slide>
      </Slider>
    </Fragment>
  );
};

export default Layout;
