import { Router } from "express";
import { addExpenses, deleteExpense, getExpense, getExpenses, updateExpenses } from "../controllers/expense-controllers.js";

const expenseRouter = Router();
// define routes
expenseRouter.post("/expenses,", addExpenses)

expenseRouter.get("/expenses", getExpense)

expenseRouter.get("/expenses", getExpenses)

expenseRouter.delete("/expenses", deleteExpense)

expenseRouter.patch("/expenses", updateExpenses)


export default expenseRouter;