export default {
  name: "home",
  title: "Home page",
  type: "document",
  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow text",
      type: "string",
      description: "The small line above the headline, e.g. PHOTOGRAPHY — JOURNAL — GEAR",
    },
    {
      name: "headlineStart",
      title: "Headline (before the underlined word)",
      type: "string",
    },
    {
      name: "underlinedWord",
      title: "Underlined word",
      type: "string",
    },
    {
      name: "headlineEnd",
      title: "Headline (after the underlined word)",
      type: "string",
    },
    {
      name: "tapeLabel",
      title: "Tape label",
      type: "string",
      description: "e.g. FRAME 01 / ONGOING",
    },
    {
      name: "intro",
      title: "Intro paragraph",
      type: "text",
    },
    {
      name: "heroPhoto",
      title: "Hero photo",
      type: "image",
    },
  ],
}
