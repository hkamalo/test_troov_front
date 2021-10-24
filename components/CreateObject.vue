vue
<template>
  <div class="container">
    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field
            id="name"
            label="Nom"
            name="name"
            type="text"
          ></v-text-field>
          <v-text-field
            id="description"
            label="Description"
            name="description"
            type="text"
          ></v-text-field>
          <v-text-field
            id="adress"
            label="Adresse"
            name="adress"
            type="text"
          ></v-text-field>
          <v-text-field
            id="date"
            label="Date"
            name="date"
            type="number"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-row align="center" justify="center" class="pl-3">
        <v-card-actions>
          <v-btn class="btn">Ajouter</v-btn>
        </v-card-actions>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 15vw;
  height: 100%;
  color: #194C4C;
}
.login-title {
  font-family: "Dosis", sans-serif;
}
.tab-a {
color: #3FBFBF;
}

.btn {
  color: #3FBFBF;
  margin: 1em
}


.card-global {
  margin: 10em 0 0 0;
  padding: 1em;
}
</style>
