import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './CarsCatalog.module.css';
import {
  selectCars,
  selectCurrentPage,
  selectIsLoading,
  selectIsLoadMoreCars,
} from '../../redux/cars/carsSlice';
import CarsCatalogItem from './CarsCatalogItem/CarsCatalogItem';
import { fetchMoreCarsThunk } from '../../redux/cars/operations';
import { selectFavorites } from '../../redux/favorites/favoritesSlice';

const CarsCatalog = ({ type }) => {
  const cars = useSelector(selectCars) || [];
  const favorites = useSelector(selectFavorites);
  const isLoadMoreCars = useSelector(selectIsLoadMoreCars);
  const currentPage = useSelector(selectCurrentPage);
  console.log(currentPage);
  const dispatch = useDispatch();

  const getMoreCars = () => {
    dispatch(fetchMoreCarsThunk(currentPage + 1));
  };

  const mapCars = type === 'favorites' ? favorites : cars;

  return (
    <section className={s.catalog_section}>
      <div className={s.cars_container}>
        {mapCars.map(car => (
          <CarsCatalogItem car={car} key={car.id} />
        ))}
      </div>
      {type === 'catalog' && isLoadMoreCars && (
        <button onClick={getMoreCars}>Load more</button>
      )}
    </section>
  );
};

export default CarsCatalog;
