<template>
  <div>
    <div class="py-5 bg-warning">
      <div class="container">
        <h1 class="text-center">Our Services</h1>
      </div>
    </div>

    <OurServices />

  </div>
</template>

<script>
import OurServices from '~/components/OurServices.vue';
export default {
  name: 'services',
  components: {OurServices},

  // SEO code start
  head() {
    return {
      title: 'Services page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'NUXTJS Webside Designing From Scratch - Services page'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'vue, nuxt, js, javascript - Services page'
        }
      ]
    }
  },
  // SEO code end

}
</script>
