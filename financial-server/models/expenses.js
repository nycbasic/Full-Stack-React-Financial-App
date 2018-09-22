const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId
  //   },
  income: {
    type: [Number],
    required: true,
    default: 0
  },
  expenses: [
    {
      title: {
        type: String,
        default: "Fixed Expenses"
      },
      total: {
        type: [Number],
        required: true,
        default: 0
      },
      typeExpenses: [
        {
          name: {
            type: String,
            required: true
          },
          balance: {
            type: [Number],
            required: true,
            default: 0
          }
        }
      ]
    },
    {
      title: {
        type: String,
        default: "Variable Expenses"
      },
      total: {
        type: [Number],
        required: true,
        default: 0
      },
      typeExpenses: [
        {
          name: {
            type: String,
            required: true
          },
          balance: {
            type: [Number],
            required: true,
            default: 0
          }
        }
      ]
    },
    {
      title: {
        type: String,
        default: "Periodic Expenses"
      },
      total: {
        type: [Number],
        required: true,
        default: 0
      },
      typeExpenses: [
        {
          name: {
            type: String,
            required: true
          },
          balance: {
            type: [Number],
            required: true,
            default: 0
          }
        }
      ]
    }
  ]
});

const Expenses = mongoose.model("Expenses", expensesSchema);

module.exports = Expenses;
