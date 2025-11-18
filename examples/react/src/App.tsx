import React from "react";
import { Button } from "@wabi-ui/react";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>wabi-ui — examples</h1>
      <Button onClick={() => alert("clicked")}>Hello from wabi Button</Button>
    </div>
  );
}


