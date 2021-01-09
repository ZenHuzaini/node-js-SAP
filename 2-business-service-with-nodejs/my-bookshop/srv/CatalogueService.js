//if you have data in CSV, so you dont needdd to useeeeeee this
// module.exports = (srv) => {
//   srv.on("READ", "Books", () => {
//     return [
//       {
//         ID: 201,
//         title: "Wuthering Heights",
//         author_ID: 101,
//         stock: 12,
//         language: 8700, //"AR",
//       },
//       {
//         ID: 251,
//         title: "The Raven",
//         author_ID: 150,
//         stock: 333,
//         language: "FR",
//       },
//       {
//         ID: 252,
//         title: "Eleonora",
//         author_ID: 150,
//         stock: 555,
//         language: "PL",
//       },
//       {
//         ID: 271,
//         title: "Catweazle",
//         author_ID: 170,
//         stock: 222,
//         language: "UK",
//       },
//     ];
//   });

//   // Reply mock data for Authors...
//   srv.on("READ", "Authors", () => [
//     { ID: 101, name: "Emily Brontë" },
//     { ID: 150, name: "Edgar Allen Poe" },
//     { ID: 170, name: "Richard Carpenter" },
//   ]);
// };

//add custom logicss

module.exports = (srv) => {
  const { Books } = cds.entities("my.bookshop");

  srv.before("CREATE", "Orders", async (req) => {
    const order = req.data;
    if (!order.amount || order.amount <= 0) {
      return req.error(400, "Order at least 1 book");
    }

    const transaction = cds.transaction(req);
    const affectedRows = await transaction.run(
      UPDATE(Books)
        .set({ stock: { "-=": order.amount } })
        .where({ stock: { ">=": order.amount }, /*and*/ ID: order.book_id })
    );

    if (affectedRows === 0) {
      return req.error(409, "sould out sorry!");
    }

    //add some discount for overstocked books
    srv.after("READ", "Books", async (each) => {
      console.log("something , ", each);
      if (each.stock > 10) {
        each.title += " -- 11% discount";
        each.price -= 11;
        console.log("something in heree , ", each);
      }
    });
  });
};
