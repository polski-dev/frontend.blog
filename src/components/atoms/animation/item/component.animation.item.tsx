import React from "react";
import { Item } from "./component.animation.item.style";

export const ComponentAnimationItemLoad = ({ height = 1.6, style, className }: { height?: number; style?: object; className?: string }) => <Item height={height} style={style} className={className} />;
