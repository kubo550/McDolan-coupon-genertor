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
import { generateLastWeek } from "../../utils";
import { contentVariants } from "../Type/Type";

interface dateProps {
  date: String;
  setCouponDate: (date: string) => void;
}

export const Date: FC<dateProps> = ({ date, setCouponDate }) => {
  const week = generateLastWeek();
  return (
    <Container variants={contentVariants} initial='hidden' animate='visible' exit='exit'>
      <ASH2>Step 2. Chose date for your coupon.</ASH2>
      <ButtonsWrapper>
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
      <LinkButtonsWrapper>
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
