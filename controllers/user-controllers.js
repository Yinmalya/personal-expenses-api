import { ExpenseModel } from "../models/expense";
import { loginuserValidator, registerUserValidator } from "../validators/user-validators";

export const registerUser = async ( req, res, next) => {
    // validate user information
    const { error, value } = registerUserValidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }

    // check if user does not exist already
    const user = await ExpenseModel.findOne({
        $or: [{ username: value.username }, { email: value.email }],
      });
}