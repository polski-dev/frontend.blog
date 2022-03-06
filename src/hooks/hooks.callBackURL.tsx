export default function useAddCallBackURL() {
  const addCallBackURL: ({ to, name }: { to: string; name: string }) => void = ({ to, name }: { to: string; name: string }): void => {
    const localStorage = window.localStorage;
    localStorage?.setItem("callBackURL", JSON.stringify({ to, name }));
  };

  const deleteCallBackURL: () => void = (): void => {
    const localStorage = window.localStorage;
    localStorage.removeItem("callBackURL");
  };

  const readCallBackURL: () => { to: string | null; name: string | null; err: boolean; msg: string | null } = (): { to: string | null; name: string | null; err: boolean; msg: string | null } => {
    const localStorage = window.localStorage;
    const callBackURL: string | null = localStorage?.getItem("callBackURL");
    const data: { to: string; name: string } | undefined = callBackURL && JSON.parse(callBackURL);
    if (!!data) return { ...data, err: false, msg: null };
    return { to: null, name: null, err: true, msg: "not exsiste" };
  };

  return { addCallBackURL, deleteCallBackURL, readCallBackURL };
}
