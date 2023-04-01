import React from "react";
import "../Lesson6/Card.scss";

const Card = (props) => {
  const { id, flags, country, capital, population } = props;

  console.log(props);
  return (
    <>
      <div className="card" id={id}>
        <img src={flags} alt={country} className="card__images" />

        <div className="card__text">
          <p className="card__text--data">{capital}</p>
          <h3 className="card__text--h3">{country}</h3>
          <p className="card__text--data">{population}</p>
          <p className="card__text--p"></p>

          {/* <Link to={`/news/${id}`} className="card__text--btn">
            <span>Read More</span>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Card;
