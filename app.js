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

const allSeats = auditorium.getAllSeats();
const seatNr = allSeats.length;
const reserved = Math.ceil(seatNr * 0.2);

do {
  allSeats[Math.round(Math.random() * (seatNr - 1))].setOccupied("Random");
} while (auditorium.getOccupiedSeats().length <= reserved);
