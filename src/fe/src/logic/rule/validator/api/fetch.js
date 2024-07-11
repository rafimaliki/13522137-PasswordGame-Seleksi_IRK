import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: "passwordgame-irk-137",
  keyFilename: "./key.json", // Adjust path as necessary
});

// Function to list a specified number of random images from a bucket
async function getRandomImagesFromBucket(bucketName, numberOfImages) {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();

    // Shuffle the files array to get random images
    const shuffledFiles = shuffleArray(files);

    // Select the first numberOfImages images
    const selectedFiles = shuffledFiles.slice(0, numberOfImages);

    // Create a dictionary to store results
    const resultDict = {};

    // Populate the dictionary with file names as keys
    selectedFiles.forEach((file) => {
      resultDict[file.name] = file;
    });

    return resultDict;
  } catch (err) {
    console.error("Error retrieving random images from bucket:", err);
    return {};
  }
}

// Helper function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default getRandomImagesFromBucket;

// // Example usage:
// const bucketName = "bendera";
// const numberOfImages = 5; // Number of random images to retrieve

// getRandomImagesFromBucket(bucketName, numberOfImages)
//   .then((resultDict) => {
//     console.log("Random Images:", resultDict);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });
