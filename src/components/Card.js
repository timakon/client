import React from 'react';

const Card = ({links}) => {

  return (
    <div className="cardCompanyData">
      <div className="companyName">Фича №1</div>
      <div className="companyDescription">Aliquip quis Lorem enim sit nostrud minim eu aliquip.</div>
      <section>
        {links.map(link=>{
          return(
            <div className="companyFeature">
              <input type="checkbox" />
              <span>{link}</span>
            </div>
          )
        })}
      </section>
    </div>
  );
};

export default Card;
