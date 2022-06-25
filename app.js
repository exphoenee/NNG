/*
let balconyLeft = new Sector({
  rows: centralAuditorium,
  name: "Central Auditory",
  mirrored: true,
});
balconyLeft.render();
*/
const auditorium = new Auditorium([
  { rows: boxMap, name: "Box left 1.", mirrored: false },
  { rows: boxMap, name: "Box right 1.", mirrored: true },
]);
auditorium.render();
