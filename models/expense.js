import express from "express"
import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const expenseSchema = new mongoose.Schema({
    nameOfExpense: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
    date: { type: Date, default: Date.now  }
  });
  
  export const ExpenseModel = model ("Expense", expenseSchema);