import { useEffect } from "react";
import dynamic from "next/dynamic";
import SimpleMDEHook from "./hook/component.simpleMDE.hook";
import Popup from "components/atoms/popup/component.popup.index";
import { SimpleMDEBox, Input, TextArea } from "./component.simpleMDE.styled";
import { ComponentAnimationItemLoad } from "components/atoms/animation/index";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false, loading: () => <ComponentAnimationItemLoad height={30} /> });

export default function SimpleMDEComponent({
  id,
  name,
  error,
  placeholder = "Dodaj opis ...",
  register,
  setValue,
  required,
  pattern,
}: {
  id: string;
  name: string;
  error: string;
  placeholder?: string;
  register: (...props: any) => void;
  setValue: (...props: any) => void;
  required?: boolean;
  pattern?: Object;
}): JSX.Element {
  const { options, powerPopupUploadImage, statusUploadImage, inputfileUpload, uploadImage, valueEditor, setValueEditor } = SimpleMDEHook({ placeholder });

  useEffect(() => setValue(id, valueEditor), [setValue, id, valueEditor]);

  return (
    <SimpleMDEBox>
      <Popup power={powerPopupUploadImage} status={statusUploadImage === "pending" ? null : statusUploadImage === "rejected" ? false : true} title="Dodaje zdjęcie..." description={statusUploadImage === "rejected" ? "Wystąpił problem z dodaniem zdjęcia..." : "Zdjęcie dodane... :)"} />
      <Input ref={inputfileUpload} onChange={() => uploadImage()} type="file" id="editorUploadImage" name="editorUploadImage" accept="image/jpeg,image/jpg,image/png" />
      <SimpleMDE options={options} value={valueEditor} onChange={(e) => setValueEditor(e)} style={{ width: "100%" }} />
      <TextArea id={id} name={name} error={!!error} {...(register(id, { pattern, required }) as any)}></TextArea>
    </SimpleMDEBox>
  );
}
