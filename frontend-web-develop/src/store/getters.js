import moment from "moment";

export const getters = {
  isAuthenticated: state => !!state.token,
  getUserById: state => id => {
    return state.users.find(item => item.id === id);
  },
  getMemberById: state => id => {
    return state.members.find(item => item.id === id);
  },
  getMembersNames(state) {
    return state.members.map(member => {
      return member.name;
    });
  },
  getMemberByName: state => name => {
    return state.members.find(item => item.name === name);
  },
  getSavingById: state => id => {
    return state.savings.find(item => item.id === id);
  },
  getLoanById: state => id => {
    return state.loans.find(item => item.id === id);
  },
  getExpenseById: state => id => {
    return state.expenses.find(item => item.id === id);
  },
  values(state) {
    return state.savings_trend.map(count => {
      return count.Count;
    });
  },
  dates(state) {
    return state.savings_trend.map(count => {
      return moment(count.Date).format("MMMM");
      // return count.Date;
    });
  }
};
