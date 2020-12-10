import styled from "styled-components";
import { motion } from "framer-motion"



export const ASH1 = styled(motion.h1)`
  text-shadow: -2px 34px 14px rgba(50, 50, 50, 1);
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-align:center;
  align-items:center;
  background-color: #757575;
  font-family: 'Lato', sans-serif;
`;

export const ASH2 = styled(motion.h2)`

`

export const ButtonsWrapper = styled(motion.div)`
  max-width: 400px;
  max-height: 200px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 8px;
  margin-bottom: 20px;
`;

interface OptionButtonProps {
  active?: boolean
}

export const OptionButton = styled(motion.button) <OptionButtonProps>`
  width: 200px;
  height: 55px;
  text-transform: capitalize;
  border-radius: 20px;
  outline:none;
  border: 2px solid #c92200;
  transition: 0.05s;
  background-color: ${({ active }) => active ? "#f0c911" : "#f2ab1e"};
  color: ${({ active }) => active ? "#fff" : "#c92200"};
  font-size: 1.2rem;
  :hover {
  cursor: pointer;
  border: 3px solid #c92200;
}
`;

export const LinkButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #f9eca0;
  background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
  background-color: #f0c911;
  border-radius: 6px;
  border: 1px solid #e65f44;
  display: inline-block;
  cursor: pointer;
  color: #c92200;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ded17c;
`
export const LinkButtonsWrapper = styled(motion.div)`
  display: flex;
  justify-content:space-between;
  width: 380px;
`