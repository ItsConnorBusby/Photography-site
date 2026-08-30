export default {
  name: "location",
  title: "Map location",
  type: "document",
  fields: [
    { name: "name", title: "Location name", type: "string" },
    { name: "coordinates", title: "Coordinates", type: "geopoint" },
    {
      name: "posts",
      title: "Instagram posts",
      type: "array",
      of: [{ type: "url" }],
      description: "Add one URL per linked post — click 'Add item' for more than one",
    },
  ],
}
