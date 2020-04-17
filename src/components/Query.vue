
<template>
  <v-row>
<v-col cols="3">
<SideSearch />
</v-col>
<v-col cols="9">
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
                  color="secondary"
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
  </v-col>
  </v-row>
</template>

<script>
import * as firebase from "firebase/app";
import SideSearch from "@/components/SideSearch";

export default {
  name: "Query",
  components: {
    SideSearch
  },
  data: () => ({
    resources: [],
    tags: [""],
    search: "",
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
      this.tags =
        JSON.parse(val.query.tags).length > 0
          ? JSON.parse(val.query.tags)
          : ["*"];
        this.search = val.query.search;
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
            this.resources.push({id: doc.id, ...doc.data()});
          });
        })
        .catch(error => {
          this.hasError = true;
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
