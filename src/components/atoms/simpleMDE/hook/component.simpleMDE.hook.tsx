import { useSession } from "next-auth/react";
import { useState, useMemo, useRef, MutableRefObject } from "react";
import { uploadFile, UploadType } from "utils/database/files/database.files.index";

export default function SimpleMDEHookComponent({ placeholder }: { placeholder?: string }) {
  const actionInitialState: any = null;
  const { data: session } = useSession();

  const [valueEditor, setValueEditor] = useState("");
  const [action, setAction] = useState(actionInitialState);
  const [statusUploadImage, setStatusUploadImage] = useState("pending");
  const [powerPopupUploadImage, setPowerPopupUploadImage] = useState(false);
  const inputfileUpload: MutableRefObject<HTMLInputElement | null> = useRef(null);

  async function uploadImage() {
    if (!session) alert("zaloguj się!");

    const input: HTMLInputElement | null = inputfileUpload.current;

    if (!input) return null;
    else if (!input?.files?.length) return null;
    else if (!action) return null;

    const { codemirror } = action;
    const file: File = input?.files[0];
    file && setPowerPopupUploadImage(true);
    const fileUploadData: UploadType = await uploadFile({ file, authorization: `${session?.jwt}` });

    if (!!fileUploadData?.data?.length) {
      codemirror && (await codemirror.replaceSelection(`![${fileUploadData.data[0].name}](${fileUploadData.data[0].url})`));
      setStatusUploadImage("resolved");
    } else setStatusUploadImage("rejected");

    setTimeout(() => setPowerPopupUploadImage(false), 3000);
  }

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
        drawTable: "Cmd-Alt-T",
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
            setAction(editor);
            inputfileUpload?.current && inputfileUpload.current.click();
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
  }, [placeholder, inputfileUpload]);

  return { options, uploadImage, valueEditor, setValueEditor, action, setAction, inputfileUpload, statusUploadImage, powerPopupUploadImage };
}
