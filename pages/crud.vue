<template>
  <div>
    <div class="py-5 bg-gray">
      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-md-6">
            <div class="card-body">
              <div class="mt-4">
                <div class="row mb-2">
                  <div class="col-md-8">
                    <h5 class="card-title">Product List</h5>
                  </div>
                  <div class="col-md-4">
                    <button @click="create" type="button" class="btn btn-sm btn-primary float-end">Add New</button>
                  </div>
                  <div class="clearfix"></div>
                </div>

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
                        <button @click="edit(product)" type="button" class="btn btn-sm btn-success">Edit</button>

                        <button @click="destroy(product,i)" type="button" class="btn btn-sm btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- start create modal -->
              <div class="modal fade" id="createEditModal" tabindex="-1" aria-labelledby="createEditModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="createEditModalLabel">{{ editMode ? 'Product Update' : 'Product Create' }}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <form @submit.prevent="editMode ? update() : store()">
                      <div class="modal-body">
                        <div class="form-group col-md-12 mb-2">
                          <input type="text" name="name" class="form-control" id="product-name" placeholder="Product Name" required="required" v-model="form.name">
                        </div>

                        <div class="form-group col-md-12 mb-2">
                          <textarea name="detail" class="form-control" id="product-detail" placeholder="Product Detail" rows="3" v-model="form.detail"></textarea>
                        </div>

                        <div class="float-end mb-3">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-primary">{{ editMode ? 'Update' : 'Create' }}</button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
              <!-- end create modal -->

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
      editMode: false,

      form: {
        id: "",
        name: "",
        detail: "",
      },

      products: [],
      backendUrl: 'http://localhost:8000/',
    }
  },

  async fetch() {
      this.products = await fetch(`${this.backendUrl}api/products`).then(res => res.json())
  },

  methods: {
    create() {
      this.editMode = false;
      $('#createEditModal').modal('show');
    },

    store() {
      // const formData = new FormData();
      // for (let [key, value] of Object.entries(this.form)) {
      //   formData.append(key, value);
      // }
      let url = `${this.backendUrl}api/products`;
      this.$axios.post(url, this.form)

        .then(res => {
          this.products.unshift(res.data);
          this.form = '';
          $('#createEditModal').modal('hide');
        })

        .catch(error => {
          console.log(error);
        })

        .finally(() => {
          // loder stop
        });
    },

    edit(product) {
      this.editMode = true;
      this.form = product;
      $('#createEditModal').modal('show');
    },

    update() {
      let url = `${this.backendUrl}api/products/` + this.form.id;
      this.$axios.put(url, this.form)

        .then(res => {
          this.form = '';
          $('#createEditModal').modal('hide');

          const swal = inject("$swal");
      swal.fire({
          title: "hello",
          timer: 2000,
      });

        })

        .catch(error => {
          console.log(error);
        })

        .finally(() => {
          // loder stop
        });
    },

    destroy(product,i) {
      let url = `${this.backendUrl}api/products/` + product.id;
      this.$axios.delete(url)
        .then(res => {
          if (res.data == true) {
            this.products.splice(i, 1);
          }
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          //loder stop
        })
    }
  }
}
</script>
