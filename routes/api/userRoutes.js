const router = require("express").Router();
//TODO: fill with thought controller modules
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).put().delete();

// /api/users/:userId/friends
router.route("/:userId/friends").post();

///api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete();

module.exports = router;
