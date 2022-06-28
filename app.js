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

auditorium.randomReservation(0.2);
auditorium.optimize({ min: 2, max: 4 });
