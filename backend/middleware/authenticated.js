import { isValid } from "zod";
import tokenValidator from "../services/tokenValidator.js";

export default function authenticated(req, res, next) {
    const {isValid, error} = tokenValidator(req.cookies.token)

    if(isValid){
        next();
    }else{
        return res.status(401).send({error});
    }
}
