const auditorium = new Auditorium([
  { rows: boxMap, name: "Box left 1.", mirrored: false },
  { rows: boxMap, name: "Box left 2.", mirrored: false },
  { rows: boxMap, name: "Box left 3.", mirrored: false },
  { rows: boxMap, name: "Box right 1.", mirrored: true },
  { rows: boxMap, name: "Box right 2.", mirrored: true },
  { rows: boxMap, name: "Box right 3.", mirrored: true },
  { rows: sideBalconyMap, name: "Balcony left", mirrored: false },
  { rows: sideBalconyMap, name: "Balcony right", mirrored: true },
  { rows: midBalconyMap, name: "Balcony mid.", mirrored: false },
  { rows: centralAuditorium, name: "Auditorium", mirrored: false },
]);
auditorium.render("app");
