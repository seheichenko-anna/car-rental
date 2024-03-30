import React from 'react';
import s from './CarsCatalogitem.module.css';
import sprite from '../../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from '../../../redux/favorites/favoritesSlice';

const CarsCatalogItem = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = car;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(favorite => favorite.id === id);
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id }));
    } else {
      dispatch(addToFavorites({ car }));
    }
  };

  return (
    <div className={s.car_card}>
      <div className={s.img_wrapper}>
        <img src={img} alt={`${make} ${model}`} className={s.img} />
        <button className={s.btn_favorite} onClick={handleToggleFavorite}>
          <svg className={isFavorite ? s.icon_heart_fill : s.icon_heart}>
            <use xlinkHref={`${sprite}#heart`} />
          </svg>
        </button>
      </div>
      <div className={s.title_wrapper}>
        <h2 className={s.title}>
          <span>{make} </span>
          <span className={s.model}>{model}, </span>
          <span>{year}</span>
        </h2>
        <p className={s.price}>{rentalPrice}</p>
      </div>
      <ul className={s.list}>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{model}</li>
        <li>{mileage}</li>
        <li>{accessories[0]}</li>
      </ul>
      <button className={s.btn_learn_more}>Learn more</button>
    </div>
  );
};

export default CarsCatalogItem;
