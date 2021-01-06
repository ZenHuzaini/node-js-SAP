const app = require("./index");
const Animal = require("./controller/animal.controller");
const Status = require("./controller/status.controller");

const AnimalController = new Animal();
const StatusController = new Status();

function controllers() {
  app.get("/animals", AnimalController.getAnimals);
  app.get("/animal/:id", AnimalController.getAnimal);
  app.put("/animal/:id", AnimalController.updateAnimal);
  app.get("/status", StatusController.getRecentLearnStatus);
}

module.exports = { controllers };
