import CardComponent from 'components/common/Card';

const Home = ({ dishes, promotions, leaders }) => {
  const [dishForRender] = dishes.filter((dish) => dish.featured);
  const [promoForRender] = promotions.filter((promo) => promo.featured);
  const [leaderForRender] = leaders.filter((leader) => leader.featured);

  return (
    <div className="container pt-1 pb-1">
      <div className="row">
        <div className="col-12 col-lg-4 d-flex align-items-stretch">
          {dishForRender && (
            <CardComponent
              size="100%"
              img={dishForRender.image}
              name={dishForRender.name}
              description={dishForRender.description}
            />
          )}
        </div>
        <div className="col-12 col-lg-4 d-flex align-items-stretch">
          {promoForRender && (
            <CardComponent
              size="100%"
              img={promoForRender.image}
              name={promoForRender.name}
              description={promoForRender.description}
            />
          )}
        </div>
        <div className="col-12 col-lg-4 d-flex align-items-stretch">
          {leaderForRender && (
            <CardComponent
              size="100%"
              img={leaderForRender.image}
              name={leaderForRender.name}
              description={leaderForRender.description}
              designation={leaderForRender.designation}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
