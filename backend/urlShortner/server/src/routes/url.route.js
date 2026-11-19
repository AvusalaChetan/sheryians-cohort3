import {Router} from "express";
import urlModel from "../models/url.model.js";
import {generateShortCode} from "../utils/genCode.js";

const router = Router();

router.post("/", async (req, res) => {
  const {url} = req.body;
  console.log(req.body);

  if (!url) {
    return res.status(400).json({error: "Original URL is required"});
  }

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return res.status(400).json({
      message: "plese enter url start with http , https",
    });
  }

  if (url.length > 2048)
    return res.status(400).json({
      message: "url should < 2048",
    });

  const shortCode = generateShortCode();

  const newUrl = await urlModel.create({
    orginalUrl: url,
    shortCode: shortCode,
  });

  res.status(201).json({
    message: "URL shortened successfully",
    data: {
      orginalUrl: newUrl.orginalUrl,
      shortCode: newUrl.shortCode,
    },
  });
});

router.get("/", async (req, res) => {
  const urls = await urlModel.find();
  if (!urls)
    return res.status(404).json({
      message: "no urls found crenat one ",
    });

  res.status(200).json({
    message: "all urls",
    urls,
  });
});

router.delete("/:id", async (req, res) => {
  const {id} = req.params;

  if (!id) return res.status(400).json({message: "no id found crenat one "});

  const url = await urlModel.findById(id);
  if (!url)
    return res.status(404).json({
      message: "no urls found crenat one ",
    });
  await urlModel.findOneAndDelete(id);
  return res.status(200).json({
    message: "url deleted successfully ",
  });
});

export default router;
