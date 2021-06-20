import React from "react";

const CarInfo = ({ car }) => {

  // const s = document.createElement('script');
  // s.type = 'text/javascript';
  // s.async = true;
  // s.innerHTML = "    AnyComment = window.AnyComment || [];\n" +
  //     "    AnyComment.Comments = [];\n" +
  //     "    AnyComment.Comments.push({\n" +
  //     "        \"root\": \"anycomment-app\",\n" +
  //     "        \"app_id\": 2556,\n" +
  //     "        \"language\": \"ru\"\n" +
  //     "    })\n" +
  //     "    var s = document.createElement(\"script\");\n" +
  //     "    s.type = \"text/javascript\";\n" +
  //     "    s.async = true;\n" +
  //     "    s.src = \"http://widget.anycomment.io/comment/embed.js\";\n" +
  //     "    var sa = document.getElementsByTagName(\"script\")[0];\n" +
  //     "    sa.parentNode.insertBefore(s, s.nextSibling);";
  // document.body.appendChild(s);

  return (
      <section className="auto">

        <div className="AVGprice">
          <p align="center">
            {car.price_avg ? `${car.price_avg} руб.` : 'Выберите авто'}
          </p>
        </div>

        <div className="AVGkm">
          <p align="center">
            {car.mileage_avg ? `${car.mileage_avg} км.` : 'Выберите авто'}
          </p>
        </div>

        <div className="AVGyear">
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