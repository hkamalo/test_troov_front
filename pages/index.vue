<template>
  <v-app>
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
                  <v-btn @click="addObject = true">Ajoutez un object</v-btn>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
              <LazyCreateObject v-if="addObject" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  middleware: "auth",

  data: () => ({
    addObject: false,
    items: ["object 1", "object 2", "object 3", "object 4", "object 5"],
    objectList: [],
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
      console.log(this.$store.state.auth.user);

      const userId = this.$auth.user;
      console.log(userId);

      try {
        const response = await this.$axios.get(`/user/${userId}/object`);
        const objectList = response.data;
        console.log(objectList);
        return objectList;
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
