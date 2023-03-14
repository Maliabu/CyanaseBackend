import Vue from "vue";
import Router from "vue-router";
// import Login from "./views/Login.vue";
import Welcome from "./views/Welcome.vue";
import Dashboard from "./components/Dashboard.vue";
import Loans from "./components/Loans.vue";
import Bodabodas from "./components/Bodabodas.vue";
import store from "./store/store";
import Agents from "./components/Agents.vue";
import Savings from "./components/Savings.vue";
import Expenses from "./components/Expenses.vue";
import Transactions from "./components/Transactions.vue";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/home");
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/");
};

const router = new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "login",
            component: Dashboard,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: "/home",
            name: "home",
            component: Welcome,
            beforeEnter: ifAuthenticated,
            children: [{
                    path: "",
                    name: "home.dashboard",
                    component: Dashboard
                },
                {
                    path: "employees",
                    name: "home.employees",
                    component: Agents
                },
                {
                    path: "loans",
                    name: "home.loans",
                    component: Loans
                },
                {
                    path: "members",
                    name: "home.members",
                    component: Bodabodas
                },
                {
                    path: "savings",
                    name: "home.savings",
                    component: Savings
                },
                {
                    path: "expenses",
                    name: "home.expenses",
                    component: Expenses
                },
                {
                    path: "transactions",
                    name: "home.transactions",
                    component: Transactions
                }
            ]
        }
    ]
});

export default router;