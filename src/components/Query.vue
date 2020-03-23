
<template>
  <v-container fluid>
    <!-- <v-row class="text-center">
      <v-col cols="12">
        <v-icon size="100" color="primary">mdi-home</v-icon>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Life at Home</h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other developers on related projects,
          <br />please join the CODEVID-19 online
          <a
            href="codevid-19.slack.com"
            target="_blank"
          >Slack Community</a>
        </p>
      </v-col>
    </v-row>
    <h2>Activities for kids</h2>
    <v-row>
      <v-col v-for="item in forKids" :key="item.name" cols="12" sm="6" lg="4">
        <v-card class="card">
          <v-card-title class="subheading font-weight-bold">{{ item.name  }}</v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>Description:</v-list-item-content>
              <v-list-item-content class="description">{{ item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>Tags:</v-list-item-content>
              <v-list-item-content>
                <v-chip
                  v-for="tag in item.tags"
                  :key="tag"
                  class="ma-2"
                  :color="tag == 'kids' ? 'primary' : 'grey'"
                  label
                  text-color="white"
                >
                  <v-icon left>mdi-label</v-icon>
                  {{tag}}
                </v-chip>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content><router-link :to="`/details/${item.id}`">More Details...</router-link></v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <h2>Exercise</h2>
    <v-row>
      <v-col v-for="item in forExercise" :key="item.name" cols="12" sm="6" lg="4">
        <v-card class="card">
          <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>Description:</v-list-item-content>
              <v-list-item-content class="description">{{ item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description}}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>Tags:</v-list-item-content>
              <v-list-item-content>
                <v-chip
                  v-for="tag in item.tags"
                  :key="tag"
                  class="ma-2"
                  :color="tag == 'exercise' ? 'primary' : 'grey'"
                  label
                  text-color="white"
                >
                  <v-icon left>mdi-label</v-icon>
                  {{tag}}
                </v-chip>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content><router-link :to="`/details/${item.id}`">More Details...</router-link></v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";
export default {
  name: "Start",
  data: () => ({
    resources: [],
    hasError: false,
    error: "",
    firestore: firebase.firestore(),
    // pageSize: this.$router.query.pageSize,
    // pageNum: this.$router.query.pageNum,
    // sortBy: this.$router.query.sortBy,
    // direction: this.$router.query.direction
  }),
  mounted() {
    this.fetchData();
  },
  computed: {
    startAt: function() {
      return this.pageSize * this.pageNum - 3;
    }
  },
  methods: {
    fetchData() {
    //   this.firestore
    //     .collection("resources")
    //     .orderBy(this.sortBy, "asc")
    //     .limit(this.pageSize)
    //     .startAt(this.startAt.toString())
    //     .where("tags", "array-contains-any", ["kids"])
    //     .get()
    //     .then(response => {
    //       response.forEach(doc => {
    //         this.resources.push(doc.data());
    //       });
    //     })
    //     .catch(error => {
    //       this.hasError = true;
    //       this.error = error;
    //     });
    },
  }
};
</script>
<style scoped>
  .card {
    min-height: 445px;
  }
</style>
