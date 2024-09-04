import grapesjs from "grapesjs";
import GjsEditor, { Canvas, PagesProvider } from "@grapesjs/react";
import "./App.css";
import CustomRow from "./grapesjs/CustomComponents/LayoutComponents/CustomRow.jsx";
import CustomColumn from "./grapesjs/CustomComponents/LayoutComponents/CustomColumn.jsx";
import { getPositionOfChild } from "./utils/grapesjs-utils.js";

function App() {
  const onEditor = (editor) => {
    console.log("Editor loaded", { editor });
    if (editor) editor.addComponents({ type: "custom-row" });

    const handleComponentAdd = (model) => {
      const parent = model.parent();
      console.log("Parent=", parent);

      // if a new component is added to the main canvas
      // wrap it inside custom-row component first
      if (parent.attributes.type === "wrapper") {
        console.log("New component added = ", model);

        // Temporarily remove the event listener
        editor.off("component:add", handleComponentAdd);

        const position = getPositionOfChild(model);
        const latestAddedComp = parent.getChildAt(position);
        console.log("Latest Added = ", latestAddedComp);
        console.log("Before replacing", parent.components().models);

        // Replace the latest added component with a new one
        latestAddedComp.replaceWith({
          type: "custom-row",
          components: [
            { type: "custom-column", components: [latestAddedComp.clone()] },
          ],
        });
        console.log("After replacing", parent.components().models);
        // Add the event listener back
        editor.on("component:add", handleComponentAdd);
      }
    };

    // Add the event listener for component:add
    editor.on("component:add", handleComponentAdd);
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={onEditor}
      plugins={[
        {
          id: "gjs-blocks-basic",
          src: "https://unpkg.com/grapesjs-blocks-basic",
        },
        CustomRow,
        CustomColumn,
      ]}
      options={{
        height: "100vh",
        storageManager: false,
        fromElement: true,
        selectorManager: {
          componentFirst: true,
        },
      }}
    >
      <PagesProvider>
        <Canvas />
      </PagesProvider>
    </GjsEditor>
  );
}
export default App;
