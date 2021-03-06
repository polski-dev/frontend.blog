import { ComponentAnimationItemLoad } from "components/atoms/animation";
import { GlobalStyle, PopupWrapper, Popup, Info, Header } from "./component.popup.styled";

export default function PopupComponent({ power = false, status = false, title = "Upss...", description = "Coś poszło nie tak ..." }: { power?: boolean; status?: boolean | null; title?: string; description?: string }): JSX.Element {
  return (
    <>
      <GlobalStyle power={power} />
      <PopupWrapper power={power}>
        <Popup>
          <Header>{title}</Header>
          {status === null ? <ComponentAnimationItemLoad height={6} style={{ borderRadius: "0.6rem" }} /> : <Info status={status}>{description}</Info>}
        </Popup>
      </PopupWrapper>
    </>
  );
}
