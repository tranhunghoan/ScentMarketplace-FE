import * as controllers from "../controllers"
import  express from "express";
import verifyToken from "../middleware/verify_token";

const router = express.Router();


//Auth route
router.use(verifyToken)
router.get('/',controllers.getCurrent);

module.exports = router;