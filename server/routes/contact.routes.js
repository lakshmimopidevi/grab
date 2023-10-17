import express from "express";
import {
  addContact,
  deleteAllContacts,
  getAllContacts,
} from "../controllers/contact.controller.js";

const contactRouter = express.Router();

contactRouter.route("/createContact").post(addContact);
contactRouter.route("/getContacts").get(getAllContacts);
contactRouter.route("/deleteContacts").delete(deleteAllContacts);

export default contactRouter;
