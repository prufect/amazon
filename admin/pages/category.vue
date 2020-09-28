<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2 style="text-align: center">Add a new Category</h2>
          <form action="">
            <!-- Title Input -->
            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">Type</label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="type"
              />
            </div>

            <!-- Submit Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddCategory"
                    >Add Category</span
                  >
                </span>
              </span>
            </div>
          </form>

          <!-- Current Category List -->
          <div class="a-spacing-top-medium"></div>
          <ul class="list-group-item">
            <li v-for="category in categories" :key="category._id">
              {{ category.type }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-3"></div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/categories");
      return {
        categories: response.categories
      };
    } catch (err) {
      console.log(err);
    }
  },

  data() {
    return {
      type: ""
    };
  },

  methods: {
    async onAddCategory() {
      try {
        let data = { type: this.type };

        let result = await this.$axios.$post(
          "http://localhost:3000/api/category",
          data
        );

        this.categories.push(data);
        this.type = "";
      } catch (err) {
        console.log(err.response.data.message);
      }
    }
  }
};
</script>

<style></style>
