import { Section, Header, Title, Content, Description } from "./component.section.dasbordUserInfo.style";

export default function SectionDasbordUserInfo({ data: { username, description } }: { data: { username: string | null; description: string | null } }) {
  return (
    <Section>
      <Header>Start</Header>
      <Content>
        <Title>{username ? `Witaj! ${username}` : "Zaloguj się"}</Title>
        <Description>{description ? description : "Niestety nie masz tu dostępu :("}</Description>
      </Content>
    </Section>
  );
}
