import { ReactElement } from "react";
import Container from "./styled";

interface iProps {
  children: ReactElement;
}

function Card({ children }: iProps) {
  return <Container>{children}</Container>;
}
export default Card;
