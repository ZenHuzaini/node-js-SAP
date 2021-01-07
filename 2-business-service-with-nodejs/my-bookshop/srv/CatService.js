module.exports = (srv) => {
  srv.on("READ", "Books", () => {
    return [
      {
        ID: 201,
        title: "Wuthering Heights",
        author_ID: 101,
        stock: 12,
        language: 8700, //"AR",
      },
      {
        ID: 251,
        title: "The Raven",
        author_ID: 150,
        stock: 333,
        language: "FR",
      },
      {
        ID: 252,
        title: "Eleonora",
        author_ID: 150,
        stock: 555,
        language: "PL",
      },
      {
        ID: 271,
        title: "Catweazle",
        author_ID: 170,
        stock: 222,
        language: "UK",
      },
    ];
  });

  // Reply mock data for Authors...
  srv.on("READ", "Authors", () => [
    { ID: 101, name: "Emily Brontë" },
    { ID: 150, name: "Edgar Allen Poe" },
    { ID: 170, name: "Richard Carpenter" },
  ]);
};
