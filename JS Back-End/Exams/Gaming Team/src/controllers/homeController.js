const { findGame, getAllGames } = require("../managers/gamesManager");
const { getErrorMessage } = require("../utils/errorHelpers");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("general/home");
});
router.get('/search', async (req, res) => {
  try {
    const games = await getAllGames().lean();
    res.render("general/search", { games });
  } catch (err) {
    res.render("general/search", { error: getErrorMessage(err) });
  }
});

router.post("/search", async (req, res) => {
  const { name, platform } = req.body;
  try {
    const games = await findGame(name, platform).lean();
    res.render("general/search", { games });
  } catch (err) {
    res.render("general/search", { error: getErrorMessage(err) });
  }
});

router.get("/404", (req, res) => {
  res.render("general/404");
});

module.exports = router;
