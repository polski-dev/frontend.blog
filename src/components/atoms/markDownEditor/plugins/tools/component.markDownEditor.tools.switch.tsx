import Eye from "assets/icon/eye.svg";
import Bolt from "assets/icon/bolt.svg";
import List from "assets/icon/list.svg";
import Link from "assets/icon/link.svg";
import Code from "assets/icon/code.svg";
import Trash from "assets/icon/trash.svg";
import Quote from "assets/icon/quote.svg";
import Italic from "assets/icon/italic.svg";
import Header from "assets/icon/header.svg";
import ImageUpload from "assets/icon/image.svg";
import Underline from "assets/icon/underline.svg";
import ListNumber from "assets/icon/listNumber.svg";
import Strikethrough from "assets/icon/strikethrough.svg";

export const iconSelect = (toolName?: string): JSX.Element => {
  switch (toolName) {
    case "heading":
      return <Header />;
    case "strong":
      return <Bolt />;
    case "emphasis":
      return <Italic />;
    case "underline":
      return <Underline />;
    case "delete":
      return <Strikethrough />;
    case "blockquote":
      return <Quote />;
    case "list":
      return <List />;
    case "listNumber":
      return <ListNumber />;
    case "link":
      return <Link />;
    case "code":
      return <Code />;
    case "imageUpload":
      return <ImageUpload />;
    case "eye":
      return <Eye />;
    case "trash":
      return <Trash />;
    default:
      return <>Error</>;
  }
};
