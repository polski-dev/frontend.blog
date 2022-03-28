import { Button } from "components/atoms/button/component.button.index";
import { InfoBoxTag, Title, Description } from "./component.infoBox.tagPage.style";

export default function InfoBoxTagPageComponent({ data: { id, title, description } }: { data: { id: number; title: string; description?: string | undefined } }) {
  return (
    <InfoBoxTag>
      <Title>
        <span>#</span>
        {title}
      </Title>
      <Button title={"Subskrybuj"} className="btn">
        Subskrybuj
      </Button>
      <Description description={description}>{description ? description : "Brak opisu"}</Description>
    </InfoBoxTag>
  );
}
