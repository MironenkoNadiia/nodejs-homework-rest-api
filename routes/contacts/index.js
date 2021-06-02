const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const {
  validCreateContact,
  validUpdateContact,
  validObjectId,
} = require("./valid-contact-router");

const guard=require('../../helper/guard')

router.get("/",guard, ctrl.getAll);
router.post("/",guard, validCreateContact, ctrl.create);

router.get("/:contactId",guard, validObjectId, ctrl.getById);
router.put("/:contactId",guard, validObjectId, validUpdateContact, ctrl.update);
router.delete("/:contactId",guard, validObjectId, ctrl.remove);

router.patch("/:contactId/favorite",guard, ctrl.updateStatus);

module.exports = router;
