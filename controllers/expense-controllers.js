import { ExpenseModel } from "../models/expense.js";


export const getExpenses = async(req, res) => {
    // console.log(req.body)
    // console.log
    const allExpenses = ExpenseModel(req.body)

    res.status(200).json({"expenses": allExpenses})
}

export const addExpenses = async (req, res) => {
    const expense = new ExpenseModel(req.body)

    const newExpense = await expense.save();
  res.send("expenses added");
};

export const getExpense = async (req, res) => {
    const anExpense = await ExpenseModel.findById(req.params.id)
  res.status(200).json({expense: oneExpense});
};


export const deleteExpense = async (req, res) => {
    const deletedExpense = await ExpenseModel.findByIdAndDelete(
        req.params.id, 
        req.body, 

        {new: true, runValidators: true}

    );
  res.json({delete: deleteExpense});
};

export const updateExpenses = async (req, res) => {
    const updateExpenses = await ExpenseModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}

    );
  res.json({ update: updateExpenses});
};
