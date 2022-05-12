import dynamic from "next/dynamic";
import React, { useEffect, useState, useMemo, useRef, MutableRefObject } from "react";
import { SimpleMDEBox, Input } from "./component.simpleMDE.styled";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

export default function SimpleMDEComponent({ placeholder }: { placeholder?: string }): JSX.Element {
  const [value, setValue] = useState("");
  const fileUpload: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const onChange = (value: string) => {
    setValue(value);
  };

  const options: {} = useMemo(() => {
    return {
      showIcons: ["code", "table"],
      placeholder: placeholder || "Napisz coś ...",
      shortcuts: {
        cleanBlock: "Cmd-E",
        toggleBold: "Cmd-B",
        toggleHeadingSmaller: "Cmd-H",
        toggleItalic: "Cmd-I",
        drawLink: "Cmd-K",
        toggleUnorderedList: "Cmd-L",
        togglePreview: "Cmd-P",
        image: "Cmd-Alt-I",
        toggleOrderedList: "Cmd-Alt-L",
        toggleCodeBlock: "Cmd-Alt-C",
        toggleHeadingBigger: "Shift-Cmd-H",
        drawTable: "Cmd-Alt-T", // bind Cmd-Alt-T to drawTable action, which doesn't come with a default shortcut
      },
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "strikethrough",
        "|",
        "link",
        "quote",
        {
          name: "image",
          action: function addImage(editor: any) {
            const input: HTMLInputElement | null = fileUpload.current;
            if (input) {
              fileUpload.current?.click();
              fileUpload.current?.addEventListener("change", (e: Event) => {
                const target: HTMLInputElement = e?.target as HTMLInputElement;
                const file: File | null | undefined = target.files?.item(0);
                if (!!file) {
                  const cm = editor.codemirror;
                  console.log(cm);
                  let output = "";
                  const selectedText = cm.getSelection();
                  const text = selectedText || "placeholder";

                  output = `![${file.name}](https://if-koubou.com/img/images/what-is-a-url-uniform-resource-locator.png)`;
                  cm.replaceSelection(output);
                }
              });
            }
          },
          className: "fa fa-image",
          title: "Add image",
        },
        "|",
        "unordered-list",
        "ordered-list",
        "table",
        "|",
        "code",
        "quote",

        "|",
        "side-by-side",
        "preview",
        "fullscreen",
      ],
    };
  }, [placeholder]);

  return (
    <SimpleMDEBox>
      <Input ref={fileUpload} type="file" id="editorUploadImage" onChange={(e) => console.log(e)} name="editorUploadImage" accept="image/jpeg,image/jpg,image/png" />
      <SimpleMDE options={options} value={value} onChange={onChange} style={{ width: "100%" }} />
    </SimpleMDEBox>
  );
}
