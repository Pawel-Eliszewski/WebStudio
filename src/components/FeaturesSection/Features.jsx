import { FeatureCard } from "../FeaturesSection/FeatureCard/FeatureCard";
import { featuresList } from "../../data/featuresList";
import "./Features.css";

export const Features = () => {
  return (
    <section className="features section">
      <div className="container">
        <div className="features__wrapper">
          <ul className="features__list">
            {featuresList.map((feature) => {
              return (
                <li key={feature.id} className="features__item">
                  <FeatureCard feature={feature} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
