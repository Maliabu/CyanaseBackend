<template>
  <div style="padding:10px">
    <v-row>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-card>
      <v-card-title>
        Transactions Made
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
        :items="transactions"
        :search="search"
        :loading="transactionsLoading"
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
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Transactions",
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
        {
          text: "AMOUNT",
          value: "amount"
        },
        {
          text: "TYPE",
          value: "type"
        }
      ]
    };
  },
  beforeCreate() {
    this.$store.dispatch("fetchTransactions");
  },
  computed: {
    ...mapState(["transactions", "transactionsLoading"])
  }
};
</script>
