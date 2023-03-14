<template>
  <div style="padding:10px">
    <v-row>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-alert
          class="text-center"
          border="left"
          colored-border
          color="deep-purple accent-4"
          elevation="2"
        >
          <h2>Total Investment</h2>
          <div>
            <pulse-loader :loading="investments_countLoading"></pulse-loader>
            <p v-if="!investments_countLoading">
              {{ investments_count }} Accounts
            </p>
          </div>
        </v-alert>
      </v-col>
      <v-col cols="12" md="4">
        <v-alert
          class="text-center"
          border="left"
          colored-border
          color="green darken-4"
          elevation="2"
        >
          <h2>Total Fixed</h2>
          <pulse-loader :loading="fixed_countLoading"></pulse-loader>
          <p v-if="!fixed_countLoading">{{ fixed_count }} Accounts</p>
        </v-alert>
      </v-col>
      <v-col cols="12" md="4">
        <v-alert
          class="text-center"
          border="left"
          colored-border
          color="red darken-1"
          elevation="2"
        >
          <h2>Total Ordinary</h2>
          <pulse-loader :loading="ordinary_countLoading"></pulse-loader>
          <p v-if="!ordinary_countLoading">{{ ordinary_count }} Accounts</p>
        </v-alert>
      </v-col>
    </v-row>
    <v-layout flex align-end justify-end style="padding-bottom:10px">
      <v-btn
        @click.stop="dialog = true"
        color="success"
        style="text-transform:capitalize"
      >
        add saving Account
        <v-icon style="margin-left:3px">mdi-plus</v-icon>
      </v-btn>
    </v-layout>
    <v-card>
      <v-card-title>
        Savings Accounts
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
        :items="savings"
        :loading="savingsLoading"
        :search="search"
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
        <template v-slot:item.interest="{ item }">
          <span>{{ item.interest }}</span>
        </template>
        <template v-slot:item.id="{ item }">
          <span>2G00{{ item.id }}</span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon color="green" @click="launchEdit(item.id)">mdi-launch</v-icon>
          <v-icon color="green" @click="launchCredit(item.id)"
            >mdi-cash-plus</v-icon
          >
          <v-icon color="green" @click="launchDebit(item.id)"
            >mdi-cash-minus</v-icon
          >
          <v-icon color="red" @click="deleteSaving(item.id)"
            >mdi-trash-can-outline</v-icon
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Create Saving Account</h5>
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
              <v-col class="d-flex" cols="12">
                <v-autocomplete
                  label="Select Account Type"
                  :items="types"
                  :rules="typeRules"
                  v-model="type"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Saving amount*"
                  v-model="amount"
                  :rules="amountRules"
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
            @click="postSaving"
            :loading="postSavingLoading"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Edit Saving Account</h5>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-autocomplete
                  v-model="member"
                  :items="getMembersNames"
                  dense
                  label="Choose member"
                ></v-autocomplete>
              </v-col>
              <v-col class="d-flex" cols="12">
                <v-autocomplete
                  label="Select Account Type"
                  :items="types"
                  v-model="type"
                  :rules="typeRules"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Saving amount*"
                  v-model="amount"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="setNull">Close</v-btn>
          <v-btn
            :disabled="!valid"
            color="blue darken-1"
            text
            @click="updateSaving"
            :loading="updateSavingLoading"
            >Edit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="creditDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Credit Account</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Saving amount*"
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
            @click="creditAccount"
            :loading="postSavingLoading"
            >Credit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="debitDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Debit Account</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Saving amount*"
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
            @click="debitSaving"
            :loading="debitSavingLoading"
            >Debit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
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
  components: {
    PulseLoader
  },
  data() {
    return {
      valid: false,
      dialog: false,
      member: "",
      amount: "",
      editDialog: false,
      debitDialog: false,
      creditDialog: false,
      deleteDialog: false,
      types: ["investments", "fixed", "ordinary"],
      type: "",
      memberRules: [v => !!v || "Member is required"],
      typeRules: [v => !!v || "Account Type is required"],
      amountRules: [v => !!v || "Amount is required"],
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Savings",
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
          text: "ACCOUNT NUMBER",
          align: "left",
          sortable: false,
          value: "id"
        },
        {
          text: "MEMBER NAME",
          align: "left",
          sortable: false,
          value: "member"
        },
        { text: "ISSUED BY", value: "issued_by" },
        { text: "ACCOUNT TYPE", value: "account_type" },
        { text: "AMOUNT(Ugx)", value: "amount" },
        { text: "ACTIONS", value: "actions" }
      ]
    };
  },
  methods: {
    setNull() {
      this.member = "";
      this.amount = "";
      this.type = "";
      this.id = "";
      this.editDialog = false;
      this.creditDialog = false;
      this.debitDialog = false;
      this.deleteDialog = false;
    },
    launchEdit(id) {
      this.editDialog = true;
      let saving = this.$store.getters.getSavingById(id);
      this.member = saving.member;
      this.amount = saving.amount;
      this.type = saving.account_type;
      this.id = id;
    },
    launchCredit(id) {
      this.creditDialog = true;
      let saving = this.$store.getters.getSavingById(id);
      this.member = saving.member;
      this.id = id;
    },
    launchDebit(id) {
      this.debitDialog = true;
      let saving = this.$store.getters.getSavingById(id);
      this.member = saving.member;
      this.id = id;
    },
    postSaving() {
      let member = this.$store.getters.getMemberByName(this.member);
      let transaction = {
        memberId: member.id,
        amount: this.amount,
        type: "Savings Account Creation"
      };

      let data = {
        memberId: member.id,
        amount: this.amount,
        account_type: this.type,
        phoneNumber: member.phoneNumber
      };
      this.$store
        .dispatch("postSavings", data)
        .then(() => {
          if (this.postSavingStatus) {
            this.$store.dispatch("postTransaction", transaction);
            this.dialog = false;
            this.setNull();
            this.$store.dispatch("fetchSavings");
            Toast.fire({
              icon: "success",
              title: "Amount Saved successfully"
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
    debitSaving() {
      let member = this.$store.getters.getMemberByName(this.member);
      let transaction = {
        memberId: member.id,
        amount: this.amount,
        type: "Debit Account"
      };

      let data = {
        memberId: member.id,
        amount: this.amount,
        phoneNumber: member.phoneNumber
      };
      this.$store
        .dispatch("debitSavings", data)
        .then(() => {
          if (this.debitSavingStatus) {
            this.$store.dispatch("postTransaction", transaction);
            this.dialog = false;
            this.setNull();
            this.$store.dispatch("fetchSavings");
            Toast.fire({
              icon: "success",
              title: "Account debited successfully"
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
    creditAccount() {
      let member = this.$store.getters.getMemberByName(this.member);
      let transaction = {
        memberId: member.id,
        amount: this.amount,
        type: "Credit Account"
      };

      let data = {
        memberId: member.id,
        amount: this.amount,
        phoneNumber: member.phoneNumber
      };
      this.$store
        .dispatch("postSavings", data)
        .then(() => {
          if (this.postSavingStatus) {
            this.$store.dispatch("postTransaction", transaction);
            this.dialog = false;
            this.setNull();
            this.$store.dispatch("fetchSavings");
            Toast.fire({
              icon: "success",
              title: "Account credited successfully"
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
    updateSaving() {
      let member = this.$store.getters.getMemberByName(this.member);

      let data = {
        memberId: member.id,
        amount: this.amount,
        account_type: this.type,
        id: this.id
      };
      this.$store
        .dispatch("updateSaving", data)
        .then(() => {
          if (this.updateSavingStatus) {
            this.editDialog = false;
            this.setNull();
            this.$store.dispatch("fetchSavings");
            Toast.fire({
              icon: "success",
              title: "Saving sucessfully edited"
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
    deleteSaving(id) {
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
            .dispatch("deleteSaving",id)
            .then(() => {
              if (this.deleteSavingStatus) {
                this.$store.dispatch("fetchSavings");
                Toast.fire({
                  icon: "success",
                  title: "Saving sucessfully deleted"
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
    this.$store.dispatch("fetchSavings");
    this.$store.dispatch("fetchInvestmentsCount");
    this.$store.dispatch("fetchFixedCount");
    this.$store.dispatch("fetchOrdinaryCount");
  },
  computed: {
    ...mapState([
      "postSavingStatus",
      "postSavingLoading",
      "debitSavingStatus",
      "debitSavingLoading",
      "savings",
      "savingsLoading",
      "updateSavingStatus",
      "updateSavingLoading",
      "deleteSavingStatus",
      "deleteSavingLoading",
      "investments_count",
      "investments_countLoading",
      "fetchInvestments_countError",
      "fixed_count",
      "fixed_countLoading",
      "fetchFixed_countError",
      "ordinary_count",
      "ordinary_countLoading",
      "fetchOrdinary_countError"
    ]),
    ...mapGetters(["getMembersNames"])
  }
};
</script>
