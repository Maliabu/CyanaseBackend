export const mutations = {
  LOGIN_USER(state, payload) {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  },
  IS_LOADING(state, payload) {
    state.isLoading = payload;
  },
  LOGIN_ERROR(state, payload) {
    state.loginError = payload;
    state.isLoggedIn = false;
  },
  LOGOUT(state) {
    state.isLoggedIn = false;
    state.token = "";
  },
  SIGNUP_STATUS(state, payload) {
    state.isSignedUp = payload;
  },
  SIGNUP_LOADING(state, payload) {
    state.signupLoading = payload;
  },
  SIGNUP_ERROR(state, payload) {
    state.signUpError = payload;
  },
  FETCH_USERS(state, payload) {
    state.users = payload;
  },
  FETCH_USERS_LOADING(state, payload) {
    state.usersLoading = payload;
  },
  FETCH_USERS_ERROR(state, payload) {
    state.fetchUsersError = payload;
  },
  UPDATE_USER_STATUS(state, payload) {
    state.updateUserStatus = payload;
  },
  UPDATE_USER_LOADING(state, payload) {
    state.updateUserLoading = payload;
  },
  UPDATE_USER_ERROR(state, payload) {
    state.updateUserError = payload;
  },
  DELETE_USER_STATUS(state, payload) {
    state.deleteUserStatus = payload;
  },
  DELETE_USER_LOADING(state, payload) {
    state.deleteUserLoading = payload;
  },
  DELETE_USER_ERROR(state, payload) {
    state.deleteUserError = payload;
  },
  POST_MEMBER_STATUS(state, payload) {
    state.postMemberStatus = payload;
  },
  POST_MEMBER_LOADING(state, payload) {
    state.postMemberLoading = payload;
  },
  POST_MEMBER_ERROR(state, payload) {
    state.postMemberError = payload;
  },
  FETCH_MEMBERS(state, payload) {
    state.members = payload;
  },
  FETCH_MEMBERS_LOADING(state, payload) {
    state.membersLoading = payload;
  },
  FETCH_MEMBERS_ERROR(state, payload) {
    state.fetchMembersError = payload;
  },
  UPDATE_MEMBER_STATUS(state, payload) {
    state.updateMemberStatus = payload;
  },
  UPDATE_MEMBER_LOADING(state, payload) {
    state.updateMemberLoading = payload;
  },
  UPDATE_MEMBER_ERROR(state, payload) {
    state.updateMemberError = payload;
  },
  DELETE_MEMBER_STATUS(state, payload) {
    state.deleteMemberStatus = payload;
  },
  DELETE_MEMBER_LOADING(state, payload) {
    state.deleteMemberLoading = payload;
  },
  DELETE_MEMBER_ERROR(state, payload) {
    state.deleteMemberError = payload;
  },
  POST_SAVING_STATUS(state, payload) {
    state.postSavingStatus = payload;
  },
  POST_SAVING_LOADING(state, payload) {
    state.postSavingLoading = payload;
  },
  POST_SAVING_ERROR(state, payload) {
    state.postSavingError = payload;
  },
  FETCH_SAVINGS(state, payload) {
    state.savings = payload;
  },
  FETCH_SAVINGS_LOADING(state, payload) {
    state.savingsLoading = payload;
  },
  FETCH_SAVINGS_ERROR(state, payload) {
    state.fetchSavingsError = payload;
  },
  UPDATE_SAVING_STATUS(state, payload) {
    state.updateSavingStatus = payload;
  },
  UPDATE_SAVING_LOADING(state, payload) {
    state.updateSavingLoading = payload;
  },
  UPDATE_SAVING_ERROR(state, payload) {
    state.updateSavingError = payload;
  },
  DELETE_SAVING_STATUS(state, payload) {
    state.deleteSavingStatus = payload;
  },
  DELETE_SAVING_LOADING(state, payload) {
    state.deleteSavingLoading = payload;
  },
  DELETE_SAVING_ERROR(state, payload) {
    state.deleteSavingError = payload;
  },
  POST_LOAN_STATUS(state, payload) {
    state.postLoanStatus = payload;
  },
  POST_LOAN_LOADING(state, payload) {
    state.postLoanLoading = payload;
  },
  POST_LOAN_ERROR(state, payload) {
    state.postLoanError = payload;
  },
  FETCH_LOANS(state, payload) {
    state.loans = payload;
  },
  FETCH_LOANS_LOADING(state, payload) {
    state.loansLoading = payload;
  },
  FETCH_LOANS_ERROR(state, payload) {
    state.fetchLoansError = payload;
  },
  UPDATE_LOAN_STATUS(state, payload) {
    state.updateLoanStatus = payload;
  },
  UPDATE_LOAN_LOADING(state, payload) {
    state.updateLoanLoading = payload;
  },
  UPDATE_LOAN_ERROR(state, payload) {
    state.updateLoanError = payload;
  },
  DELETE_LOAN_STATUS(state, payload) {
    state.deleteLoanStatus = payload;
  },
  DELETE_LOAN_LOADING(state, payload) {
    state.deleteLoanLoading = payload;
  },
  DELETE_LOAN_ERROR(state, payload) {
    state.deleteLoanError = payload;
  },
  POST_EXPENSE_STATUS(state, payload) {
    state.postExpenseStatus = payload;
  },
  POST_EXPENSE_LOADING(state, payload) {
    state.postExpenseLoading = payload;
  },
  POST_EXPENSE_ERROR(state, payload) {
    state.postExpenseError = payload;
  },
  FETCH_EXPENSES(state, payload) {
    state.expenses = payload;
  },
  FETCH_EXPENSES_LOADING(state, payload) {
    state.expensesLoading = payload;
  },
  FETCH_EXPENSES_ERROR(state, payload) {
    state.fetchExpensesError = payload;
  },
  UPDATE_EXPENSE_STATUS(state, payload) {
    state.updateExpenseStatus = payload;
  },
  UPDATE_EXPENSE_LOADING(state, payload) {
    state.updateExpenseLoading = payload;
  },
  UPDATE_EXPENSE_ERROR(state, payload) {
    state.updateExpenseError = payload;
  },
  DELETE_EXPENSE_STATUS(state, payload) {
    state.deleteExpenseStatus = payload;
  },
  DELETE_EXPENSE_LOADING(state, payload) {
    state.deleteExpenseLoading = payload;
  },
  DELETE_EXPENSE_ERROR(state, payload) {
    state.deleteExpenseError = payload;
  },
  FETCH_EMPLOYEE_COUNT(state, payload) {
    state.employees_count = payload;
  },
  FETCH_EMPLOYEE_COUNT_LOADING(state, payload) {
    state.employees_countLoading = payload;
  },
  FETCH_EMPLOYEE_COUNT_ERROR(state, payload) {
    state.fetchEmployees_countError = payload;
  },
  FETCH_SAVINGS_COUNT(state, payload) {
    state.savings_count = payload;
  },
  FETCH_SAVINGS_COUNT_LOADING(state, payload) {
    state.savings_countLoading = payload;
  },
  FETCH_SAVINGS_COUNT_ERROR(state, payload) {
    state.fetchSavings_countError = payload;
  },
  FETCH_MEMBERS_COUNT(state, payload) {
    state.members_count = payload;
  },
  FETCH_MEMBERS_COUNT_LOADING(state, payload) {
    state.members_countLoading = payload;
  },
  FETCH_MEMBERS_COUNT_ERROR(state, payload) {
    state.fetchMembers_countError = payload;
  },
  FETCH_LOANS_COUNT(state, payload) {
    state.loans_count = payload;
  },
  FETCH_LOANS_COUNT_LOADING(state, payload) {
    state.loans_countLoading = payload;
  },
  FETCH_LOANS_COUNT_ERROR(state, payload) {
    state.fetchLoans_countError = payload;
  },
  FETCH_SAVINGS_TREND(state, payload) {
    state.savings_trend = payload;
  },
  FETCH_SAVINGS_TREND_LOADING(state, payload) {
    state.savings_trendLoading = payload;
  },
  FETCH_SAVINGS_TREND_ERROR(state, payload) {
    state.fetchSavings_trendError = payload;
  },
  DEBIT_SAVING_STATUS(state, payload) {
    state.debitSavingStatus = payload;
  },
  DEBIT_SAVING_LOADING(state, payload) {
    state.debitSavingLoading = payload;
  },
  DEBIT_SAVING_ERROR(state, payload) {
    state.debitSavingError = payload;
  },
  PAY_LOAN_STATUS(state, payload) {
    state.payLoanStatus = payload;
  },
  PAY_LOAN_LOADING(state, payload) {
    state.payLoanLoading = payload;
  },
  PAY_LOAN_ERROR(state, payload) {
    state.payLoanError = payload;
  },
  POST_TRANSACTION_STATUS(state, payload) {
    state.postTransactionStatus = payload;
  },
  POST_TRANSACTION_LOADING(state, payload) {
    state.postTransactionLoading = payload;
  },
  POST_TRANSACTION_ERROR(state, payload) {
    state.postTransactionError = payload;
  },
  FETCH_TRANSACTIONS(state, payload) {
    state.transactions = payload;
  },
  FETCH_TRANSACTIONS_LOADING(state, payload) {
    state.transactionsLoading = payload;
  },
  FETCH_TRANSACTIONS_ERROR(state, payload) {
    state.fetchTransactionsError = payload;
  },
  FETCH_INVESTMENTS_COUNT(state, payload) {
    state.investments_count = payload;
  },
  FETCH_INVESTMENTS_COUNT_LOADING(state, payload) {
    state.investments_countLoading = payload;
  },
  FETCH_INVESTMENTS_COUNT_ERROR(state, payload) {
    state.fetchInvestments_countError = payload;
  },
  FETCH_FIXED_COUNT(state, payload) {
    state.fixed_count = payload;
  },
  FETCH_FIXED_COUNT_LOADING(state, payload) {
    state.fixed_countLoading = payload;
  },
  FETCH_FIXED_COUNT_ERROR(state, payload) {
    state.fetchFixed_countError = payload;
  },
  FETCH_ORDINARY_COUNT(state, payload) {
    state.ordinary_count = payload;
  },
  FETCH_ORDINARY_COUNT_LOADING(state, payload) {
    state.ordinary_countLoading = payload;
  },
  FETCH_ORDINARY_COUNT_ERROR(state, payload) {
    state.fetchOrdinary_countError = payload;
  }
};
