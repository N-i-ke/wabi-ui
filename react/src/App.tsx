import React from "react";
import { Button, Title } from "@wabi-ui/react";

export default function App() {
  return (
    <>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "100px" }}>
        <Title level={1}>Wabi UI — Demo</Title>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 16 }}>
          <Button onClick={() => alert("clicked")}>Primary</Button>
        </div>
      </div>
    </>
  );
}


