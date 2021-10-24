<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat class="app-bar">
      <div class="app-menu">
        <div>
          <img src="../static/logo-dark.png" />

          <v-btn v-for="link in links" :key="link" text>
            {{ link }}
          </v-btn>
        </div>

        <v-btn type="submit" @click="getLogout()">Logout</v-btn>
      </div>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="object in objectList" :key="object" link>
                  <v-list-item-content>
                    <v-list-item-title>{{ object }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-btn> Ajoutez un object </v-btn>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  middleware: "auth-redirect",
  data: () => ({
    links: ["Profile", "Object"],
    items: ["object 1", "object 2", "object 3", "object 4", "object 5"],
    objectList: "",
  }),
  mounted() {
    this.asyncData();
  },
  methods: {
    async getLogout() {
      await this.$auth.logout();
      alert("user logout");
    },
    async asyncData() {
      const userId = await this.$auth.getUser;
      console.log(userId);

      try {
        const objectList = await $axios.$get(`/user/${userId}/object`);
        console.log(objectList);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.app-bar {
  width: 100vw;
}

.app-menu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
