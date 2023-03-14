import axiosInstance from "./axios_setup";
import axios from "axios";

export const actions = {
  async login({ commit }, data) {
    commit("IS_LOADING", true);
    await axiosInstance
      .post("/login", data)
      .then(res => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        const user = res.data.user;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        commit("LOGIN_USER", {
          user,
          token
        });
        commit("IS_LOADING", false);
      })
      .catch(err => {
        commit("LOGIN_ERROR", err.response);
        commit("IS_LOADING", false);
      });
  },
  async signUp({ commit }, data) {
    commit("SIGNUP_LOADING", true);
    await axiosInstance
      .post("/signup", data)
      .then(res => {
        console.log(res);
        commit("SIGNUP_STATUS", true);
        commit("SIGNUP_LOADING", false);
      })
      .catch(err => {
        commit("SIGNUP_LOADING", false);
        commit("SIGNUP_STATUS", false);
        commit("SIGNUP_ERROR", err.response);
      });
  },
  logout({ commit }) {
    return new Promise(resolve => {
      commit("LOGOUT");
      localStorage.removeItem("token");
      window.localStorage.clear();
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  },
  async fetchUsers({ commit }) {
    commit("FETCH_USERS_LOADING", true);
    await axiosInstance
      .get("/agents")
      .then(res => {
        console.log(res);
        commit("FETCH_USERS", res.data.agents);
        commit("FETCH_USERS_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_USERS_LOADING", false);
        commit("FETCH_USERS_ERROR", err.response);
      });
  },
  async updateUser({ commit }, payload) {
    commit("UPDATE_USER_LOADING", true);
    await axiosInstance
      .put("/users/" + payload.id, payload.data)
      .then(res => {
        console.log(res);
        commit("UPDATE_USER_STATUS", true);
        commit("UPDATE_USER_LOADING", false);
      })
      .catch(err => {
        commit("UPDATE_USER_LOADING", false);
        commit("UPDATE_USER_STATUS", false);
        commit("UPDATE_USER_ERROR", err.response);
      });
  },
  async deleteUser({ commit }, payload) {
    commit("DELETE_USER_LOADING", true);
    await axiosInstance
      .delete("/users/" + payload)
      .then(res => {
        console.log(res);
        commit("DELETE_USER_STATUS", true);
        commit("DELETE_USER_LOADING", false);
      })
      .catch(err => {
        commit("DELETE_USER_LOADING", false);
        commit("DELETE_USER_STATUS", false);
        commit("DELETE_USER_ERROR", err.response);
      });
  },
  async postMember({ commit }, data) {
    commit("POST_MEMBER_LOADING", true);
    await axiosInstance
      .post("/members", data)
      .then(res => {
        console.log(res);
        commit("POST_MEMBER_STATUS", true);
        commit("POST_MEMBER_LOADING", false);
      })
      .catch(err => {
        commit("POST_MEMBER_LOADING", false);
        commit("POST_MEMBER_STATUS", false);
        commit("POST_MEMBER_ERROR", err.response);
      });
  },
  async fetchMembers({ commit }) {
    commit("FETCH_MEMBERS_LOADING", true);
    await axiosInstance
      .get("/members")
      .then(res => {
        console.log(res);
        commit("FETCH_MEMBERS", res.data.members);
        commit("FETCH_MEMBERS_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_MEMBERS_LOADING", false);
        commit("FETCH_MEMBERS_ERROR", err.response);
      });
  },
  async updateMember({ commit }, payload) {
    commit("UPDATE_MEMBER_LOADING", true);
    await axiosInstance
      .put("/members/" + payload.id, payload.data)
      .then(res => {
        console.log(res);
        commit("UPDATE_MEMBER_STATUS", true);
        commit("UPDATE_MEMBER_LOADING", false);
      })
      .catch(err => {
        commit("UPDATE_MEMBER_LOADING", false);
        commit("UPDATE_MEMBER_STATUS", false);
        commit("UPDATE_MEMBER_ERROR", err.response);
      });
  },
  async deleteMember({ commit }, payload) {
    commit("DELETE_MEMBER_LOADING", true);
    await axiosInstance
      .delete("/members/" + payload.id, payload.data)
      .then(res => {
        console.log(res);
        commit("DELETE_MEMBER_STATUS", true);
        commit("DELETE_MEMBER_LOADING", false);
      })
      .catch(err => {
        commit("DELETE_MEMBER_LOADING", false);
        commit("DELETE_MEMBER_STATUS", false);
        commit("DELETE_MEMBER_ERROR", err.response);
      });
  },
  async postSavings({ commit }, data) {
    commit("POST_SAVING_LOADING", true);
    await axiosInstance
      .post("/savings", data)
      .then(res => {
        console.log(res);
        commit("POST_SAVING_STATUS", true);
        commit("POST_SAVING_LOADING", false);
      })
      .catch(err => {
        commit("POST_SAVING_LOADING", false);
        commit("POST_SAVING_STATUS", false);
        commit("POST_SAVING_ERROR", err.response);
      });
  },
  async debitSavings({ commit }, data) {
    commit("DEBIT_SAVING_LOADING", true);
    await axiosInstance
      .post("/debitSaving", data)
      .then(res => {
        console.log(res);
        commit("DEBIT_SAVING_STATUS", true);
        commit("DEBIT_SAVING_LOADING", false);
      })
      .catch(err => {
        commit("DEBIT_SAVING_LOADING", false);
        commit("DEBIT_SAVING_STATUS", false);
        commit("DEBIT_SAVING_ERROR", err.response);
      });
  },
  async fetchSavings({ commit }) {
    commit("FETCH_SAVINGS_LOADING", true);
    await axiosInstance
      .get("/savings")
      .then(res => {
        console.log(res);
        commit("FETCH_SAVINGS", res.data.savings);
        commit("FETCH_SAVINGS_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_SAVINGS_LOADING", false);
        commit("FETCH_SAVINGS_ERROR", err.response);
      });
  },
  async updateSaving({ commit }, payload) {
    commit("UPDATE_SAVING_LOADING", true);
    await axiosInstance
      .put("/savings/" + payload.id, payload)
      .then(res => {
        console.log(res);
        commit("UPDATE_SAVING_STATUS", true);
        commit("UPDATE_SAVING_LOADING", false);
      })
      .catch(err => {
        commit("UPDATE_SAVING_LOADING", false);
        commit("UPDATE_SAVING_STATUS", false);
        commit("UPDATE_SAVING_ERROR", err.response);
      });
  },
  async deleteSaving({ commit }, payload) {
    commit("DELETE_SAVING_LOADING", true);
    await axiosInstance
      .delete("/savings/" + payload)
      .then(res => {
        console.log(res);
        commit("DELETE_SAVING_STATUS", true);
        commit("DELETE_SAVING_LOADING", false);
      })
      .catch(err => {
        commit("DELETE_SAVING_LOADING", false);
        commit("DELETE_SAVING_STATUS", false);
        commit("DELETE_SAVING_ERROR", err.response);
      });
  },
  async postLoan({ commit }, data) {
    commit("POST_LOAN_LOADING", true);
    await axiosInstance
      .post("/loans", data)
      .then(res => {
        console.log(res);
        commit("POST_LOAN_STATUS", true);
        commit("POST_LOAN_LOADING", false);
      })
      .catch(err => {
        commit("POST_LOAN_LOADING", false);
        commit("POST_LOAN_STATUS", false);
        commit("POST_LOAN_ERROR", err.response);
      });
  },
  async fetchLoans({ commit }) {
    commit("FETCH_LOANS_LOADING", true);
    await axiosInstance
      .get("/loans")
      .then(res => {
        console.log(res);
        commit("FETCH_LOANS", res.data.loans);
        commit("FETCH_LOANS_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_LOANS_LOADING", false);
        commit("FETCH_LOANS_ERROR", err.response);
      });
  },
  async updateLoan({ commit }, payload) {
    commit("UPDATE_LOAN_LOADING", true);
    await axiosInstance
      .put("/loans/" + payload.id, payload)
      .then(res => {
        console.log(res);
        commit("UPDATE_LOAN_STATUS", true);
        commit("UPDATE_LOAN_LOADING", false);
      })
      .catch(err => {
        commit("UPDATE_LOAN_LOADING", false);
        commit("UPDATE_LOAN_STATUS", false);
        commit("UPDATE_LOAN_ERROR", err.response);
      });
  },
  async deleteLoan({ commit }, payload) {
    commit("DELETE_LOAN_LOADING", true);
    await axiosInstance
      .delete("/loans/" + payload)
      .then(res => {
        console.log(res);
        commit("DELETE_LOAN_STATUS", true);
        commit("DELETE_LOAN_LOADING", false);
      })
      .catch(err => {
        commit("DELETE_LOAN_LOADING", false);
        commit("DELETE_LOAN_STATUS", false);
        commit("DELETE_LOAN_ERROR", err.response);
      });
  },
  async postExpense({ commit }, data) {
    commit("POST_EXPENSE_LOADING", true);
    await axiosInstance
      .post("/expenses", data)
      .then(res => {
        console.log(res);
        commit("POST_EXPENSE_STATUS", true);
        commit("POST_EXPENSE_LOADING", false);
      })
      .catch(err => {
        commit("POST_EXPENSE_LOADING", false);
        commit("POST_EXPENSE_STATUS", false);
        commit("POST_EXPENSE_ERROR", err.response);
      });
  },
  async fetchExpenses({ commit }) {
    commit("FETCH_EXPENSES_LOADING", true);
    await axiosInstance
      .get("/expenses")
      .then(res => {
        console.log(res);
        commit("FETCH_EXPENSES", res.data.expenses);
        commit("FETCH_EXPENSES_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_EXPENSES_LOADING", false);
        commit("FETCH_EXPENSES_ERROR", err.response);
      });
  },
  async updateExpense({ commit }, payload) {
    commit("UPDATE_EXPENSE_LOADING", true);
    await axiosInstance
      .put("/expenses/" + payload.id, payload)
      .then(res => {
        console.log(res);
        commit("UPDATE_EXPENSE_STATUS", true);
        commit("UPDATE_EXPENSE_LOADING", false);
      })
      .catch(err => {
        commit("UPDATE_EXPENSE_LOADING", false);
        commit("UPDATE_EXPENSE_STATUS", false);
        commit("UPDATE_EXPENSE_ERROR", err.response);
      });
  },
  async deleteExpense({ commit }, payload) {
    commit("DELETE_EXPENSE_LOADING", true);
    await axiosInstance
      .delete("/expenses/" + payload)
      .then(res => {
        console.log(res);
        commit("DELETE_EXPENSE_STATUS", true);
        commit("DELETE_EXPENSE_LOADING", false);
      })
      .catch(err => {
        commit("DELETE_EXPENSE_LOADING", false);
        commit("DELETE_EXPENSE_STATUS", false);
        commit("DELETE_EXPENSE_ERROR", err.response);
      });
  },
  async fetchEmployeesCount({ commit }) {
    commit("FETCH_EMPLOYEE_COUNT_LOADING", true);
    await axiosInstance
      .get("/employees_count")
      .then(res => {
        console.log(res);
        commit("FETCH_EMPLOYEE_COUNT", res.data.employees_count);
        commit("FETCH_EMPLOYEE_COUNT_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_EMPLOYEE_COUNT_LOADING", false);
        commit("FETCH_EMPLOYEE_COUNT_ERROR", err.response);
      });
  },
  async fetchSavingsCount({ commit }) {
    commit("FETCH_SAVINGS_COUNT_LOADING", true);
    await axiosInstance
      .get("/savings_count")
      .then(res => {
        console.log(res);
        commit("FETCH_SAVINGS_COUNT", res.data.savings_count);
        commit("FETCH_SAVINGS_COUNT_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_SAVINGS_COUNT_LOADING", false);
        commit("FETCH_SAVINGS_COUNT_ERROR", err.response);
      });
  },
  async fetchMembersCount({ commit }) {
    commit("FETCH_MEMBERS_COUNT_LOADING", true);
    await axiosInstance
      .get("/members_count")
      .then(res => {
        console.log(res);
        commit("FETCH_MEMBERS_COUNT", res.data.members_count);
        commit("FETCH_MEMBERS_COUNT_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_MEMBERS_COUNT_LOADING", false);
        commit("FETCH_MEMBERS_COUNT_ERROR", err.response);
      });
  },
  async fetchLoansCount({ commit }) {
    commit("FETCH_LOANS_COUNT_LOADING", true);
    await axiosInstance
      .get("/loans_count")
      .then(res => {
        console.log(res);
        commit("FETCH_LOANS_COUNT", res.data.loans_count);
        commit("FETCH_LOANS_COUNT_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_LOANS_COUNT_LOADING", false);
        commit("FETCH_LOANS_COUNT_ERROR", err.response);
      });
  },
  async fetchSavingsTrend({ commit }) {
    commit("FETCH_SAVINGS_TREND_LOADING", true);
    await axiosInstance
      .get("/savings_trend")
      .then(res => {
        console.log(res);
        commit("FETCH_SAVINGS_TREND", res.data.savings_trend);
        commit("FETCH_SAVINGS_TREND_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_SAVINGS_TREND_LOADING", false);
        commit("FETCH_SAVINGS_TREND_ERROR", err.response);
      });
  },
  async payLoan({ commit }, data) {
    commit("PAY_LOAN_LOADING", true);
    await axiosInstance
      .post("/payLoan", data)
      .then(res => {
        console.log(res);
        commit("PAY_LOAN_STATUS", true);
        commit("PAY_LOAN_LOADING", false);
      })
      .catch(err => {
        commit("PAY_LOAN_LOADING", false);
        commit("PAY_LOAN_STATUS", false);
        commit("PAY_LOAN_ERROR", err.response);
      });
  },
  async postTransaction({ commit }, data) {
    commit("POST_TRANSACTION_LOADING", true);
    await axiosInstance
      .post("/transactions", data)
      .then(res => {
        console.log(res);
        commit("POST_TRANSACTION_STATUS", true);
        commit("POST_TRANSACTION_LOADING", false);
      })
      .catch(err => {
        commit("POST_TRANSACTION_LOADING", false);
        commit("POST_TRANSACTION_STATUS", false);
        commit("POST_TRANSACTION_ERROR", err.response);
      });
  },
  async fetchTransactions({ commit }) {
    commit("FETCH_TRANSACTIONS_LOADING", true);
    await axiosInstance
      .get("/transactions")
      .then(res => {
        console.log(res);
        commit("FETCH_TRANSACTIONS", res.data.transactions);
        commit("FETCH_TRANSACTIONS_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_TRANSACTIONS_LOADING", false);
        commit("FETCH_TRANSACTIONS_ERROR", err.response);
      });
  },
  async fetchInvestmentsCount({ commit }) {
    commit("FETCH_INVESTMENTS_COUNT_LOADING", true);
    await axiosInstance
      .get("/total_investment")
      .then(res => {
        commit("FETCH_INVESTMENTS_COUNT", res.data[0].total_investments);
        commit("FETCH_INVESTMENTS_COUNT_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_INVESTMENTS_COUNT_LOADING", false);
        commit("FETCH_INVESTMENTS_COUNT_ERROR", err.response);
      });
  },
  async fetchFixedCount({ commit }) {
    commit("FETCH_FIXED_COUNT_LOADING", true);
    await axiosInstance
      .get("/total_fixed")
      .then(res => {
        commit("FETCH_FIXED_COUNT", res.data[0].total_fixed);
        commit("FETCH_FIXED_COUNT_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_FIXED_COUNT_LOADING", false);
        commit("FETCH_FIXED_COUNT_ERROR", err.response);
      });
  },
  async fetchOrdinaryCount({ commit }) {
    commit("FETCH_ORDINARY_COUNT_LOADING", true);
    await axiosInstance
      .get("/total_ordinary")
      .then(res => {
        commit("FETCH_ORDINARY_COUNT", res.data[0].total_ordinary);
        commit("FETCH_ORDINARY_COUNT_LOADING", false);
      })
      .catch(err => {
        commit("FETCH_ORDINARY_COUNT_LOADING", false);
        commit("FETCH_ORDINARY_COUNT_ERROR", err.response);
      });
  }
};
