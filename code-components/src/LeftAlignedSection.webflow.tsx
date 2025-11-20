import { declareComponent } from "@webflow/react";
import { LeftAlignedSection } from "./LeftAlignedSection";
import { props } from "@webflow/data-types";

export default declareComponent(LeftAlignedSection, {
  name: "Left Aligned Section",
  group: "basic",
  props: {
    heading: props.Text({
      name: "Heading",
      defaultValue: "Main Heading HWDP",
    }),
    paragraph: props.Text({
      name: "Paragraph",
      defaultValue: "This is a paragraph of text that describes the section.",
    }),
    image: props.Image({
      name: "Image",
    }),
    button: props.Slot({
      name: "Button",
    }),
  },
  options: {
    applyTagSelectors: true,
  },
});
