import { Button } from "components/atoms/button/component.button.index";
import { InfoBoxTag, Title, Description } from "./component.infoBox.tagPage.style";

export default function InfoBoxTagPageComponent({
  data: { id, slug, title, description, statusSubscription, subscriptionToggleGet },
}: {
  data: { id: number; slug: string; title: string; description?: string | undefined; statusSubscription: boolean; subscriptionToggleGet: () => any };
}) {
  return (
    <InfoBoxTag>
      <Title>
        <span>#</span>
        {title}
      </Title>

      <Button
        title={statusSubscription ? "Zrezygnuj z subskrypcji" : "Subskrybuj"}
        className="btn"
        onClick={() => {
          subscriptionToggleGet();
        }}
      >
        {statusSubscription ? "Subskrybujesz" : "Subskrybuj"}
      </Button>
      <Description description={description}>{description ? description : "Brak opisu"}</Description>
    </InfoBoxTag>
  );
}
