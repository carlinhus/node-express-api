const router = require('express-promise-router')();

const {
  listPeople,
  newPerson,
  deletePerson
} = require("../controllers/PersonController");

router.get("/", listPeople);
router.post("/", newPerson);
router.delete("/:personId", deletePerson);

module.exports = router;
