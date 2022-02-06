import lodash from "lodash";
import Link from "next/link";
import { setSlug } from "function/function.index";
import { Table, BoxContent, Heder, Title, List, Item } from "./component.table.style";

export default function MenuTable({ data, title, type }: any) {
  const slug = new setSlug(type);
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
                <Link href={`/${slug.setContent}/${lodash.kebabCase(lodash.deburr(item.attributes.title.toLowerCase()))}`}>
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
