const CustomRow = (editor) => {
  // isComponent

  editor.Components.addType("custom-row", {
    isComponent: (el) =>
      el.tagName === "DIV" && el.classList.contains("custom-row"),
    // model definition
    model: {
      defaults: {
        tagName: "div",
        attributes: { class: "custom-row" },
        droppable: true,
        draggable: true,
        // A row always starts with one column
        components: [
          //   {
          //     type: "text", // Adding a placeholder text component initially
          //     content: "Drag components here",
          //   },
        ],
        // Default styles
        style: {
          padding: "10px",
          "background-color": "#e0f0ff",
          color: "#000000",
          border: "5px solid #0454a8",
          "border-radius": "5px",
          "font-size": "16px",
          "min-height": "50px", // Ensure it has some height initially
        },
        // custom methods
      },
    },
    // view definition
    // View definition (optional)
    view: {
      onRender() {
        console.log("CustomRow rendered");
      },
    },
  });
  // Add the custom component to the Block Manager
  editor.BlockManager.add("custom-row", {
    label: "Custom Row",
    category: "Layout",
    content: { type: "custom-row" },
  });
};
export default CustomRow;
