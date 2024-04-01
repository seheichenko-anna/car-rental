import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectCurrentPage } from '../../redux/cars/carsSlice';
import { fetchMoreCarsThunk } from '../../redux/cars/operations';
import { selectFavorites } from '../../redux/favorites/favoritesSlice';
import CarsCatalogItem from './CarsCatalogItem/CarsCatalogItem';
import Form from '../Form/Form';

import s from './CarsCatalog.module.css';

const CarsCatalog = ({ type }) => {
  const [make, setMake] = useState('');

  const cars = useSelector(selectCars) || [];
  const favorites = useSelector(selectFavorites);
  const currentPage = useSelector(selectCurrentPage);
  const maxPage = 32 / 12;

  const dispatch = useDispatch();

  const getMoreCars = () => {
    dispatch(fetchMoreCarsThunk({ page: currentPage + 1, make }));
  };

  const mapCars = type === 'favorites' ? favorites : cars;

  return (
    <>
      {type === 'catalog' && <Form setMake={setMake} make={make} />}
      <section className={s.catalog_section}>
        <div className={s.cars_container}>
          {mapCars.map(car => (
            <CarsCatalogItem car={car} key={car.id} />
          ))}
        </div>
        {type === 'catalog' && currentPage < maxPage && (
          <button type="button" onClick={getMoreCars} className={s.load_more}>
            Load more
          </button>
        )}
      </section>
    </>
  );
};

export default CarsCatalog;
