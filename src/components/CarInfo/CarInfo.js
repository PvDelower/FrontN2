import React from "react";

const CarInfo = ({ car }) => {

  return (
      <section className="auto">
        <div className="AVGprice">
          <div>Цена</div>
          <p align="center">
            {car.price_avg ? `${car.price_avg.toFixed(2)} руб.` : 'Выберите авто'}
          </p>
        </div>

        <div className="AVGkm">
          <div>Пробег</div>
          <p align="center">
            {car.mileage_avg ? `${car.mileage_avg.toFixed(2)} км.` : 'Выберите авто'}
          </p>
        </div>

        <div className="AVGyear">
          <div>Год</div>
          <p align="center">
            {car.production_year ? `${car.production_year} год` : 'Выберите авто'}
          </p>
        </div>

        <div className="Nedostatki">
          <p>Нет информации</p>
        </div>

        <div id="anycomment-app"/>
      </section>
  )
}

export default CarInfo