<template>
  <v-container fluid>
    <h1>About Life At Home</h1>
    <v-row>
      <v-col cols="12" sm="6" md="8">
        <v-card class="card" height="100%">
          <v-card-title class="subheading font-weight-bold">Why this began:</v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-content class="font-weight-bold">When:</v-list-item-content>
              <v-list-item-content
                class="description"
              >This project start on March 22nd, 2020, right as much of the US began to go into lockdown.</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="font-weight-bold">Why:</v-list-item-content>
              <v-list-item-content>
                <!--TODO: Reword so it's not as abrasive-->
                As much of the US began to go into lockdown, many people stuggled to find things to keep themselves and their kids
                occupied as many able-bodied/neurotypical people had grown accustom to being able to leave the house as they pleased
                when bored. Also, finding ways to help was hard if you didn't have specific skills. This is an attempt to address both
                problems.
                <a
                  href="https://www.google.com/search?q=%23FlattenTheCurve"
                  target="_blank"
                >#FlattenTheCurve</a>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content class="font-weight-bold">What:</v-list-item-content>
              <v-list-item-content>
                <span>This is a Vue + Vuetify + Firebase project and the code can be found here: 
                <a
                  href="https://github.com/Women-Who-Code-Phoenix/lah"
                  target="_blank"
                  class="newTab"
                >
                  GitHub
                  <v-icon color="#1976D2">mdi-launch</v-icon>
                </a>
                </span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="card" height="100%">
          <v-card-title class="subheading font-weight-bold">Who contributed:</v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item v-for="(p, i) in contributors" :key="i">
              <v-list-item-content>{{p.name }}</v-list-item-content>
              <v-list-item-content>
                <ul>
                  <li>Role: {{p.role}}</li>
                  <li v-if="p.github">
                    GitHub:
                    <a :href="p.github" target="_blank" class="newTab">
                      <v-icon color="#1976D2">mdi-launch</v-icon>
                    </a>
                  </li>
                </ul>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "About",
  data: () => ({
    contributors: [
      {
        name: "Caylee",
        role: "Software Engineer"
      },
      {
        name: "Ana",
        role: "Software Engineer"
      },
      {
        name: "Ra'Neith",
        role: "Software Engineer",
        github: "https://github.com/rvehall"
      },
      {
        name: "Jessica",
        role: "Software Engineer"
      },
      {
        name: "Chrissy",
        role: "Software Engineer"
      },
      {
        name: "Melissa",
        role: "Software Engineer"
      }
    ]
  })
};
</script>
<style scoped>
.newTab {
  color: #1976d2;
  text-decoration: none;
}
</style>
