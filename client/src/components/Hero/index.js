import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic_cities.svg";
import IconTravellers from "assets/images/icons/ic_travellers.svg";
import IconTreasure from "assets/images/icons/ic_treasure.svg";
import Button from "components/Button";

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  console.log(props.data);
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto " style={{ width: 445 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget busy work,
            <br />
            Start dream <span className="text-primary">Vocation</span>
          </h1>
          <p
            className="mb-5 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "27px" }}
          >
            We provide what you need to enjoy your vocation with family, Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5 "
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row mt-5">
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTravellers}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasure
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="room with couches"
              className="img-fluid  position-absolute"
              style={{ margi: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHeroFrame}
              alt="room with couchesfframe"
              className="img-fluid  position-absolute"
              style={{ margin: "65px 0px 0px 30px", zIndex: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
