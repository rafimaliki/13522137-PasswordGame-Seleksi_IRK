const express = require("express");
const cors = require("cors");
const { Storage } = require("@google-cloud/storage");
const app = express();
const port = 3000;

app.use(cors());

// google cloud storage
const storage = new Storage({
  projectId: "passwordgame-irk-137",
  // keyFilename: "./key.json",
  credentials: {
    type: "service_account",
    project_id: "passwordgame-irk-137",
    private_key_id: "922a48bb2bcc5252d26454946b987aa8a7a30fc9",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC8wRE1PJxaJRmc\n68XZ/vDBYi5NkJvvz0jeE5joBpqO/dnvUbs+aQoRp2kSfUz3HXaaQ7mv4NAR/Eu1\n70JLNL40gf+GcI1vvU99BCGZf0wfTCE9SAgJiEgY8kIN3Qvj//wxbXoR5B99rPm5\n8d/aUVeJQVsj224kmGusOmw1VcFjI8HazYp4alIBBa5RSpyMJhRD52JGRApIBQZd\na8vcVo035MRWDUqlE3ZCX28+TPScxiwTB1Yr3dO4NPNHbfIfx45s2osdB0hdEkrn\nTNdECY2I9vu7QTUu4WjZoiq1c0snaDp1gPGoR7eLnfA2ojhvXsyTwUJAxq0XS75V\nLN9RVv69AgMBAAECggEADiWqVIMmdNszAD/rpFsnUFc7gTTFe0PeAkcVvs4/51e/\nbeCCWDsnNguGJIyfqCXdLdLFqBkBf1eZlRlJrrlVSDo2HK1y7F0UCBq3KfoQiof6\nNc2gTJaaUMRXjxJyQbR+AnZiH9UpRxIf5X/rd0GBfhgX7KgVqUiDSXVXhufWhseW\nXFwM5lwGPjOYxcgFoTIBCXCgJk5canyw+CzcCuaB+xHsOgpz1bv8HmrxwKHoOY5U\nJecIe5HLF4ticQZbcjUylVniHG9MsA+aRk2X+N4Mq4yhuqvkHBgxoY6Rx7VMoXv+\n6JNKyMEWl7ySXlp5zYPLMY+HnV36S8BbxpNyhSnPQQKBgQDcYO2LA+4f8Su+8wAq\nI63Y4GR84/GtA3NXJYr20gawdPVy+dy6vXLiUwee/dzivLiji+YSU3jO19RfElBD\n8dZqxDNsBdA0i5vKFB94Dise2pcQ4SUBHXPcW1FXzyS2o0BOLhrtW60B+cEJbCLo\nOLKHCZ/lgU6FT8LWUqbHCOjpzwKBgQDbQ4wgrzmpm24AZBYm4PveO2YLYZDDX5zC\n+kjYziPUVylPEaBpiWickL80jCE5Tchw9XPnJj5QRcXKmLj3HTsaxTBSdjQZsE0a\nyMK5xCXbay4G0rq0EZ7dtIHZPlQw7nFImdZqPPnOIEpyUBT8aNStfrsmtSvfjxwc\nLsJ+ZqQNswKBgBxVcfUPmkwNC9zPDVRdpfpeT00nWWkvKmMn9ofpVObXAr+3lEOG\nHAExP6eXaBDWxr5wPDJa/QtLAIkAp8U0kKbFdv8KeExpLqx6jdk3qR+cZxPKfqF4\nEe9g5kJt5YB92MS0dM3TnZjFbaYyewJ0V6+48w/k4h2NtbUshzjL0nZNAoGAFQYp\nDYk/si+hIJB4P0obXHe9lSHJy7IDSf7NtVwuu1GQOHCsPPJcAYcvjk5RcTkwGwSu\nFF/qYbAPAxoZwjgfTrXRqFaFMGFjQ0o0wbM5Hgzs4OKb3GBEJ2YDfV0onXh/jEKT\n+KPYIBegi8159annmqsoLtH4XvtN6rXhGFWnLVkCgYBU9DguAEcFFNLhEYOIa4Lv\nheO+Y4KtX2WBUnoOFA4suzANv2NMMqBP2rJd/DagDW0oaE9+hS9qsnbJNRCgRfG3\neW8pKLoUmU5m7JUAy+uF8awrAX5akQJKD5ymnW/bw7shcP7DrM8xohtE/Z/ESZek\nos7RjKunDsCcn66EU3ahYg==\n-----END PRIVATE KEY-----\n",
    client_email:
      "seleksi-irk-137@passwordgame-irk-137.iam.gserviceaccount.com",
    client_id: "111481110475065229443",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/seleksi-irk-137%40passwordgame-irk-137.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
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
