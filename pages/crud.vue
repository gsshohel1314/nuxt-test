<template>
  <div>
    <div class="py-5 bg-gray">
      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-md-6">
            <div class="card-body">
              <h5 class="card-title">Add New Product</h5>
              <form v-on:submit.prevent="onSubmit()" method="POST">
                <div class="row">
                  <div class="form-group col-md-4">
                    <input type="text" name="name" class="form-control" id="product-name" placeholder="Product Name" required="required" v-model="name">
                  </div>

                  <div class="form-group col-md-6">
                    <input type="text" name="detail" class="form-control" id="product-detail" placeholder="Product Detail" v-model="detail">
                  </div>

                  <div class="col-md-2">
                    <button type="submit" class="btn btn-primary">Add</button>
                  </div>
                </div>
              </form>

              <div class="mt-4">
                <h5 class="card-title">Product List</h5>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Details</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <p v-if="$fetchState.pending">Loading...</p>
                  <p v-else-if="$fetchState.error">An error occurred :(</p>
                  <tbody v-else >
                    <tr v-for="(product,i) in products" :key="product.id">
                      <td>{{ product.name }}</td>
                      <td>{{ product.detail }}</td>
                      <td>
                        <button type="button" class="btn btn-sm btn-success">Edit</button>
                        <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#exampleModal" @click="destroy(product,i)">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "crud",

  data() {
    return {
      name: '',
      detail: '',
      products: [],
      backendUrl: 'http://localhost:8000/',
    }
  },

  async fetch() {
      this.products = await fetch(`${this.backendUrl}api/products`).then(res => res.json())
  },

  methods: {
    onSubmit() {
      let data = {
        name: this.name,
        detail: this.detail
      };
      this.$axios.post(`${this.backendUrl}api/products`, data).then(res => {
        this.products.unshift(res.data);
        this.name = '';
        this.detail = '';
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        // loder stop
      });
    },

    destroy(product,i) {
      let url = 'http://localhost:8000/api/products/' + product.id;
      this.$axios.delete(url).then(res => {
        if (res.data == true) {
          this.products.splice(i, 1);
        }
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        //loder stop
      })
    }
  }
}
</script>
