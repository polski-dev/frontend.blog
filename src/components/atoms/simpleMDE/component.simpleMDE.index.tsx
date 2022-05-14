import dynamic from "next/dynamic";
import SimpleMDEHook from "./hook/component.simpleMDE.hook";
import Popup from "components/atoms/popup/component.popup.index";
import { SimpleMDEBox, Input } from "./component.simpleMDE.styled";
import { ItemLoad } from "components/atoms/animation/comonent.animation.index";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false, loading: () => <ItemLoad height={30} /> });

export default function SimpleMDEComponent({ placeholder }: { placeholder?: string }): JSX.Element {
  const { options, powerPopupUploadImage, statusUploadImage, inputfileUpload, uploadImage, value } = SimpleMDEHook({ placeholder });

  return (
    <SimpleMDEBox>
      <Popup power={powerPopupUploadImage} status={statusUploadImage === "pending" ? null : statusUploadImage === "rejected" ? false : true} title="Dodaje zdjęcie..." description={statusUploadImage === "rejected" ? "Wystąpił problem z dodaniem zdjęcia..." : "Zdjęcie dodane... :)"} />
      <Input ref={inputfileUpload} onChange={() => uploadImage()} type="file" id="editorUploadImage" name="editorUploadImage" accept="image/jpeg,image/jpg,image/png" />
      <SimpleMDE options={options} value={value} onChange={(e) => console.log(e)} style={{ width: "100%" }} />
    </SimpleMDEBox>
  );
}
