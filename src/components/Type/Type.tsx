import { motion } from "framer-motion";
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
      type: "tween",
      stiffness: 100,
      duration: 0.6,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const possibleTypes: couponType[] = ["hamburger", "frytki", "lody", "cheeseburger"];
const getIcon = (typ: couponType) => {
  switch (typ) {
    case "hamburger":
      return "🍔";
    case "frytki":
      return "🍟";
    case "cheeseburger":
      return "🍔";
    case "lody":
      return "🍨";
    default:
      return "🍔";
  }
};

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
            {getIcon(typ)}
            {typ}
          </OptionButton>
        ))}
      </ButtonsWrapper>

      <LinkButtonsWrapper>
        <LinkButton as={Link} to='/'>
          🔙 Back
        </LinkButton>
        {type && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <LinkButton as={Link} to='step2'>
              🥫 Next
            </LinkButton>
          </motion.div>
        )}
      </LinkButtonsWrapper>
    </Container>
  );
};
