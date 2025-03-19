import Joi, { date } from "joi";

export const addExpenseValidator = Joi.object({
    nameOfExpense: Joi.string().required(),
    amount: Joi.string().required(),
    category:Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required,

});


// nameOfExpense: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     amount: { type: Number, required: true },
//     category: { type: String, required: true },
//     description: { type: String },
//     date: { type: Date, default: Date.now  }