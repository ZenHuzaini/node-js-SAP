module.exports = (srv) => {
  const { Shelther } = cds.entities("petShelter");
  srv.before("CREATE", "SheltherBooking", async (req) => {
    const book = req.data;
    if (!book.animal_ID) {
      return req.error(400, "book at least 1 place for animal");
    }

    const transaction = cds.transaction(req);
    const affectedRows = await transaction.run(
      UPDATE(Shelther)
        .set({ availableCapacity: { "-=": 1 } })
        .where({ ID: 1 })
    );

    if (affectedRows === 0) {
      return req.error(409, "sould out sorry!");
    }
  });
};
