import { useEffect, useState, useCallback } from "react";
import { InputInterface } from "./component.inputForTags.type";
import { Label, Input, Span } from "./component.inputForTags.style";

export default function InputForTagsComponent({ id, name, defaultValue, placeholder, pattern, error, setValue, register, required }: InputInterface) {
  const tagsState: string[] = [];
  const [active, setActive] = useState(false);
  const [tags, setTags] = useState(tagsState);
  const [valueInput, setValueInput] = useState("");
  const regex = /[!@#$%^&*()_+{}[\];:'"\|,<.>?\/`~=*§£\ ]/g;

  const deleteTag = useCallback(
    (id: number): void => {
      let arr: string[] = [...tags];
      if (tags.length > 1) arr.splice(id, 1);
      else arr = [];
      setTags(arr);
    },
    [tags]
  );

  const addTag = (e: any) => {
    const value = e?.target?.value;
    setValueInput(value);
    if (value.split(regex).length > 1) {
      setTags([...tags, ...value.split(regex).filter((item: string) => item.length > 0)]);
      setValueInput("");
    }
  };

  const deleteLastTag = useCallback(
    (e: KeyboardEvent): void => {
      if (active && e.keyCode === 8 && !valueInput.length) deleteTag(tags.length - 1);
    },
    [active, tags, valueInput, deleteTag]
  );

  useEffect(() => setValue(id, tags), [tags, valueInput, id, setValue, setTags]);

  useEffect(() => {
    window.addEventListener("keydown", deleteLastTag, false);
    return () => window.removeEventListener("keydown", deleteLastTag, false);
  }, [deleteLastTag]);

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

        <Input
          id={id}
          placeholder={placeholder}
          type="text"
          value={valueInput}
          onFocus={() => {
            if (!active) setActive(true);
          }}
          onBlur={() => {
            if (!!active) setActive(false);
          }}
        />
      </Label>
      <Input name={name} style={{ display: "none" }} defaultValue={defaultValue} error={!!error} {...register(id, { pattern, required })} />
    </>
  );
}
