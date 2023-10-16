
import { FoodItemCard } from "./FoodItemCard";

// cake image imports
import flamingoCake from "../../assets/images/cakes/flamingo-cake.png";
import { TitleUnderline } from "../Reusables/TitleUnderline";

export const FoodDisplay = () => {
  return (
    <section className="mb5" id="food-display">
      <h2 className=" mb4 section-title section-title--light">
        Cakes and Meals
      </h2>
      <TitleUnderline color="#fff" />
      <FoodItemCard
        itemImg={flamingoCake}
        itemAlt=""
        dishName="Flamingo Cake"
        itemDescription
      />
    </section>
  );
};

/*
 itemImg,
  itemAlt,
  dishName,
  itemDescription,
*/
