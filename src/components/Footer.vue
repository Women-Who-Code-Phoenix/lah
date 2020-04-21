<template>
  <v-footer
    color="#1976D2"
    padless
    absolute
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="white"
        text
        rounded
        class="my-2"
      >
        <router-link 
          :to=link.href
          tag="button"
          >
          {{link.name}}
        </router-link>
      </v-btn>
      
        <a 
          target="_blank"
          href="https://github.com/Women-Who-Code-Phoenix/lah"
          >
            <v-btn
              :key="GitHub"
              color="white"
              text
              rounded
              class="my-2"
            >
            GitHub  <br> <font-awesome-icon icon="external-link-alt" />
            </v-btn>
        </a>
      
      <v-col
        
        class="dark-blue py-4 text-center white--text"
        
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Life at Home</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {name: 'Home', href: "/"},
        {name: 'About', href: "/about"}
      ],
    }),
  }
</script>

<style scoped>
  .darkblue {
    background-color: #0d3d6c;
  }
</style>
<!-- {name: 'GitHub', href: "https://github.com/Women-Who-Code-Phoenix/lah"} -->