import styled from "styled-components";

export const Container = styled.div``;

export const ContainerProduct = styled.div`
  width: 65%;
  margin: 20px auto;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  background-color: white;
  border-radius: 8px;
  background-color: #22314a;
  overflow: none;
  box-sizing: border-box;

  .img-container {
    background-color: white;
    margin: auto auto;
    width: 490px;
    overflow: hidden;
    box-sizing: border-box;
    height: 490px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
    .image-gallery-thumbnail-image img {
      width: 100% !important;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 900px;
  }

  @media (max-width: 420px) {
    height: 620px;
    .img-container {
      margin: auto auto;
      width: 190px;
      height: 190px;
    }
    .buy-button button {
      width: 80% !important;
      p {
        font-size: 16px;
      }
    }
  }
`;

export const DetailsProducts = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: white;
    text-align: center;
    font-size: 22px;
  }

  div {
    .price {
      color: green;
      text-align: center;

      font-size: 24px;
      font-weight: bold;
      p {
        font-weight: normal;
        color: #ff0050;
        font-size: 16px;
      }
    }
  }
`;

export const RelatedProducts = styled.div`
  h1 {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
  }
  .relatedProducts {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 20px auto;
    div {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    div {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 16px;
    }
    .relatedProducts button {
      width: 80% !important;
      p {
        font-size: 16px;
      }
    }
  }
`;
