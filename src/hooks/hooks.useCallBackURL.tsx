import { useState, useEffect } from "react";

export default function useAddCallBackURL() {
  const [readCallBackURL, setReadCallBackURL] = useState({ to: "", name: "", err: true, msg: "not set" });
  const addCallBackURL: ({ to, name }: { to: string; name: string }) => void = ({ to, name }: { to: string; name: string }): void => {
    const localStorage = window.localStorage;
    localStorage?.setItem("callBackURL", JSON.stringify({ to, name }));
  };

  const deleteCallBackURL: () => void = (): void => {
    const localStorage = window.localStorage;
    localStorage.removeItem("callBackURL");
  };

  useEffect(() => {
    const localStorage = window.localStorage;
    const callBackURL: string | null = localStorage?.getItem("callBackURL");
    const data: { to: string; name: string } | undefined = callBackURL && JSON.parse(callBackURL);
    if (!!data) setReadCallBackURL({ ...data, err: false, msg: "" });
  }, []);

  return { addCallBackURL, deleteCallBackURL, readCallBackURL };
}
