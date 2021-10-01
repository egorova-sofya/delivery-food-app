import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Choose your plan</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaAppleAlt />
                </PricingCardIcon>
                <PricingCardPlan>1 month</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>

                <PricingCardFeatures>
                  <PricingCardFeature>
                    3 menus to choose from
                  </PricingCardFeature>
                  <PricingCardFeature>delivery every 3 days</PricingCardFeature>
                  <PricingCardFeature>
                    Support from 10.00 to 18.00 pm
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaAppleAlt />
                  <FaAppleAlt />
                </PricingCardIcon>
                <PricingCardPlan>3 months</PricingCardPlan>
                <PricingCardCost>$759.99</PricingCardCost>

                <PricingCardFeatures>
                  <PricingCardFeature>
                    6 menus to choose from
                  </PricingCardFeature>
                  <PricingCardFeature>delivery every 2 days</PricingCardFeature>
                  <PricingCardFeature>
                    Support from 10.00 to 18.00 pm
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaAppleAlt />
                  <FaAppleAlt />
                  <FaAppleAlt />
                </PricingCardIcon>
                <PricingCardPlan>6 months</PricingCardPlan>
                <PricingCardCost>$1699.99</PricingCardCost>

                <PricingCardFeatures>
                  <PricingCardFeature>
                    10 menus to choose from
                  </PricingCardFeature>
                  <PricingCardFeature>delivery every day</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
