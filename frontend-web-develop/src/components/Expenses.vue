<template>
  <div style="padding:10px">
    <v-row>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-layout flex align-end justify-end style="padding-bottom:10px">
      <v-btn
        @click.stop="dialog = true"
        color="success"
        style="text-transform:capitalize"
      >
        add Expense
        <v-icon style="margin-left:3px">mdi-plus</v-icon>
      </v-btn>
    </v-layout>
    <v-card>
      <v-card-title>
        Expenses
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="expenses"
        :loading="expensesLoading"
        :multi-sort="true"
        :calculate-widths="true"
        :search="search"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus'
        }"
      >
        <template v-slot:item.createdAt="{ item }">
          <h5>{{ item.createdAt | myDate }}</h5>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon color="green" @click="launchEdit(item.id)">mdi-launch</v-icon>
          <v-icon color="red" @click="deleteExpense(item.id)"
            >mdi-trash-can-outline</v-icon
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Add Expense</h5>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Expense title*"
                  v-model="title"
                  :rules="titleRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Expense amount*"
                  :rules="amountRules"
                  v-model="amount"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Expense note*"
                  :rules="noteRules"
                  v-model="note"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn
            color="blue darken-1"
            text
            :disabled="!valid"
            @click="postExpense"
            :loading="postExpenseLoading"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Edit Expense</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Expense title*"
                  v-model="title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Expense amount*"
                  v-model="amount"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Expense note*"
                  v-model="note"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="editDialog = false"
            >Close</v-btn
          >
          <v-btn
            color="blue darken-1"
            text
            @click="updateExpense"
            :loading="updateExpenseLoading"
            >Edit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});
import { mapState } from "vuex";
export default {
  data() {
    return {
      valid: false,
      dialog: false,
      title: "",
      editDialog: false,
      deleteDialog: false,
      note: "",
      amount: "",
      titleRules: [v => !!v || "Title is required"],
      noteRules: [v => !!v || "Note is required"],
      amountRules: [v => !!v || "Amount is required"],
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Expense",
          disabled: true,
          href: "breadcrumbs_link_1"
        }
      ],
      search: "",
      headers: [
        {
          text: "DATE",
          align: "left",
          value: "createdAt"
        },
        {
          text: "TITLE",
          align: "left",
          sortable: false,
          value: "title"
        },
        { text: "AMOUNT", value: "amount" },
        { text: "NOTE", value: "note" },
        { text: "ACTIONS", value: "actions" }
      ]
    };
  },
  methods: {
    setNull() {
      this.title = "";
      this.amount = "";
      this.note = "";
    },
    launchEdit(id) {
      this.editDialog = true;
      let expense = this.$store.getters.getExpenseById(id);
      this.title = expense.title;
      this.amount = expense.amount;
      this.note = expense.note;
      this.id = expense.id;
    },
    launchDelete(id) {
      this.deleteDialog = true;
      let expense = this.$store.getters.getExpenseById(id);
      this.title = expense.title;
      this.amount = expense.amount;
      this.note = expense.note;
      this.id = expense.id;
    },
    postExpense() {
      let data = {
        title: this.title,
        amount: this.amount,
        note: this.note
      };
      this.$store
        .dispatch("postExpense", data)
        .then(() => {
          if (this.postExpenseStatus) {
            this.dialog = false;
            this.setNull();
            this.$store.dispatch("fetchExpenses");
            Toast.fire({
              icon: "success",
              title: "Expense Saved successfully"
            });
          } else {
            Toast.fire({
              icon: "error",
              title: "Form validation failed"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateExpense() {
      let data = {
        title: this.title,
        amount: this.amount,
        note: this.note,
        id: this.id
      };
      this.$store
        .dispatch("updateExpense", data)
        .then(() => {
          if (this.updateExpenseStatus) {
            this.editDialog = false;
            this.setNull();
            this.$store.dispatch("fetchExpenses");
            Toast.fire({
              icon: "success",
              title: "Expenses sucessfully edited"
            });
          } else {
            Toast.fire({
              icon: "error",
              title: "Form validation failed"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteExpense(data) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, activate it!"
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch("deleteExpense", data)
            .then(() => {
              if (this.deleteExpenseStatus) {
                this.deleteDialog = false;
                this.setNull();
                this.$store.dispatch("fetchExpenses");
                Toast.fire({
                  icon: "success",
                  title: "Expenses sucessfully deleted"
                });
              } else {
                Toast.fire({
                  icon: "error",
                  title: "Form validation failed"
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  },
  beforeCreate() {
    this.$store.dispatch("fetchExpenses");
  },
  computed: {
    ...mapState([
      "postExpenseStatus",
      "postExpenseLoading",
      "expenses",
      "expensesLoading",
      "updateExpenseStatus",
      "updateExpenseLoading",
      "deleteExpenseStatus",
      "deleteExpenseLoading"
    ])
  }
};
</script>
