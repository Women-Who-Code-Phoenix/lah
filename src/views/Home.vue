<template>
  <div class="home">
    <Start />
  </div>
</template>

<script>
// @ is an alias to /src
import Start from "@/components/Start.vue";

export default {
  //Why is this name "Resources"? Shouldn't it be "Home"? I'm confused
  name: "Resources",
  components: {
    Start
  },
  data: () => ({
  }),
}
</script>