import dynamic from "next/dynamic";
import React, { useEffect, useState, useMemo } from "react";
import { SimpleMDEBox } from "./component.simpleMDE.styled";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

export default function SimpleMDEComponent({ placeholder }: { placeholder?: string }): JSX.Element {
  const [value, setValue] = useState("");

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
          action: function customFunction(editor: any) {
            var cm = editor.codemirror;
            var output = "";
            var selectedText = cm.getSelection();
            var text = selectedText || "placeholder";

            output = `![][https://www.uxu.pl]`;
            cm.replaceSelection(output);
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
        "|",
        "guide",
      ],
    };
  }, [placeholder]);

  return (
    <SimpleMDEBox>
      <SimpleMDE options={options} value={value} onChange={onChange} style={{ width: "100%" }} />
    </SimpleMDEBox>
  );
}
