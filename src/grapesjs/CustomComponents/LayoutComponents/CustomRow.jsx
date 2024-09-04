const CustomRow = (editor) => {
  editor.Components.addType("custom-row", {
    // model definition
    model: {
      defaults: {
        tagName: "div",
        attributes: { class: "custom-row" },
        droppable: true,
        draggable: true,
        // A row always starts with one column
        components: [
          {
            type: "text", // Adding a placeholder text component initially
            content: "Drag components here",
          },
        ],
        // Default styles
        style: {
          padding: "10px",
          "background-color": "#0454a8",
          color: "#fff",
          border: "none",
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
