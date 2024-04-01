import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CarsCatalog from '../../components/CarsCatalog/CarsCatalog';
import { fetchCarsThunk } from '../../redux/cars/operations';

const Catalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk({ page: 1, make: null }));
  }, [dispatch]);

  return <CarsCatalog type="catalog" />;
};

export default Catalog;
