import { useEffect, useState } from "react";
import { InputInterface } from "./component.inputForTags.type";
import { Label, Input, Span } from "./component.inputForTags.style";

export default function InputForTagsComponent({ id, name, defaultValue, placeholder, pattern, error, setValue, register, required }: InputInterface) {
  const tagsState: string[] = [];
  const [tags, setTags] = useState(tagsState);
  const [valueInput, setValueInput] = useState("");
  const regex = /[!@#$%^&*()_+{}[\];:'"\|,<.>?\/`~=*§£\ ]/g;

  useEffect(() => {
    setValue(id, tags);
  }, [tags, id, setValue, setTags]);

  const deleteTag = (id: number) => {
    let arr: string[] = [...tags];
    if (tags.length > 1) arr.splice(id, 1);
    else arr = [];
    setTags(arr);
  };

  const addTag = (e: any) => {
    const value = e?.target?.value;
    setValueInput(value);
    if (value.split(regex).length > 1) {
      setTags([...tags, ...value.split(regex).filter((item: string) => item.length > 0)]);
      setValueInput("");
    }
  };

  return (
    <>
      <Label htmlFor={id} onChange={(e: any): void => addTag(e)}>
        {!!tags.length &&
          tags.map((tag: string, i: number) => {
            if (!tag.length) return null;

            return (
              <Span onClick={() => deleteTag(i)} key={i}>
                {tag}
              </Span>
            );
          })}

        <Input id={id} placeholder={placeholder} type="text" value={valueInput} />
      </Label>
      <Input name={name} style={{ display: "none" }} defaultValue={defaultValue} error={!!error} {...register(id, { pattern, required })} />
    </>
  );
}
