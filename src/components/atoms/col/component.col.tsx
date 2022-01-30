import React from "react";
import Col from "./component.col.style";

interface ColComponentProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  style?: any;
  className?: string;
  ref?: JSX.Element | JSX.Element[] | any;
  children?: JSX.Element | JSX.Element[] | any;
}

const ColComponent = ({ children, style, className, ref, xs, sm, md, lg, xl, xxl }: ColComponentProps, props: any) => {
  return (
    <>
      <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl} style={style} className={className} ref={ref} {...props}>
        {children}
      </Col>
    </>
  );
};

export default ColComponent;
