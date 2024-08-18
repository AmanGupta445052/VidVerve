// server/routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const { fetchFeaturedVideos, searchVideos, fetchVideosByTag } = require('../controllers/videoController');

router.post('/featured', fetchFeaturedVideos);
// router.get('/personalized', fetchPersonalizedVideos);
router.get('/tags/:tags', fetchVideosByTag);
// Route to search for videos (if needed, uncomment and implement)
router.get('/search', searchVideos);  // Ensure this route is added

module.exports = router;
