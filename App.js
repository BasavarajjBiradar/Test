const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/user", require("./routs/User"));
app.use("/product", require("./routs/Product"));

app.get("/", (req, res) => {
  res.send("ecomapp api");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
