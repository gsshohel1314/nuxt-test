<template>
  <div>
    <div class="py-5 bg-warning">
      <div class="container">
        <h1 class="text-center">About Us</h1>
      </div>
    </div>

    <aboutUs />

  </div>
</template>

<script>
import aboutUs from '~/components/aboutUs.vue';

export default {
  name: 'about',
  components: {aboutUs},

  // SEO code start
  head() {
    return {
      title: 'About us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'NUXTJS Webside Designing From Scratch - About us'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'vue, nuxt, js, javascript - About us'
        }
      ]
    }
  },
  // SEO code end

}
</script>

