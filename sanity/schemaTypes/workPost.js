export default {
  name: "workPost",
  title: "Work photo",
  type: "document",
  fields: [
    {
      name: "frameNumber",
      title: "Frame number",
      type: "string",
      description: "e.g. 36A — shown as a small label on the card",
    },
    {
      name: "instagramUrl",
      title: "Instagram post URL",
      type: "url",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first",
    },
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
}
