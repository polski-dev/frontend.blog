import React from "react";
import { Article, Img, BoxContent, AuthorData, BoxAuthor, AuthorAvatar, Text, List, Item, BoxStats } from "./component.animation.squareShortArticle.style";

export const SquareShortArticle = ({ last = false, style }: { last?: boolean; style?: any }) => (
  <Article last={last} style={style}>
    <Img />
    <BoxContent>
      <BoxAuthor>
        <AuthorAvatar />
        <AuthorData>
          <Text height={1.9} style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }} />
          <Text height={1.4} style={{ marginLeft: "0.5rem" }} />
        </AuthorData>
      </BoxAuthor>
      <Text height={3.3} className="title" />
      <List style={{ marginBottom: "3rem", width: "100%" }}>
        <Item>
          <Text height={1.9} />
        </Item>
        <Item>
          <Text height={1.9} />
        </Item>
        <Item>
          <Text height={1.9} />
        </Item>
        <Item>
          <Text height={1.9} />
        </Item>
      </List>
      <BoxStats>
        <List>
          <Item style={{ width: "4rem" }}>
            <Text height={2.5} />
          </Item>
          <Item style={{ width: "4rem" }}>
            <Text height={2.5} />
          </Item>
          <Item style={{ width: "4rem" }}>
            <Text height={2.5} />
          </Item>
          <Item style={{ width: "4rem" }}>
            <Text height={2.5} />
          </Item>
        </List>
        <Text height={2.5} style={{ width: "8rem", marginLeft: "auto" }} />
      </BoxStats>
    </BoxContent>
  </Article>
);
