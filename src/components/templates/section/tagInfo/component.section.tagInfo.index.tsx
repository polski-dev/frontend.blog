import useSubscribe from "hooks/hooks.useSubscribe";
import { TagFindOneType } from "utils/query/tags/find";
import { UserChangeSubscribeType } from "utils/query/subscribe/users";
import { ComponentAnimationItemLoad } from "components/atoms/animation";
import { ContentEnum } from "types/database/types.database.contentEnum";
import { Button } from "components/atoms/button/component.button.index";
import { InfoBoxTag, Title, Description } from "./component.section.tagInfo.style";

export default function SectionTagInfo({ data }: { data?: { tag?: TagFindOneType } }): JSX.Element {
  const { changeSubscribe, amISubscribeStatus, iAmWaitingForAnswerSubscribeStatus } = useSubscribe({ id: data?.tag?.data?.id, typ: ContentEnum.tag });
  return (
    <InfoBoxTag>
      <Title>
        <span>#</span>
        {data?.tag?.data?.attributes.title}
      </Title>
      {iAmWaitingForAnswerSubscribeStatus ? (
        <ComponentAnimationItemLoad height={3.1} className="btn" style={{ maxWidth: "12.5rem" }} />
      ) : (
        <Button title={true ? "Zrezygnuj z subskrypcji" : "Subskrybuj"} className="btn" onClick={(): Promise<UserChangeSubscribeType> => changeSubscribe()}>
          {amISubscribeStatus.data?.subscribe ? "Subskrybujesz" : "Subskrybuj"}
        </Button>
      )}
      <Description>{data?.tag?.data?.attributes.description ? data?.tag?.data?.attributes.description : ""}</Description>
    </InfoBoxTag>
  );
}
