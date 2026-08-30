export default {
  name: "gearItem",
  title: "Gear item",
  type: "document",
  fields: [
    { name: "name", title: "Item name", type: "string" },
    { name: "image", title: "Thumbnail image", type: "image", options: { hotspot: true } },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Camera", "Lens", "Audio", "Accessory"] },
    },
    { name: "notes", title: "Notes", type: "text" },
    { name: "order", title: "Order", type: "number" },
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
}
