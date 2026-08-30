export default {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    { name: "brandName", title: "Brand name", type: "string", description: "Shown at the top of the sidebar, e.g. [ Your Name ]" },
    { name: "brandTagline", title: "Brand tagline", type: "string", description: "Small line under the brand name" },
    { name: "navHomeLabel", title: "Nav label — Home", type: "string" },
    { name: "navWorkLabel", title: "Nav label — Work", type: "string" },
    { name: "navJournalLabel", title: "Nav label — Journal", type: "string" },
    { name: "navGearLabel", title: "Nav label — Gear", type: "string" },
    { name: "navMapLabel", title: "Nav label — Map", type: "string" },
  ],
}
