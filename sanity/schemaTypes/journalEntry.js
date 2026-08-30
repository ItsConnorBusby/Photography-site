export default {
  name: "journalEntry",
  title: "Journal entry",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "date", title: "Date", type: "date" },
    { name: "mainImage", title: "Main image", type: "image", options: { hotspot: true } },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
      ],
    },
  ],
  orderings: [
    { title: "Date, newest first", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
  ],
}
