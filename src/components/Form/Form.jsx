import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMakes } from '../../redux/cars/carsSlice';
import { fetchCarsThunk } from '../../redux/cars/operations';
import Select from 'react-select';
import Button from '../Buttons/Button';
import s from './Form.module.css';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    borderRadius: '14px',
    backgroundColor: '#F7F7FB',
    width: '224px',
    height: '48px',
    padding: '0 18px',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '##3470FFf',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#121417',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#121417',
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: 8,
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#3470FF' : 'transparent',
    color: state.isSelected ? '#fff' : 'rgb(18, 20, 23, 0.2)',
    '&:hover': {
      backgroundColor: '#3470FF',
      color: '#fff',
    },
  }),
};

const Form = ({ make, setMake }) => {
  const makes = useSelector(selectMakes);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchCarsThunk({ page: 1, make }));
  };

  const handleSelectChange = selectedOption => {
    setMake(selectedOption.value);
  };

  return (
    <div className={s.form_wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <Select
          options={makes.map(make => ({ value: make, label: make }))}
          onChange={handleSelectChange}
          placeholder="Enter the text"
          styles={customStyles}
          classNamePrefix="select"
          className={s.select}
        />
        <Button style={{ padding: '14px 44px' }}>Search</Button>
      </form>
    </div>
  );
};

export default Form;
