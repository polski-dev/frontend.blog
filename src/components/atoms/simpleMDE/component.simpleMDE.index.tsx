import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";

import { uploadFile, UploadType } from "database/files/database.files.index";
import { SimpleMDEBox, Input } from "./component.simpleMDE.styled";
import React, { useEffect, useState, useMemo, useRef, MutableRefObject, ChangeEvent } from "react";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

export default function SimpleMDEComponent({ placeholder }: { placeholder?: string }): JSX.Element {
  const [value, setValue] = useState("");

  const fileUpload: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const { data: session, status } = useSession();

  useEffect(() => {}, []);

  const onChange = (value: string) => {
    setValue(value);
  };
  console.log(session);
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
          action: async function addImage(editor: any): Promise<void> {
            const { codemirror } = editor;
            const input: HTMLInputElement | null = fileUpload.current;
            input && input.click();

            if (input && !!input?.files) {
              const file: File = input?.files[0];
              const fileUploadData: UploadType = await uploadFile({ file, authorization: `${session?.jwt}` });
              if (fileUploadData.data?.length) {
                let output = "";
                const selectedText = codemirror.getSelection();
                output = `![${fileUploadData.data[0].name}](${fileUploadData.data[0].url})`;
                codemirror.replaceSelection(output);
              } else {
                alert("error");
              }
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
  }, [placeholder, session, fileUpload]);

  return (
    <SimpleMDEBox>
      <Input ref={fileUpload} type="file" id="editorUploadImage" name="editorUploadImage" accept="image/jpeg,image/jpg,image/png" />
      <SimpleMDE options={options} value={value} onChange={onChange} style={{ width: "100%" }} />
    </SimpleMDEBox>
  );
}
