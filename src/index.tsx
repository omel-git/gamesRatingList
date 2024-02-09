import { createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <div>
    <h3>Hello World</h3>
  </div>,
);
