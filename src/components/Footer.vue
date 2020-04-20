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


        
          :to=link.href> {{link.name}} 
          
        </router-link>
      </v-btn>
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
        {name: 'About', href: "/about"},
        {name: 'GitHub', href: "https://github.com/Women-Who-Code-Phoenix/lah"}
      ],
    }),
  }
</script>

<style scoped>
  .darkblue {
    background-color: #0d3d6c;
  }
</style>