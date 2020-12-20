import React, { FC } from "react";
import { Link } from "react-router-dom";
import { couponType } from "../../App";
import {
  Container,
  LinkButton,
  ButtonsWrapper,
  OptionButton,
  ASH2,
  LinkButtonsWrapper,
} from "../../layout";

interface typeProps {
  type: couponType | "";
  setCouponType: (type: couponType) => void;
}

export const contentVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    x: "-100%",
    transition: { ease: "easeInOut" },
  },
};

const possibleTypes: couponType[] = ["hamburger", "frytki", "lody", "cheeseburger"];

export const Type: FC<typeProps> = ({ type, setCouponType }) => {
  return (
    <Container variants={contentVariants} initial='hidden' animate='visible' exit='exit'>
      <ASH2>Step 1. Chose coupon you want.</ASH2>

      <ButtonsWrapper>
        {possibleTypes.map(typ => (
          <OptionButton
            key={typ}
            active={type === typ}
            onClick={() => setCouponType(typ)}
          >
            {/* Wiadomo co */}
            {typ === "hamburger" && "🍔"}
            {typ === "frytki" && "🍟"}
            {typ === "cheeseburger" && "🍔"}
            {typ === "lody" && "🍨"}
            {typ}
          </OptionButton>
        ))}
      </ButtonsWrapper>

      <LinkButtonsWrapper>
        <LinkButton as={Link} to='/'>
          🔙 Back
        </LinkButton>
        {type && (
          <LinkButton as={Link} to='step2'>
            🥫 Next
          </LinkButton>
        )}
      </LinkButtonsWrapper>
    </Container>
  );
};
