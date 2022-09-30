const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtsId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtsId/reactions
router
  .route("/:thoughtId/reactions")
  .post(addThoughtReaction)
  .delete(removeThoughtReaction);

module.exports = router;
