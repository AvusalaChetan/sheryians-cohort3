import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import urlRoutes from "../routes/url.route.js";
import urlModel from "../models/url.model.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/url", urlRoutes);

app.get("/:code", async (req, res) => {
  const {code} = req.params;
  console.log(code);
  if (!code) return res.status(404).json({message: "url code is not there"});

  const url = await urlModel.findOne({shortCode: code});
  
  console.log(url);
  if (!url) return res.status(404).json({message: "no url found"});

  res.redirect(302, url.orginalUrl);

  await urlModel.findOneAndUpdate(
    {shortCode: code},
    {
      $inc: {click: 1},
    },
  );
  res;
});

export default app;
