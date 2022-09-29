const router = require("express").Router();
//TODO: fill with thought controller modules
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addThoughtReaction,
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
router.route("/:thoughtId/reactions").post(addThoughtReaction);

///api/thoughts/:thoughtsId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete();

module.exports = router;
