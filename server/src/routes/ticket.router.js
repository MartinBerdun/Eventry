import { Router } from "express"
import { createTicketController, getController, getSingleTicketController, sendTicketEmailController } from "../controllers/tickets.controller.js";
import { createTicketValidate } from "../helpers/validators/tickets/create.validator.js";
import { getTicketValidate } from "../helpers/validators/tickets/get.validator.js";
import { getSingleTicketValidate } from "../helpers/validators/tickets/single.validator.js";
import { emailTicketValidate } from "../helpers/validators/tickets/email.validator.js";

const router = Router();

// Get single tocket by it's id and it's user id
// params: userid  (ObjectId string)
// params: reference   (UUID string)
router.get('/:userid/:reference', getSingleTicketValidate, getSingleTicketController);

// Get all tickets by it's user id
// params: userid  (ObjectId string)
router.get('/:userid', getTicketValidate, getController); 

// Get ticket email by it's user id and it's ticket id
// params: userid (ObjectId string)
// params: reference (UUID string)
router.get('/email/:userid/:reference', emailTicketValidate, sendTicketEmailController);

// Create new ticket by user id
// params: userid  (ObjectId string)
// query: ?event=   (String)
// query: &purchase=true (boolean)
router.post('/:userid', createTicketValidate, createTicketController);

export default router;
