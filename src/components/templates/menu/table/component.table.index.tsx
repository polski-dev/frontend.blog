import Link from "next/link";
import { Table, Heder, Title, List, Item } from "./component.table.style";

export default function MenuTable() {
  return (
    <Table>
      <Heder>
        <Title>
          <span>#</span>video
        </Title>
        <Link href="/">
          <a>wszystkie</a>
        </Link>
      </Heder>
      <List>
        <Item>
          <Link href="/">
            <a>
              <h6>25 FREE CSS Tools/Resources That You Should Bookmark</h6>
              <p>Paweł Niedźwiecki</p>
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <a>
              <h6>25 FREE CSS Tools/Resources That You Should Bookmark</h6>
              <p>Paweł Niedźwiecki</p>
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <a>
              <h6>25 FREE CSS Tools/Resources That You Should Bookmark</h6>
              <p>Paweł Niedźwiecki</p>
            </a>
          </Link>
        </Item>
        <Item>
          <Link href="/">
            <a>
              <h6>25 FREE CSS Tools/Resources That You Should Bookmark</h6>
              <p>Paweł Niedźwiecki</p>
            </a>
          </Link>
        </Item>
      </List>
    </Table>
  );
}
