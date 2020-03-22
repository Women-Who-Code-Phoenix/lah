<template>
  <span>
    <v-app-bar
      color="#fafafa"
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      fixed
      app
      :clipped-left="clipped"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Life From Home</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-checkbox v-model="collapseOnScroll" color="primary" hide-details></v-checkbox>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      enable-resize-watcher
      app
      dark
      class="primary"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="white--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
// import * as firebase from "firebase/app";

export default {
  data: () => ({
    drawer: true,
    collapseOnScroll: true,
    clipped: false,
    group: null,
    firestore: firebase.firestore()
  }),
  mounted() {
    this.fetchData();
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  methods: {
    fetchData() {
    //   this.firestore.getCollections().then(collections => {
    //     for (let collection of collections) {
    //       console.log(`Found collection with id: ${collection.id}`);
    //     }
    //   });
    }
  }
};
</script>
