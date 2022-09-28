const router = require("express").Router();
//TODO: fill with thought controller modules
const {} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get().post();

// /api/courses/:thoughtsId
router.route("/:thoughtsId").get().put().delete();

// /api/courses/:thoughtsId/reactions
router.route("/:thoughtId/reactions").post();

///api/courses/:thoughtsId/reactions/:reactionId
router.route("/:thoughtsId/reactions/:reactionId").delete();

module.exports = router;
