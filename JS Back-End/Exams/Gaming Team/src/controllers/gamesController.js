const {
  getAllGames,
  createGame,
  getGameDetails,
  buyGame,
  updateGame,
  deleteGame,
} = require("../managers/gamesManager");
const { getErrorMessage } = require("../utils/errorHelpers");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
    
  try {
    const games = await getAllGames().lean();
    res.render("games/catalog", { games });
  } catch (err) {
    res.render("games/catalog", { error: getErrorMessage(err) });
  }
});

router.get("/create", (req, res) => {
  res.render("games/create");
});

router.post("/create", async (req, res) => {
  const gameData = {
    ...req.body,
    owner: req.user._id,
  };
  try {
    await createGame(gameData);
    res.redirect("/games/catalog");
  } catch (err) {
    res.render("games/create", { error: getErrorMessage(err) });
  }
});

router.get("/:id/details", async (req, res) => {
  const gameId = req.params.id;
  try {
    const game = await getGameDetails(gameId).lean();
    const isOwner = req.user?._id == game.owner;
    const alreadyBought = () => {
        if (req.user){
            let bought = false;
            for (const user of game.boughtBy) {
              if (req.user._id == user) {
                return (bought = true);
              }
            }
            return bought;
        } else {
            return false;
        }
    };
    const isGuest = !req.user;
    res.render("games/details", {
      game,
      isOwner,
      alreadyBought: alreadyBought(),
      isGuest,
    });
  } catch (err) {
    res.render("games/details", { error: err.message });
  }
});

router.get("/:id/buy", async (req, res) => {
  const gameId = req.params.id;
  const buyer = req.user?._id;
  try {
    await buyGame(gameId, buyer);
    res.redirect(`/games/${gameId}/details`);
  } catch (err) {
    res.render("games/details", { error: getErrorMessage(err) });
  }
});

router.get("/:id/edit", async (req, res) => {
  const gameId = req.params.id;
  try {
    const game = await getGameDetails(gameId).lean();
    res.render("games/edit", { game });
  } catch (err) {
    res.render("games/details", { error: getErrorMessage(err) });
  }
});

router.post("/:id/edit", async (req, res) => {
  const gameId = req.params.id;
  const gameData = req.body;
  console.log(gameData)
  try {
    await updateGame(gameId, gameData);
    res.redirect(`/games/${gameId}/details`);
  } catch (err) {
    res.render("games/details", { error: getErrorMessage(err) });
  }
});

router.get("/:id/delete", async (req, res) => {
  const gameId = req.params.id;

  try {
    await deleteGame(gameId);
    res.redirect("/games/catalog");
  } catch (err) {
    res.render("games/details", { error: getErrorMessage(err) });
  }
});

module.exports = router;
