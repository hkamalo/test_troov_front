<template>
  <div class="container">
    <div>
      <h1 class="login-title">
        Bienvenue sur <span class="troov-special-font">Troov</span>
      </h1>
    </div>
    <v-card class="card-global" width="650">
      <v-tabs
        v-model="tab"
        class="indigo"
        fixed-tabs
        icons-and-text
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab light href="#tab-1"
        class="tab-a"
          >Connexion
          <v-icon>mdi-account</v-icon>
        </v-tab>

        <v-tab href="#tab-2"
        class="tab-a"
          >Inscription
          <v-icon>mdi-account-plus</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <v-card>
            <v-card-text>
              <v-form>
                <v-text-field v-model="login.email"
                  id="email"
                  label="Email"
                  name="email"
                  prepend-icon="mdi-account"
                  type="text"
                ></v-text-field>
                <v-text-field v-model="login.password"
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
              <v-btn color="deep-purple" class="btn" @click="userLogin(login)">Connexion</v-btn>
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
                <v-btn color="deep-purple" class="btn">Enregistrer</v-btn>
              </v-card-actions>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>
<script>
export default {

  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  login: {
    email: "hk@random.com",
    password: "test123"
  }    
    };
  },
methods: {
async userLogin(login) {
let reponse = await this.$auth.loginWith('local', {
  data : {
    email: login.email,
    password: login.password
  }

});

await this.$auth.setUser(response.userId);

let redirectUrl = this.$route.query.redirect || '/';
await this.$router.push('redirectUrl');
}
},


};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.troov-special-font {
  font-family: "Fredoka One", cursive;
  color: #3FBFBF;
}

.card-global {
  margin: 10em 0 0 0;
  padding: 1em;
}
</style>
