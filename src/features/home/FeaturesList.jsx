import FeaturesItem from "./FeaturesItem";
import { FEATURES_LIST_INFO } from "../../utils/constants";

function FeaturesList() {
  return (
    <section className="responsive-container mt-24 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
      {FEATURES_LIST_INFO.map((item, index) => {
        return <FeaturesItem key={item.key} item={item} index={index} />;
      })}
    </section>
  );
}

export default FeaturesList;
