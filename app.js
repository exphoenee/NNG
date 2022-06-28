const auditorium = new Auditorium([
  centralAuditorium,
  midBalcony,
  sideBalconyLeft,
  sideBalconyRight,
  boxLeft1,
  boxLeft2,
  boxLeft3,
  boxRight1,
  boxRight2,
  boxRight3,
]);
auditorium.render("app");
let occ = auditorium.getOccupied();
let free = auditorium.getFreeSeats();
let all = auditorium.getAllSeats();
console.log(occ, free, all);
getAllSeats.forEach((seat)=>{seat.})