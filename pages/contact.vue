<template>
  <div>
    <div class="py-5 bg-warning">
      <div class="container">
        <h1 class="text-center">Contact Us</h1>
      </div>
    </div>

    <div class="py-5 bg-gray">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form action="">
                <div class="form-group mb-3">
                  <input type="text" class="form-control" id="name" placeholder="Enter name">
                </div>

                <div class="form-group mb-3">
                  <input type="email" class="form-control" id="email" placeholder="Enter email">
                </div>

                <div class="form-group mb-3">
                  <input type="text" class="form-control" id="phone" placeholder="Enter phone">
                </div>

                <div class="form-group mb-3">
                  <textarea class="form-control" id="message" rows="3" placeholder="Type message..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',

  // SEO code start
  head() {
    return {
      title: 'Contact page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'NUXTJS Webside Designing From Scratch - Contact page'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'vue, nuxt, js, javascript - Contact page'
        }
      ]
    }
  },
  // SEO code end

}
</script>
