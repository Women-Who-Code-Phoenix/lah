
<template>
  <v-container fluid>
    <v-row justify="center" align="center" v-if="loading">
      <v-col v-for="n in 4" :key="n" cols="12" sm="6" md="3">
        <v-card>
          <v-skeleton-loader
            ref="skeleton"
            :boilerplate="true"
            type="article"
            :tile="false"
            class="mx-auto"
          ></v-skeleton-loader>
        </v-card>
      </v-col>
    </v-row>
    <v-row  v-if="!loading && resources.length > 0">
      <v-col v-for="item in resources" :key="item.name" cols="10" sm="6" lg="3">
        <v-card class="card" height="100%">
          <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>Description:</v-list-item-content>
              <v-list-item-content
                class="description"
              >{{ item.description.length > 50 ? `${item.description.substring(0, 50)}...` : item.description }}</v-list-item-content>
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
              <v-list-item-content>Websites:</v-list-item-content>
              <v-list-item-content>
                <ul>
                  <li v-for="(website, i) in item.websites" :key="website">
                    <a :href="website" target="_blank">{{i+1}}</a>
                  </li>
                </ul>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <router-link :to="`/details/${item.id}`">More Details...</router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else justify="center" align="center" >
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="subheading font-weight-bold">Please adjust selected tags to see results.</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";
export default {
  name: "Start",
  data: () => ({
    resources: [],
    tags: [""],
    hasError: false,
    error: "",
    firestore: firebase.firestore(),
    sortBy: "name",
    direction: "asc",
    loading: false
  }),
  mounted() {
    this.tags =
      JSON.parse(this.$route.query.tags).length > 0
        ? JSON.parse(this.$route.query.tags)
        : ["*"];
    this.fetchData();
  },
  computed: {
    startAt: function() {
      return this.pageSize * this.pageNum - 3;
    }
  },
  watch: {
    $route: function(val) {
      console.log(JSON.parse(val.query.tags).length > 0);
      this.tags =
        JSON.parse(val.query.tags).length > 0
          ? JSON.parse(val.query.tags)
          : ["*"];
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      this.resources = [];
      this.loading = true;
      this.firestore
        .collection("resources")
        .orderBy(this.sortBy, this.direction)
        .where("tags", "array-contains-any", this.tags)
        .get()
        .then(response => {
          response.forEach(doc => {
            this.resources.push(doc.data());
          });
        })
        .catch(error => {
          console.log("catch");
          this.hasError = true;
          this.error = error;
        })
        .finally(() => {
          console.log("test");
          this.loading = false;
        });
    }
  }
};
</script>
