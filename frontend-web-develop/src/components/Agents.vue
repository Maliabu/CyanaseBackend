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
        add employee
        <v-icon style="margin-left:3px">mdi-plus</v-icon>
      </v-btn>
    </v-layout>
    <v-card>
      <v-card-title>
        Employees
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
        :items="users"
        :search="search"
        :loading="usersLoading"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus'
        }"
      >
        <template v-slot:item.photo="{ item }">
          <div v-viewer="viewerOptions">
            <img
              :src="`${url}${item.photo}`"
              :data-href="`${url}${item.photo}`"
              style="width: 70px;height: 70px;border-radius: 50%;padding:5px;"
              alt="john"
            />
          </div>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon color="green" @click="launchEdit(item.id)">mdi-launch</v-icon>
          <v-icon color="red" @click="launchDelete(item.id)"
            >mdi-trash-can-outline</v-icon
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Add Employee</h5>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="First name*"
                  v-model="firstName"
                  :rules="firstnameRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Last Name*"
                  v-model="lastName"
                  :rules="lastnameRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Phone Number*"
                  v-model="phoneNumber"
                  :rules="phonenumberRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Email*"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="NIN*"
                  v-model="nin"
                  :rules="ninRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-autocomplete
                  label="Select Role"
                  :items="roles"
                  v-model="role"
                  :rules="roleRules"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  show-size
                  counter
                  label="Upload photo"
                  :rules="photoRules"
                  v-model="photo"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  :rules="passwordRules"
                  required
                  v-model="password"
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
            @click="signup"
            :loading="signupLoading"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Edit Employee</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="First name*"
                  v-model="firstName"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Last Name*"
                  v-model="lastName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Phone Number*"
                  v-model="phoneNumber"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Email*"
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="NIN*"
                  v-model="nin"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-autocomplete
                  label="Select Role"
                  :items="roles"
                  v-model="role"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  show-size
                  counter
                  label="Upload photo"
                  v-model="photo"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                  v-model="password"
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
            @click="updateUser"
            :loading="updateUserLoading"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deleteDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Delete Employee</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="First name*"
                  v-model="firstName"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Last Name*"
                  v-model="lastName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Phone Number*"
                  v-model="phoneNumber"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Email*"
                  v-model="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="NIN*"
                  v-model="nin"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-autocomplete
                  label="Select Role"
                  :items="roles"
                  v-model="role"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  show-size
                  counter
                  label="Upload photo"
                  v-model="photo"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-2" text @click="deleteDialog = false"
            >Close</v-btn
          >
          <v-btn
            color="blue darken-2"
            text
            @click="deleteUser"
            :loading="deleteUserLoading"
            >Delete</v-btn
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
import "viewerjs/dist/viewer.css";
export default {
  data() {
    return {
      valid: false,
      url: process.env.VUE_APP_API_URL,
      dialog: false,
      editDialog: false,
      deleteDialog: false,
      required: [field => !!field || "This field is required"],
      viewerOptions: {
        movable: false,
        rotatable: false,
        scalable: false,
        url: "data-href"
      },
      firstName: "",
      lastName: "",
      firstnameRules: [v => !!v || "First name is required"],
      photoRules: [v => !!v || "Photo is required"],
      roleRules: [v => !!v || "First name is required"],
      lastnameRules: [v => !!v || "Last name is required"],
      phonenumberRules: [
        v => !!v || "Phone number is required",
        v =>
          (v && v.length >= 10) || "Phone number must be atleast 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      ninRules: [
        v => !!v || "Nin number is required",
        v => (v && v.length >= 14) || "Nin number must atleast 14 characters"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must atleast 6 characters"
      ],
      phoneNumber: "",
      password: "",
      nin: "",
      photo: null,
      email: "",
      role: "",
      roles: ["agent", "administrator"],
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "employees",
          disabled: true,
          href: "breadcrumbs_link_1"
        }
      ],
      search: "",
      headers: [
        {
          text: "PHOTO",
          align: "left",
          sortable: false,
          value: "photo"
        },
        { text: "FIRST NAME", value: "firstName" },
        { text: "LAST NAME", value: "lastName" },
        { text: "PHONE NUMBER", value: "phoneNumber" },
        { text: "EMAIL", value: "email" },
        { text: "POSITION", value: "role" },
        { text: "NIN", value: "nin" },
        { text: "ACTIONS", value: "actions" }
      ]
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    launchEdit(id) {
      this.editDialog = true;
      let user = this.$store.getters.getUserById(id);
      this.email = user.email;
      this.lastName = user.lastName;
      this.firstName = user.firstName;
      this.phoneNumber = user.phoneNumber;
      this.role = user.role;
      this.nin = user.nin;
      this.id = id;
    },
    launchDelete(id) {
      this.deleteDialog = true;
      let user = this.$store.getters.getUserById(id);
      this.email = user.email;
      this.lastName = user.lastName;
      this.firstName = user.firstName;
      this.phoneNumber = user.phoneNumber;
      this.role = user.role;
      this.nin = user.nin;
      this.id = id;
    },
    setNull() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.photo = "";
      this.role = "";
      this.phoneNumber = "";
      this.nin = "";
    },
    signup() {
      let data = new FormData();
      data.append("email", this.email);
      data.append("firstName", this.firstName);
      data.append("lastName", this.lastName);
      data.append("password", this.password);
      data.append("photo", this.photo);
      data.append("role", this.role);
      data.append("phoneNumber", this.phoneNumber);
      data.append("nin", this.nin);

      this.$store
        .dispatch("signUp", data)
        .then(() => {
          if (this.isSignedUp) {
            this.dialog = false;
            this.setNull();
            this.$store.dispatch("fetchUsers");
            Toast.fire({
              icon: "success",
              title: "User account created successfully"
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
    updateUser() {
      let data = new FormData();
      data.append("email", this.email);
      data.append("firstName", this.firstName);
      data.append("lastName", this.lastName);
      data.append("photo", this.photo);
      data.append("role", this.role);
      data.append("phoneNumber", this.phoneNumber);
      data.append("nin", this.nin);
      data.append("id", this.id);
      const id = this.id;

      this.$store
        .dispatch("updateUser", { data, id })
        .then(() => {
          if (this.updateUserStatus) {
            this.editDialog = false;
            this.setNull();
            this.$store.dispatch("fetchUsers");
            Toast.fire({
              icon: "success",
              title: "User account created updated"
            });
          } else {
            Toast.fire({
              icon: "error",
              title: "Something went wrong"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteUser() {
      let data = new FormData();
      data.append("email", this.email);
      data.append("firstName", this.firstName);
      data.append("lastName", this.lastName);
      data.append("photo", this.photo);
      data.append("role", this.role);
      data.append("phoneNumber", this.phoneNumber);
      data.append("nin", this.nin);
      data.append("id", this.id);
      const id = this.id;

      this.$store
        .dispatch("deleteUser", { data, id })
        .then(() => {
          if (this.deleteUserStatus) {
            this.deleteDialog = false;
            this.setNull();
            this.$store.dispatch("fetchUsers");
            Toast.fire({
              icon: "success",
              title: "User account deleted"
            });
          } else {
            Toast.fire({
              icon: "error",
              title: "Something went wrong"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeCreate() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    ...mapState([
      "singupError",
      "signupLoading",
      "isSignedUp",
      "users",
      "usersLoading",
      "updateUserLoading",
      "updateUserStatus",
      "deleteUserLoading",
      "deleteUserStatus"
    ])
  }
};
</script>
