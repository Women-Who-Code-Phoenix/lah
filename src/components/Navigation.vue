<template>
  <span>
    <v-app-bar
      color="#fafafa"
      :collapse="collapseOnScroll"
      fixed
      app
      :clipped-left="clipped"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Life From Home</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-checkbox v-model="collapseOnScroll" color="primary" hide-details></v-checkbox>
    </v-app-bar>
    <v-navigation-drawer
      class="no-print side-nav"
      fixed
      v-model="drawer"
      app
      dark
      color="primary"
      enable-resize-watcher
    >
      <v-row fill-height class="d-block ma-2">
        <v-list>
          <span v-for="(link, i) in links" :key="i">
            <!--if list item has kids-->
            <v-list-group
              :prepend-icon="link.icon"
              no-action
              v-if="link.children"
              :data-test="link.text"
              active-class="white--text text--accent-4"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item-content>
              </template>
              <span v-for="(child, i) in link.children" :key="i">
                <v-list-item v-if="showDrawerLink(child)" :to="child.to" :data-test="child.text" active-class="white--text text--accent-4">
                  <template>
                    <v-list-item-action>
                      <v-icon>{{ child.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title :data-test="`menu${child.text}`">
                        {{
                        child.text
                        }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </span>
            </v-list-group>
            <!--else-->
            <span v-else>
              <v-list-item
                :to="link.to"
                :data-test="`menu${link.text}`"
              >
                <template>
                  <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
                </template>
              </v-list-item>
            </span>
          </span>
        </v-list>
      </v-row>
    </v-navigation-drawer>
  </span>
</template>

<script>
import * as firebase from "firebase/app";

export default {
  data: () => ({
    drawer: true,
    collapseOnScroll: true,
    clipped: false,
    group: null,
    firestore: firebase.firestore(),
    resources: [],
    error: "",
    hasError: false,
    showChildren: false,
    links: [
      {
        to: "/",
        icon: "mdi-home",
        text: "Home"
      }
    ]
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
      this.hasError = false;
      this.firestore
        .collection("menu")
        .get()
        .then(response => {
          let resources = [];
          response.forEach(doc =>
            resources.push({
              to: `/resources/${doc.data().name}`,
              text: doc.data().name
            })
          );
          this.links.push({
            icon: "mdi-link",
            text: "Resources",
            children: resources
          });
        })
        .catch(error => {
          this.hasError = true;
          this.error = error;
        });
    },
    showDrawerLink: function(link) {
      return true;
    }
  }
};
</script>
