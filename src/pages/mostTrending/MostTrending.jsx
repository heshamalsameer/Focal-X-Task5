import Card from "../../components/cards/Card";
import Header from "../../components/headerSection/Header";
import card1 from "../../assets/most trending/card1.png";
import card2 from "../../assets/most trending/card2.png";
import card3 from "../../assets/most trending/card3.png";
import card4 from "../../assets/most trending/card4.png";
import card5 from "../../assets/most trending/card5.png";
import card6 from "../../assets/most trending/card6.png";

const MostTrending = () => {
  return (
    <div>
      <Header
        title="Most Trending"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="flex flex-wrap gap-[25px] mt-[56px] lg:px-[70px]">
        <Card image={card1} />
        <Card image={card2} />
        <Card image={card3} />
        <Card image={card4} />
        <Card image={card5} />
        <Card image={card6} />
      </div>
    </div>
  );
};

export default MostTrending;
