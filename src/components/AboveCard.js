import React from 'react';

const AboveCard = () => {
  return (
    <div className="aboveCard">
      <div className="aboveCardText">DataCatalog</div>
      <div className="search">
        <div>Фильтр</div>
        <input type="text" placeholder=" " className="form-input" />
        <div>Поиск</div>
      </div>
    </div>
  );
};

export default AboveCard;
