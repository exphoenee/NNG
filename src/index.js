import Auditorium from "./components/Auditorium/Auditorium.js";
import './stlye/style.scss'
import * from "./model/sectorConfigs/sectorConfigs.js";


//creating the auditorium object, form the sector configs - pleases see in the model directory
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

//let it render the UI of auditorium
auditorium.render("app");

//fill up with random occupation
auditorium.randomReservation(0.2);

//find solutions for other neighbourg seats
auditorium.reserve({ min: 2, max: 4 });
