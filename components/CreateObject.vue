vue
<template>
  <div class="container">
    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field
            id="name"
            label="a"
            name="name"
            prepend-icon="mdi-account"
            type="text"
          ></v-text-field>
          <v-text-field
            id="lastname"
            label="Nom"
            name="name"
            prepend-icon="mdi-account-box-outline"
            type="text"
          ></v-text-field>
          <v-text-field
            id="adresse"
            label="Adresse"
            name="adresse"
            prepend-icon="mdi-map"
            type="text"
          ></v-text-field>
          <v-text-field
            id="postcode"
            label="Code postal"
            name="postcode"
            prepend-icon="mdi-map"
            type="number"
          ></v-text-field>
          <v-text-field
            id="city"
            label="Ville"
            name="city"
            prepend-icon="mdi-map"
            type="text"
          ></v-text-field>
          <v-text-field
            id="country"
            label="Pays"
            name="country"
            prepend-icon="mdi-map"
            type="text"
          ></v-text-field>
          <v-text-field
            id="email"
            label="Email"
            name="email"
            prepend-icon="mdi-email"
            type="text"
          ></v-text-field>
          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-row align="center" justify="center" class="pl-3">
        <v-card-actions>
          <v-btn color="deep-purple" class="btn">Enregistrer</v-btn>
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
  width: 20vw;
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
