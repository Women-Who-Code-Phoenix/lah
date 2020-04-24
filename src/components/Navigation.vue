<template>
  <span>
    <v-app-bar fixed app color="#1976D2" dark>
      <v-toolbar-title>
        <router-link to="/" class="home-link">Life From Home</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-autocomplete
        class="pt-6"
        v-model="values"
        :items="tags"
        dense
        chips
        small-chips
        label="Tags"
        item-text="name"
        item-value="name"
        multiple
        deletable-chips
        solo
        @change="search"
      ></v-autocomplete>
      <v-spacer></v-spacer>
    </v-app-bar>
  </span>
</template>


<script>
import * as firebase from "firebase/app";

export default {
  data: () => ({
    firestore: firebase.firestore(),
    tags: [],
    values: [],
  }),
  watch: {
    $route: function(val) {
      this.values = val.query.tags ? JSON.parse(val.query.tags) : [];
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.hasError = false;
      this.firestore
        .collection("tags")
        .get()
        .then(response => {
          let resources = [];
          response.forEach(doc => {
            this.tags.push({ id: doc.id, ...doc.data() });
          });
          this.links.push({
            icon: "local-offer",
            text: "Tags",
            children: resources
          });
        })
        .catch(error => {
          this.hasError = true;
          this.error = error;
        });
    },
    search() {
      this.$router.push({
        name: "Resources",
        query: {
          pageNum: 1,
          pageSize: 4,
          sortBy: "name",
          direction: "desc",
          tags: JSON.stringify(this.values)
        }
      });
    }
  }
};
</script>
<style scoped>
.home-link {
  text-decoration: none;
  color: #fafafa;
}
</style>
