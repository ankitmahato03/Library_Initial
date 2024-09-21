import express from "express";
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/api/admin', adminRoute);
app.use('/api/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
