import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import arrow from "../../assets/icon-arrow.svg";
import Navbar from "../Navbar";
//hooks
import useDinamicCard from "../../hooks/useDinamicCard";
import useWidthSize from "../../hooks/useWidthSize";
//images
import imgleft from "../../assets/image-about-dark.jpg";
import imgrigth from "../../assets/image-about-light.jpg";

const DinamicDesktop = () => {
  const { dinamicIndex, dinamicProducts, previousProduct, nextProduct } =
    useDinamicCard();
  const { width } = useWidthSize();

  return (
    <>
      {width > 500 && (
        <>
          <div className="col-1 ">
            <div className="img-carrousel desktop">
              <Navbar />
              <img
                className="img-main"
                src={dinamicProducts[dinamicIndex].img}
                alt="imagem promocional"
              />
              <div className="btn">
                <button onClick={() => previousProduct()}>
                  <IoIosArrowBack />{" "}
                </button>
                <button onClick={() => nextProduct()}>
                  {" "}
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
          <div className="col-2 desktop">
            <div className="content">
              <h1>{dinamicProducts[dinamicIndex].title}</h1>
              <p>{dinamicProducts[dinamicIndex].description}</p>

              <div className="shop-arrow">
                <a className="shop" href="#home">
                  shop now
                  <img className="arrow" src={arrow} alt="arrow shop" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 desktop">
            <img src={imgleft} alt="" />
          </div>
          <div className="col-4 desktop">
            <div className="content desktop">
              <h3>About our furniture</h3>
              <p>
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </div>
          </div>
          <div className="col-5 desktop">
            <img src={imgrigth} alt="iamgem de um banco branco" />
          </div>
        </>
      )}
    </>
  );
};

export default DinamicDesktop;
