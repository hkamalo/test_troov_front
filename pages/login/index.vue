<template>
  <v-card width="650">
    <v-tabs
      v-model="tab"
      class="indigo darken-4"
      fixed-tabs
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab light href="#tab-1"
        >Connexion
        <v-icon>mdi-account</v-icon>
      </v-tab>

      <v-tab href="#tab-2"
        >Inscription
        <v-icon>mdi-account-plus</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="tab-1">
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field
                id="email"
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Mot de passe"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple" dark>Connexion</v-btn>
          </v-card-actions>
        </v-card>
      </v-tab-item>
      <v-tab-item value="tab-2">
        <v-card>
          <v-card-text>
            <v-form>
              <v-text-field
                id="firstname"
                label="Prenom"
                name="firstname"
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
              <v-btn color="deep-purple" dark>Enregistrer</v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  name: "SignIn",
  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
