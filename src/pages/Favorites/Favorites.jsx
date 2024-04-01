import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import CarsCatalog from '../../components/CarsCatalog/CarsCatalog';
import { selectFavorites } from '../../redux/favorites/favoritesSlice';
import s from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <CarsCatalog type="favorites" />
      ) : (
        <div className={s.empty_favorites}>
          <p>Favorites is empty</p>
          <Link to="/catalog">
            <Button>Go to catalog</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Favorites;
