import * from "../sectorMap/sectorMaps.js";
/* these little object literals containting the properties of a sector  */

export boxLeft1 = {
  rows: boxMap, // the rows, are the map of the sector, every row is an array what contains the price category of the seat
  name: "Box left 1.", //name of the sector
  mirrored: false, //it is mirrored or not
  vert: 25, //the vertical position of the sector on the screen given in percentage
  hor: 15, //the horizontal position of the sector on the screen given in percentage
  angle: 90, //the angle of the sector on the screen given in degree
  sectorPreference: 4, //the preference value of a sector to calculate to position value in a seat neibourghood
};
export boxLeft2 = {
  rows: boxMap,
  name: "Box left 2.",
  mirrored: false,
  vert: 40,
  hor: 15,
  angle: 90,
  sectorPreference: 4,
};
export boxLeft3 = {
  rows: boxMap,
  name: "Box left 3.",
  mirrored: false,
  vert: 55,
  hor: 15,
  angle: 90,
  sectorPreference: 4,
};
export sideBalconyLeft = {
  rows: sideBalconyMap,
  name: "Balcony left",
  mirrored: true,
  vert: 75,
  hor: 20,
  angle: 45,
  offset: 1,
  sectorPreference: 3,
};
export boxRight1 = {
  rows: boxMap,
  name: "Box right 1.",
  mirrored: true,
  vert: 25,
  hor: 85,
  angle: -90,
  sectorPreference: 4,
};
export boxRight2 = {
  rows: boxMap,
  name: "Box right 2.",
  mirrored: true,
  vert: 40,
  hor: 85,
  angle: -90,
  sectorPreference: 4,
};
export boxRight3 = {
  rows: boxMap,
  name: "Box right 3.",
  mirrored: true,
  vert: 55,
  hor: 85,
  angle: -90,
  sectorPreference: 4,
};
export sideBalconyRight = {
  rows: sideBalconyMap,
  name: "Balcony right",
  mirrored: false,
  vert: 75,
  hor: 80,
  angle: -45,
  offset: 1,
  sectorPreference: 3,
};
export midBalcony = {
  rows: midBalconyMap,
  name: "Balcony mid.",
  mirrored: false,
  vert: 80,
  hor: 50,
  sectorPreference: 2,
};
export centralAuditorium = {
  rows: centralAuditoriumMap,
  name: "Auditorium",
  mirrored: false,
  vert: 45,
  hor: 50,
  sectorPreference: 1,
};
