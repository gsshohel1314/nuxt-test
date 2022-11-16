<template>
  <div>
    <appHeader />
    <Nuxt />
    <appFooter />
  </div>
</template>

<script>
import appHeader from '~/components/partial/appHeader.vue';
import appFooter from '~/components/partial/appFooter.vue';

export default {
  name: 'default',

  components: {
    appHeader,
    appFooter,
  }
}
</script>
