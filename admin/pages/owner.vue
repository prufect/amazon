<template>
  <main>
    <div class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2 style="text-align: center">Add a new owner</h2>
          <form action="">
            <!-- Name Input -->
            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">Name</label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="name"
              />
            </div>

            <!-- About Input -->
            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">About</label>
              <input
                type="text"
                class="a-input-text"
                style="width: 100%"
                v-model="about"
              />
            </div>

            <!-- Photo Input -->
            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">Add Photo</label>
              <div class="a-row-spacing-top-medium">
                <label class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" @change="onFileSelected" />
                  <p style="margin-top: -70px">{{ fileName }}</p>
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text" @click="onAddOwner"
                    >Add Owner</span
                  >
                </span>
              </span>
            </div>
          </form>

          <!-- Current Owner List -->
          <div class="a-spacing-top-medium"></div>
          <ul class="list-group-item">
            <li v-for="owner in owners" :key="owner._id">
              {{ owner.name }}
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
      let response = await $axios.$get("http://localhost:3000/api/owners");
      return {
        owners: response.owners
      };
    } catch (err) {
      console.log(err);
    }
  },

  data() {
    return {
      name: "",
      about: "",
      selectedFile: null,
      fileName: ""
    };
  },

  methods: {
    async onAddOwner() {
      try {
        let data = new FormData();
        data.append("name", this.name);
        data.append("about", this.about);
        data.append("photo", this.selectedFile, this.selectedFile.name);

        let result = await this.$axios.$post(
          "http://localhost:3000/api/owner",
          data
        );

        this.owners.push({ name: this.name });

        this.name = "";
        this.about = "";
        this.selectedFile = null;
        this.fileName = "";
      } catch (err) {
        console.log(err.response.data.message);
      }
    },

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = this.selectedFile.name;
    }
  }
};
</script>

<style></style>
