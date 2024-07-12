const express = require("express");
const cors = require("cors");
const { Storage } = require("@google-cloud/storage");
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Create a Google Cloud Storage client
const storage = new Storage({
  projectId: "passwordgame-irk-137",
  keyFilename: "./key.json", // Adjust path as necessary
});

// Helper function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to list a specified number of random images from a bucket
async function getRandomImagesFromBucket(bucketName, numberOfImages) {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();

    // Shuffle the files array to get random images
    const shuffledFiles = shuffleArray(files);

    // Select the first numberOfImages images
    const selectedFiles = shuffledFiles.slice(0, numberOfImages);

    // Create an array to store result objects
    const resultArray = [];

    // Populate the array with objects containing name and img
    for (const file of selectedFiles) {
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

async function getAllImagesFromBucket(bucketName) {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();

    // Create an array to store result objects
    const resultArray = [];

    // Populate the array with objects containing name and img
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

// Define routes
app.get("/", (req, res) => {
  res.send("Sui-chan wa kyou mo kawaii!");
});

// Route to get random images from a bucket
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

// rout to get all images from a bucket
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
