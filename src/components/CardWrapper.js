import React from 'react';
import Card from './Card';

const CardWrapper = () => {
  const links = ['Aliquip quis Lorem enim 1', 'Aliquip quis Lorem enim 2', 'Aliquip quis Lorem enim 3', 'Aliquip quis Lorem enim 4', ];//TODO получать их с сервера через пропс
  return (
    <div className="cardWrapper">
      <Card links={links}/>
      <Card links={links}/>
      <Card links={links}/>
      <Card links={links}/>
      <Card links={links}/>
      <Card links={links}/>
      <Card links={links}/>

    </div>
  );
};

export default CardWrapper;
