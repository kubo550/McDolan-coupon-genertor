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

const possibleTypes: couponType[] = ["hamburger", "frytki", "lody", "cheeseburger"];

export const Type: FC<typeProps> = ({ type, setCouponType }) => {
  return (
    <Container>
      <ASH2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Step 1. Chose coupon you want.
      </ASH2>

      <ButtonsWrapper initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        {possibleTypes.map(typ => (
          <OptionButton
            key={typ}
            active={type === typ}
            onClick={() => setCouponType(typ)}
          >
            {typ === "hamburger" && "🍔"}
            {typ === "frytki" && "🍟"}
            {typ === "cheeseburger" && "🍔"}
            {typ === "lody" && "🍨"}
            {typ}
          </OptionButton>
        ))}
      </ButtonsWrapper>

      <LinkButtonsWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
