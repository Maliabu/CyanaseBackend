<template>
  <div style="padding:10px">
    <v-row>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-forward</v-icon>
        </template>
      </v-breadcrumbs>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="12" sm="6" md="3">
        <v-card
          class="mx-auto"
          max-width="300"
          max-height="150"
          to="/home/employees"
          :loading="employees_countLoading"
          outline
        >
          <v-list-item>
            <v-icon color="teal lighten-2" size="120">mdi-account-group</v-icon>
            <v-list-item-content>
              <v-list-item-title class="headline" style="padding:5px">
                <pulse-loader :loading="employees_countLoading"></pulse-loader>
                <h5 v-if="!employees_countLoading">
                  {{ employees_count ? employees_count : 0 }}
                </h5>
              </v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle style="font-size:16px;padding:5px"
                >Employees</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card
          class="mx-auto"
          max-width="300"
          max-height="150"
          to="/home/savings"
          :loading="savings_countLoading"
          outline
        >
          <v-list-item>
            <v-icon color="orange darken-4" size="120"
              >mdi-cash-register</v-icon
            >
            <v-list-item-content>
              <v-list-item-title class="headline" style="padding:5px">
                <pulse-loader :loading="savings_countLoading"></pulse-loader>
                <h5 v-if="!savings_countLoading">
                  {{ savings_count ? savings_count : 0 }}
                </h5>
              </v-list-item-title>
              <v-divider style="padding:5px"></v-divider>
              <v-list-item-subtitle style="font-size:16px;padding:5px"
                >Savings</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card
          class="mx-auto"
          max-width="300"
          to="/home/members"
          outline
          :loading="members_countLoading"
        >
          <v-list-item>
            <v-icon color="lime darken-1" size="120">mdi-account-child</v-icon>
            <v-list-item-content>
              <v-list-item-title class="headline" style="padding:5px">
                <pulse-loader :loading="members_countLoading"></pulse-loader>
                <h5 v-if="!members_countLoading">
                  {{ members_count ? members_count : 0 }}
                </h5>
              </v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle style="font-size:16px; padding:5px"
                >Members</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-card
          class="mx-auto"
          max-width="300"
          to="/home/loans"
          outline
          :loading="loans_countLoading"
        >
          <v-list-item>
            <v-icon color="brown darken-2" size="120">mdi-cash-multiple</v-icon>
            <v-list-item-content>
              <v-list-item-title class="headline" style="padding:5px">
                <pulse-loader :loading="loans_countLoading"></pulse-loader>
                <h5 v-if="!loans_countLoading">
                  {{ loans_count ? loans_count : 0 }}
                </h5>
              </v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle style="font-size:16px; padding:5px"
                >Loans</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="12">
        <h5 class="text-center">
          Trend of savings over time
        </h5>
        <canvas id="myChart" width="1100" height="400"></canvas>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Chart from "chart.js";
import { mapState, mapGetters } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  components: {
    PulseLoader
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Dashboard",
          disabled: true,
          href: "breadcrumbs_link_1"
        }
      ],
      graph_labels: ["feb", "May", "June", "July", "March", "August"],
      graph_data_one: [34, 70, 78, 89, 10, 45],
      graph_data_two: [12, 56, 78, 25, 20, 67]
    };
  },
  watch: {
    values: function() {
      window.mygraph.destroy();
      let graph_values = this.values;
      let graph_dates = this.dates;
      this.payments(graph_values, graph_dates);
    }
  },
  methods: {
    payments(data_one, labels) {
      this.renderTo = "myChart";
      const ctx = document.getElementById(this.renderTo).getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Number of savings",
              data: data_one,
              backgroundColor: "#1B5E20",
              fill: false,
              borderColor: "#1B5E20",
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          stacked: false,
          title: {
            display: false
          },
          tooltips: {
            mode: "index",
            intersect: false
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          scales: {
            x: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Month"
              }
            },
            y: {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Savings"
              }
            }
          }
        }
      });
      window.mygraph = myChart;
    }
  },
  beforeCreate() {
    this.$store.dispatch("fetchEmployeesCount");
    this.$store.dispatch("fetchMembersCount");
    this.$store.dispatch("fetchSavingsCount");
    this.$store.dispatch("fetchLoansCount");
    this.$store.dispatch("fetchSavingsTrend");
  },
  mounted() {
    this.payments(this.values, this.dates);
  },
  computed: {
    ...mapState([
      "employees_count",
      "employees_countLoading",
      "savings_count",
      "savings_countLoading",
      "members_count",
      "members_countLoading",
      "loans_count",
      "loans_countLoading"
    ]),
    ...mapGetters(["dates", "values"])
  }
};
</script>
