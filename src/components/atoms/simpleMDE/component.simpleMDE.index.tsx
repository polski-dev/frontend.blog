import dynamic from "next/dynamic";
import React, { useEffect, useState, useMemo } from "react";
import { SimpleMDEBox } from "./component.simpleMDE.styled";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

export default function SimpleMDEComponent(): JSX.Element {
  const [value, setValue] = useState("");

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <SimpleMDEBox>
      <SimpleMDE value={value} onChange={onChange} style={{ width: "100%" }} />
    </SimpleMDEBox>
  );
}
