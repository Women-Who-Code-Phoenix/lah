<template>
      <v-navigation-drawer
        floating
        permanent
        class="nav"
      >
      <h1>Categories</h1>
        <v-list
          dense
          rounded
        >
          <v-list-item
            v-for="item in tags"
            :key="item.name"
          >
            <v-list-item-content>
              <v-list-item-title>
                  <v-checkbox v-model="values" class="mx-2" :value="item.name" :label="item.name" @change="search"></v-checkbox>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>
<script>
import * as firebase from "firebase/app";
  export default {
    data: () => ({
    firestore: firebase.firestore(),
    tags: [],
    values: []
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
  }
</script>