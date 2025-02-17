const express = require('express');
const Image = require('../models/Image');
const upload = require('../utils/upload');
const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const newImage = new Image({
      imageUrl: file.path,
    });

    await newImage.save();
    res
      .status(201)
      .json({ message: 'Image uploaded successfully', image: newImage });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
