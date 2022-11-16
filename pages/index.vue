<template>
  <div>
    <carousel />

    <!-- start about us section -->
    <aboutUs />
    <!-- end about us section -->

    <!-- start sevices section -->
    <OurServices />
    <!-- end sevices section -->

    <!-- start contact section -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1 class="main-heading">If you have any queries ?</h1>
            <h4>Please reach out us at contact@example.com</h4>
          </div>
          <div class="col-md-4 text-center my-auto">
            <NuxtLink to="/contact" class="px-5 py-2 btn btn-primary">Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- end contact section -->

  </div>
</template>

<script>
import aboutUs from '~/components/aboutUs.vue';
import carousel from '~/components/carousel.vue';
import OurServices from '~/components/OurServices.vue';

export default {
  name: 'index',
  components: {carousel, aboutUs, OurServices},

  // SEO code start
  head() {
    return {
      title: 'Home page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'NUXTJS Webside Designing From Scratch - Home page'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'vue, nuxt, js, javascript - Home page'
        }
      ]
    }
  },
  // SEO code end

}
</script>
