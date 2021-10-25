<template>
  <v-toolbar class="white" v-if="this.$auth.loggedIn">
    <v-toolbar-side-icon>
      <nuxt-link to="/">
        <img src="../static/logo-dark.png" alt="LOGO" height="100%" />
      </nuxt-link>
    </v-toolbar-side-icon>
    <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>Profil</v-btn>
      <!--<v-btn flat>Blog</v-btn>-->
      <v-btn flat class="pink lighten-3" @click="logout()">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
    methods: {
        async logout(){
           await this.$auth.logout();
            alert("Successfuly Logout")
        }
    }
};
</script>

<style lang="scss" scoped></style>
