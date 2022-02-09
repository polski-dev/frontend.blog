import Link from "next/link";
import { url } from "inspector";
import lodash from "lodash";
import { useContext } from "react";
import { useRouter } from "next/router";
import Hash from "assets/icon/hash.svg";
import News from "assets/icon/news.svg";
import getSlug from "function/function.slug";
import Search from "assets/icon/search.svg";
import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Button, SugestBox, Item, IconBox, ContentBox, ContentTitle, ContentTags, ContentTag } from "./component.searchBar.style";

export default function SearchBar() {
  const router = useRouter();
  const [focus, setFocus] = useState(false);

  // const search = (event: any) => {
  //   event.preventDefault();
  //   router.push(`/search/${searchQuery}`);
  //   setFocus(false);
  // };

  // useEffect(() => {
  //   let pushQuery = setTimeout(() => null, 300);

  //   if (searchQuery.length)
  //     pushQuery = setTimeout(
  //       async () =>
  //         await fetch(`/api/search/1/${searchQuery}`)
  //           .then((data) => data.json())
  //           .then((result) => {
  //             setSearchContent(result);
  //           })
  //           .catch((err) => {
  //             setSearchContent([]);
  //           }),
  //       300
  //     );
  //   else setSearchContent(initialContextSearch);

  //   return () => clearTimeout(pushQuery);
  // }, [setSearchContent, searchQuery]);

  return <>ok</>;

  //   return (
  //     <Form
  //       onSubmit={""}
  //       style={{
  //         boxShadow: focus ? "0 0 6px rgba(0, 0, 0, 0.6)" : "0 0 6px rgba(0, 0, 0, 0)",
  //         height: focus && searchContent.all.data.length ? "auto" : "3rem",
  //       }}
  //     >
  //       <Input
  //         name="query"
  //         value={searchQuery}
  //         autoFocus={focus}
  //         onFocus={() => setFocus(true)}
  //         onBlur={() => setFocus(false)}
  //         onChange={(e) => setSearchQuery(e.target.value)}
  //         style={{
  //           borderBottomLeftRadius: focus && searchContent.all.data.length ? "0" : "0.6rem",
  //           borderBottomRightRadius: focus && searchContent.all.data.length ? "0" : "0.6rem",
  //         }}
  //       />
  //       <Button type="submit" title="szukaj">
  //         <Search />
  //       </Button>
  //       <SugestBox
  //         style={{
  //           opacity: focus && searchContent.all.data.length ? "1" : "0",
  //         }}
  //         onFocus={() => setFocus(true)}
  //       >
  //         {searchContent.all.data.length && (
  //           <>
  //             {searchContent.all.data.slice(0, 5).map((item: any, i: number) => {
  //               return (
  //                 <Item key={i}>
  //                   <Link href={`${new getSlug(item.type).setContent}/${item.type === "user" ? lodash.kebabCase(lodash.deburr(item.username.toLowerCase())) : lodash.kebabCase(lodash.deburr(item.attributes.title.toLowerCase()))}`}>
  //                     <a>
  //                       {!!item?.attributes?.cover?.data?.attributes?.formats?.thumbnail?.url ? (
  //                         <IconBox style={{ backgroundImage: `url(${item.attributes.cover.data.attributes.formats.thumbnail.url})` }} />
  //                       ) : (
  //                         <IconBox>
  //                           <Search />
  //                         </IconBox>
  //                       )}
  //                       <ContentBox>
  //                         <ContentTitle>{item.type === "user" ? item.username : item.attributes.title}</ContentTitle>
  //                         <ContentTags>
  //                           {item.tags &&
  //                             item.tags.map((tag: any, i: number) => {
  //                               return (
  //                                 <ContentTag key={i}>
  //                                   <span>#</span>
  //                                   {tag.title}
  //                                   <span>,</span>
  //                                 </ContentTag>
  //                               );
  //                             })}
  //                         </ContentTags>
  //                       </ContentBox>
  //                     </a>
  //                   </Link>
  //                 </Item>
  //               );
  //             })}
  //           </>
  //         )}
  //       </SugestBox>
  //     </Form>
  //   );
  // }
}
