const app = require("./index");
const { controllers } = require("./controllers");

controllers();

app.listen(process.env.PORT, () => {
  console.log("listen to port ", process.env.PORT);
});
