export const EDIT_INCOME = "edit_income";

export function submitIncome(newIncome) {
  return {
    type: EDIT_INCOME,
    payload: newIncome
  };
}
