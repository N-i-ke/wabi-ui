import React from "react";
import { Button, SecondaryButton, IconButton, GhostButton } from "@wabi-ui/react";
import { ReactComponent as SampleIcon } from "../../packages/react/src/components/Button/icon-placeholder.svg";

export default function App() {
  return (
    <>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Button onClick={() => alert("clicked")}>Primary</Button>
        <SecondaryButton onClick={() => alert("clicked too")}>Secondary</SecondaryButton>
        <IconButton icon={<span>⭐</span>} label="star" onClick={() => alert("icon")} />
        <GhostButton onClick={() => alert("ghost")}>Ghost</GhostButton>
      </div>
    </>
  );
}


