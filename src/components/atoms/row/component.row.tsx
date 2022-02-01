import React from "react";
import Row from "./component.row.style";

type RowProps = {
  style?: any;
  children: JSX.Element | JSX.Element[] | any;
};

const RowComponent = ({ children, style }: RowProps) => {
  return <Row style={style}>{children}</Row>;
};

export default RowComponent;
