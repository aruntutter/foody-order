import Title from "./Title";
import Tour from "./Tour";

import {tours} from '../constants';
const Tours = () => {
  return (
    <section className="section-center" id="tours" >
      <Title title='our' subTitle='menu' />
      <div className="section-center featured-center">
        {tours.map((tour)=>{
          return (
            <Tour {...tour} key={tour.id} />
          )
        })}
      </div>
    </section>
  );
};

export default Tours;
