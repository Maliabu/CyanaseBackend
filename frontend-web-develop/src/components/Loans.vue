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
        register loan
        <v-icon style="margin-left:3px">mdi-plus</v-icon>
      </v-btn>
    </v-layout>
    <v-card>
      <v-card-title>
        Loans
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
        :items="loans"
        :search="search"
        :loading="loansLoading"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus'
        }"
      >
        <template v-slot:item.date_issued="{ item }">
          <h5>{{ item.date_issued | myDate }}</h5>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon color="green" @click="launchEdit(item.id)">mdi-launch</v-icon>
          <v-icon color="green" @click="launchPay(item.id)"
            >mdi-cash-plus</v-icon
          >
          <v-icon color="red" @click="deleteLoan(item.id)"
            >mdi-trash-can-outline</v-icon
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Register Loan</h5>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-autocomplete
                  v-model="member"
                  :items="getMembersNames"
                  :rules="memberRules"
                  dense
                  label="Choose member"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Loan amount*"
                  v-model="amount"
                  :rules="amountRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Loan Interest*"
                  v-model="interest"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Loan period*"
                  v-model="period"
                  :rules="periodRules"
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
            @click="postLoan"
            :disabled="!valid"
            :loading="postLoanLoading"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Edit Loan</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-autocomplete
                  v-model="member"
                  :items="getMembersNames"
                  dense
                  label="Choose member"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Loan amount*"
                  v-model="amount"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Loan Interest*"
                  v-model="interest"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Loan period*"
                  v-model="period"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="setNull">Close</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="updateLoan"
            :loading="updateLoanLoading"
            >Edit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="payDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Pay Loan</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Loan amount*"
                  v-model="amount"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="setNull">Close</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="payLoan"
            :loading="payLoanLoading"
            >PAY</v-btn
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
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      valid: false,
      dialog: false,
      editDialog: false,
      payDialog: false,
      deleteDialog: false,
      period: "",
      member: "",
      interest: "",
      amount: "",
      amount_borrowed: "",
      memberRules: [v => !!v || "Member is required"],
      amountRules: [v => !!v || "Amount is required"],
      periodRules: [v => !!v || "Period is required"],
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Loans",
          disabled: true,
          href: "breadcrumbs_link_1"
        }
      ],
      search: "",
      headers: [
        {
          text: "DATE ISSUED",
          align: "left",
          value: "date_issued"
        },
        {
          text: "MEMBER NAME",
          align: "left",
          sortable: false,
          value: "member"
        },
        { text: "ISSUED BY", value: "issued_by" },
        {
          text: "AMOUNT BORROWED",
          value: "amount_borrowed",
          align: "center"
        },
        {
          text: "AMOUNT REMAINING",
          value: "amount_remaining",
          align: "center"
        },
        { text: "INTEREST(%)", value: "interest", align: "center" },
        { text: "LOAN PERIOD", value: "payment_period" },
        { text: "ACTIONS", value: "actions" }
      ]
    };
  },
  methods: {
    launchEdit(id) {
      this.editDialog = true;
      let loan = this.$store.getters.getLoanById(id);
      this.member = loan.member;
      this.amount = loan.amount_borrowed;
      this.interest = loan.interest;
      this.period = loan.payment_period;
      this.id = id;
    },
    launchPay(id) {
      this.payDialog = true;
      let loan = this.$store.getters.getLoanById(id);
      this.member = loan.member;
      this.amount = loan.amount;
      this.interest = loan.interest;
      this.period = loan.payment_period;
      this.id = id;
    },
    setNull() {
      this.member = "";
      this.amount = "";
      this.period = "";
      this.interest = "";
      this.payDialog = false;
      this.editDialog = false;
    },
    postLoan() {
      let member = this.$store.getters.getMemberByName(this.member);

      let data = {
        memberId: member.id,
        amount: this.amount,
        payment_period: this.period,
        phoneNumber: member.phoneNumber,
        interest: this.interest
      };
      let transaction = {
        memberId: member.id,
        amount: this.amount,
        type: "Loan Acquisition"
      };
      this.$store
        .dispatch("postLoan", data)
        .then(() => {
          if (this.postLoanStatus) {
            this.$store.dispatch("postTransaction", transaction);
            this.dialog = false;
            this.setNull();
            this.$store.dispatch("fetchLoans");
            Toast.fire({
              icon: "success",
              title: "Loan registered successfully"
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
    payLoan() {
      let member = this.$store.getters.getMemberByName(this.member);
      let transaction = {
        memberId: member.id,
        amount: this.amount,
        type: "Loan Payment"
      };

      let data = {
        memberId: member.id,
        amount: this.amount,
        phoneNumber: member.phoneNumber
      };
      this.$store
        .dispatch("payLoan", data)
        .then(() => {
          if (this.payLoanStatus) {
            this.$store.dispatch("postTransaction", transaction);
            this.dialog = false;
            this.setNull();
            this.$store.dispatch("fetchLoans");
            Toast.fire({
              icon: "success",
              title: "Loan amount paid"
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
    updateLoan() {
      let member = this.$store.getters.getMemberByName(this.member);

      let data = {
        memberId: member.id,
        amount: this.amount_borrowed,
        payment_period: this.period,
        id: this.id
      };
      this.$store
        .dispatch("updateLoan", data)
        .then(() => {
          if (this.updateLoanStatus) {
            this.editDialog = false;
            this.setNull();
            this.$store.dispatch("fetchLoans");
            Toast.fire({
              icon: "success",
              title: "Loan suceessfully edited"
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
    deleteLoan(id) {
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
            .dispatch("deleteLoan", id)
            .then(() => {
              if (this.deleteLoanStatus) {
                this.$store.dispatch("fetchLoans");
                Toast.fire({
                  icon: "success",
                  title: "Loan suceessfully deleted"
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
    this.$store.dispatch("fetchMembers");
    this.$store.dispatch("fetchLoans");
  },
  computed: {
    ...mapState([
      "postLoanStatus",
      "postLoanLoading",
      "payLoanStatus",
      "payLoanLoading",
      "loans",
      "loansLoading",
      "updateLoanStatus",
      "updateLoanLoading",
      "deleteLoanStatus",
      "deleteLoanLoading"
    ]),
    ...mapGetters(["getMembersNames"])
  }
};
</script>
