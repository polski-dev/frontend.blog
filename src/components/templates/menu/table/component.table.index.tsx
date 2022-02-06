import lodash from "lodash";
import Link from "next/link";
import { Table, BoxContent, Heder, Title, List, Item } from "./component.table.style";

export default function MenuTable({ data, title, slug }: any) {
  return (
    <Table>
      <BoxContent>
        <Heder>
          <Title>
            <span>#</span>
            {title}
          </Title>
          <Link href={`/${slug}`}>
            <a>wszystkie</a>
          </Link>
        </Heder>
        <List>
          {data.slice(0, 5).map((item: any, i: number) => {
            return (
              <Item key={i}>
                <Link href={`/${slug}/${lodash.kebabCase(lodash.deburr(item.attributes.title.toLowerCase()))}`}>
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
