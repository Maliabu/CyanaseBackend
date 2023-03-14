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
        add members
        <v-icon style="margin-left:3px">mdi-plus</v-icon>
      </v-btn>
    </v-layout>
    <v-card>
      <v-card-title>
        Members
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
        :items="members"
        :loading="membersLoading"
        :search="search"
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
          <v-icon color="red" @click="deleteMember(item.id)"
            >mdi-trash-can-outline</v-icon
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Add Member</h5>
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
                  label="NIN*"
                  v-model="nin"
                  :rules="ninRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  show-size
                  counter
                  :rules="photoRules"
                  v-model="photo"
                  label="Upload passport photo*"
                ></v-file-input>
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
            @click="postMember"
            :loading="postMemberLoading"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Edit Member</h5>
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
                  label="NIN*"
                  v-model="nin"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  show-size
                  counter
                  v-model="photo"
                  label="Upload passport photo*"
                ></v-file-input>
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
            @click="updateMember"
            :loading="updateMemberLoading"
            >Edit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <h5>Add Member</h5>
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
                  label="NIN*"
                  v-model="nin"
                  :rules="ninRules"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  show-size
                  counter
                  :rules="photoRules"
                  v-model="photo"
                  label="Upload passport photo*"
                ></v-file-input>
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
            @click="postMember"
            :loading="postMemberLoading"
            >Save</v-btn
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
      viewerOptions: {
        movable: false,
        rotatable: false,
        scalable: false,
        url: "data-href"
      },
      photo: null,
      firstName: "",
      lastName: "",
      nin: "",
      phoneNumber: "",
      firstnameRules: [v => !!v || "First name is required"],
      photoRules: [v => !!v || "Photo is required"],
      roleRules: [v => !!v || "First name is required"],
      lastnameRules: [v => !!v || "Last name is required"],
      phonenumberRules: [
        v => !!v || "Phone number is required",
        v => (v && v.length >= 10) || "Phone number must atleast 10 characters"
      ],
      ninRules: [
        v => !!v || "Nin number is required",
        v => (v && v.length >= 14) || "Nin number must be atleast 14 characters"
      ],
      id: "",
      items: [
        {
          text: "Home",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Members",
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
        { text: "MEMBER NAME", value: "name" },
        { text: "REGISTERED BY", value: "registered_by" },
        { text: "PHONE NUMBER", value: "phoneNumber" },
        { text: "PIN", value: "pin" },
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
      let user = this.$store.getters.getMemberById(id);
      this.lastName = user.lastName;
      this.firstName = user.firstName;
      this.phoneNumber = user.phoneNumber;
      this.nin = user.nin;
      this.id = id;
    },
    setNull() {
      this.firstName = "";
      this.lastName = "";
      this.photo = "";
      this.phoneNumber = "";
      this.nin = "";
    },
    postMember() {
      let data = new FormData();
      data.append("firstName", this.firstName);
      data.append("lastName", this.lastName);
      data.append("passport_photo", this.photo);
      data.append("phoneNumber", this.phoneNumber);
      data.append("nin", this.nin);

      this.$store
        .dispatch("postMember", data)
        .then(() => {
          if (this.postMemberStatus) {
            this.dialog = false;
            this.setNull();
            this.$store.dispatch("fetchMembers");
            Toast.fire({
              icon: "success",
              title: "Member account created successfully"
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
    updateMember() {
      let data = new FormData();
      data.append("firstName", this.firstName);
      data.append("lastName", this.lastName);
      data.append("passport_photo", this.photo);
      data.append("phoneNumber", this.phoneNumber);
      data.append("nin", this.nin);
      data.append("id", this.id);
      const id = this.id;

      this.$store
        .dispatch("updateMember", { data, id })
        .then(() => {
          if (this.updateMemberStatus) {
            this.editDialog = false;
            this.setNull();
            this.$store.dispatch("fetchMembers");
            Toast.fire({
              icon: "success",
              title: "Member account created updated"
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
    deleteMember(id) {
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
            .dispatch("deleteMember", id)
            .then(() => {
              if (this.deleteMemberStatus) {
                this.deleteDialog = false;
                this.setNull();
                this.$store.dispatch("fetchMembers");
                Toast.fire({
                  icon: "success",
                  title: "Account Deleted successfully"
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
      });
    }
  },
  beforeCreate() {
    this.$store.dispatch("fetchMembers");
  },
  computed: {
    ...mapState([
      "postMemberError",
      "postMemberLoading",
      "postMemberStatus",
      "members",
      "membersLoading",
      "updateMemberLoading",
      "updateMemberStatus",
      "deleteMemberLoading",
      "deleteMemberStatus"
    ])
  }
};
</script>
