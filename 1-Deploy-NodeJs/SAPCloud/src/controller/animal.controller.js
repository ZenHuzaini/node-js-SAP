module.exports = class AnimalController {
  constructor() {
    this.animals = [
      { id: 1, name: "bird" },
      { id: 2, name: "monkey" },
      { id: 3, name: "dragon" },
      { id: 4, name: "bear" },
      { id: 5, name: "inyongMarinyong inyong" },
    ];

    this.getAnimal = this.getAnimal.bind(this);
    this.getAnimals = this.getAnimals.bind(this);
  }

  getAnimal(req, res) {
    const animal = this.animals.find((animal) => {
      return animal.id == req.params.id;
    });

    return res.status(200).send(animal);
  }

  getAnimals(req, res) {
    console.log("get animal s", this.animals);
    return res.status(200).send(this.animals);
  }

  updateAnimal(req, res) {
    const id = req.params.id;
    if (!this.animals.findIndex(1)) {
      return res.status(200).send("Not found");
    }
    return res.status(200).send("update");
  }

  deleteAnimal(req, res) {}
};
