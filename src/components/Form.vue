<template>
  <v-form @submit.prevent="submit" ref="form">
    <v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn to="/">Cancel</v-btn>
        <v-btn color="primary" type="submit">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>
        <h3>Activity Details</h3>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-row wrap>
            <v-col cols="12" md="4">
              <v-text-field label="Name" v-model="resource.name" />
              <v-autocomplete
                class="pt-6"
                v-model="resource.tags"
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
              ></v-autocomplete>
            </v-col>
            <v-col cols="12" md="8">
              <v-textarea label="Description" v-model="resource.description" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-text>
        <h4>Add some sites</h4>
      </v-card-text>
      <v-card-text>
        <v-container grid-list-md>
          <v-row wrap>
            <v-col cols="12" md="12" key="0">
              <v-text-field
                prepend-icon="mdi-earth"
                v-model="resource.websites[0]"
                placeholder="https://"
              />
            </v-col>
            <v-col cols="12" md="12" key="1">
              <v-text-field
                prepend-icon="mdi-earth"
                v-model="resource.websites[1]"
                placeholder="https://"
              />
            </v-col>
            <v-col cols="12" md="12" key="2">
              <v-text-field
                prepend-icon="mdi-earth"
                v-model="resource.websites[2]"
                placeholder="https://"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
import * as firebase from 'firebase/app'
export default {
  data() {
    return {
      firestore: firebase.firestore(),
      resource: {
        name: '',
        description: '',
        websites: ['', '', ''],
      },
      tags: [],
      error: undefined,
    }
  },

  mounted() {
    this.fetchDataForTags()
  },
  methods: {
    submit() {
      this.hasError = false
      this.resource.websites = this.resource.websites.filter(
        (site) => site != ''
      )
      this.firestore
        .collection('resources')
        .add(this.resource)
        .then((response) => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.hasError = true
          this.error = error
        })
    },
    fetchDataForTags() {
      this.hasError = false
      this.firestore
        .collection('tags')
        .get()
        .then((response) => {
          response.forEach((doc) => {
            this.tags.push({ id: doc.id, ...doc.data() })
          })
        })
        .catch((error) => {
          this.hasError = true
          this.error = error
        })
    },
  },
}
</script>
