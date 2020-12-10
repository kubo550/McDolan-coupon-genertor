import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  LinkButton,
  ButtonsWrapper,
  OptionButton,
  ASH2,
  LinkButtonsWrapper,
} from "../../layout";

interface dateProps {
  date: String;
  setCouponDate: (date: string) => void;
}

const generateLastWeek = () =>
  Array(6)
    .fill(null)
    .map((_, i) => `0${9 - i}/12/2020`);

export const Date: FC<dateProps> = ({ date, setCouponDate }) => {
  const week = generateLastWeek();
  return (
    <Container>
      <ASH2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Step 2. Chose date for your coupon.
      </ASH2>
      <ButtonsWrapper initial={{ x: "100%" }} animate={{ x: 0 }}>
        {week.map(day => (
          <OptionButton
            key={day}
            active={date === day}
            onClick={() => setCouponDate(day)}
          >
            📅 {day}
          </OptionButton>
        ))}
      </ButtonsWrapper>
      <LinkButtonsWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <LinkButton as={Link} to='/step1'>
          🔙 Back
        </LinkButton>
        {date && (
          <LinkButton as={Link} to='/result'>
            🍡 Next
          </LinkButton>
        )}
      </LinkButtonsWrapper>
    </Container>
  );
};
