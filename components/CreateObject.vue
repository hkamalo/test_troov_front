vue
<template>
  <div class="container">
    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="objectForm.name"
            id="name"
            label="Nom"
            name="name"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="objectForm.description"
            id="description"
            label="Description"
            name="description"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="objectForm.lostDetails.adress"
            id="adress"
            label="Adresse"
            name="adress"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="objectForm.lostDetails.date"
            id="date"
            label="Date"
            name="date"
            type="text"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-row align="center" justify="center" class="pl-3">
        <v-card-actions>
          <v-btn class="btn" @click="createObject(objectForm)">Ajouter</v-btn>
        </v-card-actions>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    objectForm: {
      name: "Apple watch",
      description: "couleur noir",
      lostDetails: {
        adress: "5 rue de la République, 75006 Paris",
        date: ["2021", "15", "07"],
      },
    },
  }),

  methods: {
    async createObject(object){

      const userId = await this.$auth.user;

      try {
        const response = await this.$axios.post(`/user/${userId}/object`, object);
        const objectStored = response.data;
        console.log(objectStored);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 15vw;
  height: 100%;
  color: #194c4c;
}
.login-title {
  font-family: "Dosis", sans-serif;
}
.tab-a {
  color: #3fbfbf;
}

.btn {
  color: #3fbfbf;
  margin: 1em;
}

.card-global {
  margin: 10em 0 0 0;
  padding: 1em;
}
</style>
