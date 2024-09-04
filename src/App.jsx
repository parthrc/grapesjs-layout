import grapesjs from "grapesjs";
import GjsEditor, { Canvas, PagesProvider } from "@grapesjs/react";
import "./App.css";
import CustomRow from "./grapesjs/CustomComponents/LayoutComponents/CustomRow.jsx";
import CustomColumn from "./grapesjs/CustomComponents/LayoutComponents/CustomColumn.jsx";

function App() {
  const onEditor = (editor) => {
    console.log("Editor loaded", { editor });
    if (editor) editor.addComponents({ type: "custom-row" });
  };

  return (
    <GjsEditor
      grapesjs={grapesjs}
      grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
      onEditor={onEditor}
      // plugins
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
        // parser: {
        //   optionsHtml: {
        //     allowScripts: true,
        //   },
        // },
      }}
    >
      <PagesProvider>
        <Canvas />
      </PagesProvider>
    </GjsEditor>
  );
}
export default App;
