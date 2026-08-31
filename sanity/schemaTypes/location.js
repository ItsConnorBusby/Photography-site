export default {
  name: "location",
  title: "Map location",
  type: "document",
  fields: [
    { name: "name", title: "Location name", type: "string" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Travel", "Photo spots", "Coffee shops"] },
    },
    { name: "coordinates", title: "Coordinates", type: "geopoint" },
    {
      name: "posts",
      title: "Instagram posts",
      type: "array",
      of: [{ type: "url" }],
      description: "Add one URL per linked post — click 'Add item' for more than one",
    },
    {
      name: "linkedJournalPost",
      title: "Linked journal post",
      type: "reference",
      to: [{ type: "journalEntry" }],
      description: "Optional — link this location to a related journal entry",
    },
  ],
}
