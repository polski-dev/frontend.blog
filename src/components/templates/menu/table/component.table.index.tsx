import { kebabCase, deburr } from "lodash";
import Link from "next/link";
import { useState, useEffect } from "react";
import { RootState } from "store/store.index";
import { setSlug } from "function/function.index";
import { useSelector, useDispatch } from "react-redux";
import { Table, BoxContent, Heder, Title, List, Item } from "./component.table.style";

export default function MenuTable({ type }: { type: string }) {
  const initialData: any[] = [];
  const slug = new setSlug(type);
  const [title, setTitle] = useState("");
  const [data, setData] = useState(initialData);
  const story = useSelector((state: RootState) => state);

  useEffect(() => {
    switch (type) {
      case "article":
        setData(story.content.article.home.data.slice(0, 5));
        setTitle("artykuły");
      case "video":
        setData(story.content.video.home.data.slice(0, 5));
        setTitle("artykuły");
        break;
    }
  }, [story, type]);

  return (
    <Table>
      <BoxContent>
        <Heder>
          <Title>
            <span>#</span>
            {title}
          </Title>
          <Link href={`/${slug.setPage}`}>
            <a>wszystkie</a>
          </Link>
        </Heder>
        <List>
          {data.slice(0, 5).map((item: any, i: number) => {
            return (
              <Item key={i}>
                <Link href={`/${slug.setContent}/${kebabCase(deburr(item.attributes.title.toLowerCase()))}`}>
                  <a>
                    <h6>{item.attributes.title}</h6>
                    <p>{item.attributes.author.data.attributes.username}</p>
                  </a>
                </Link>
              </Item>
            );
          })}
        </List>
      </BoxContent>
    </Table>
  );
}
