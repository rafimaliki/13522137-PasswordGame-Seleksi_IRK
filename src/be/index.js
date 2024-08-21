const express = require("express");
const cors = require("cors");
const { Storage } = require("@google-cloud/storage");
const app = express();
const port = 3000;

app.use(cors());
require("dotenv").config();

// google cloud storage
const storage = new Storage({
  projectId: "passwordgame-irk-137",
  credentials: {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key,
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
    universe_domain: process.env.universe_domain,
  },
});

// function: shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// function: get random image from bucket
async function getRandomImagesFromBucket(bucketName, numberOfImages) {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();

    const shuffledFiles = shuffleArray(files);
    const selectedFiles = shuffledFiles.slice(0, numberOfImages);

    const resultArray = [];

    for (const file of selectedFiles) {
      const [buffer] = await file.download();
      const base64String = buffer.toString("base64");
      const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");
      resultArray.push({ name: fileNameWithoutExtension, img: base64String });
    }

    return resultArray;
  } catch (err) {
    console.error("Error retrieving random images from bucket:", err);
    return [];
  }
}

// function: get all images from bucket
async function getAllImagesFromBucket(bucketName) {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();

    const resultArray = [];

    for (const file of files) {
      const [buffer] = await file.download();
      const base64String = buffer.toString("base64");
      const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, ""); // Remove file extension
      resultArray.push({ name: fileNameWithoutExtension, img: base64String });
    }

    return resultArray;
  } catch (err) {
    console.error("Error retrieving random images from bucket:", err);
    return [];
  }
}

// routes:

app.get("/", (req, res) => {
  res.send("Sui-chan wa kyou mo kawaii!");
});

app.get("/images", async (req, res) => {
  const bucketName = req.query.bucketName;
  const numberOfImages = parseInt(req.query.numberOfImages, 10);

  if (!bucketName || isNaN(numberOfImages)) {
    return res.status(400).send("Invalid query parameters");
  }

  try {
    const images = await getRandomImagesFromBucket(bucketName, numberOfImages);
    res.json(images);
  } catch (err) {
    res.status(500).send("Error retrieving images");
  }
});

app.get("/allimages", async (req, res) => {
  const bucketName = req.query.bucketName;

  if (!bucketName) {
    return res.status(400).send("Invalid query parameters");
  }

  try {
    const images = await getAllImagesFromBucket(bucketName);
    res.json(images);
  } catch (err) {
    res.status(500).send("Error retrieving images");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
