import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/slice';
import { nanoid } from 'nanoid';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  let filterId = nanoid();

  const changerFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <div className={s.filter}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id={filterId}
        value={filter}
        onChange={changerFilter}
      />
    </div>
  );
}

export default Filter;
