import React from "react";
import { Link } from "react-router-dom";
import { Container, ContainerBody, ImgDiv } from "./styles";
import ButtonBuy from "../ButtonBuy";

function ProductResult({ name, picture, quantity, id, price }) {
  return (
    <ContainerBody>
      <Container>
        <ImgDiv>
          <Link to={`/products/${id}`}>
            {picture ? (
              <img
                id="img"
                src={"http://187.84.80.162:8082/imagens/" + picture}
                alt="produto"
                className="image"
              />
            ) : (
              <img
                id="img"
                src={process.env.PUBLIC_URL + "/images/no-image.png"}
                alt="produto"
                className="image"
              />
            )}
          </Link>
        </ImgDiv>
        <div>
          <p>{name}</p>
        </div>

        <div className="buy">
          <p>{price}</p>
          <ButtonBuy id={id} />
        </div>
      </Container>
    </ContainerBody>
  );
}

export default ProductResult;