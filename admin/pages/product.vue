<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new Product</h2>
            <form action="">
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select name="" id="" class="a-select-option">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select name="" id="" class="a-select-option">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <!-- Title Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Title</label>
                <input type="text" class="a-input-text" style="width: 100%" />
              </div>

              <!-- Price Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <input type="number" class="a-input-text" style="width: 100%" />
              </div>

              <!-- Description Input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Description</label>
                <textarea placeholder="" style="width: 100%; width: 100%" />
              </div>
            </form>

            <!-- Photo Input -->
            <div class="a-spacing-top-medium">
              <label style="margin-bottom: 0px">Add Photo</label>
              <div class="a-row-spacing-top-medium">
                <label for="" class="choosefile-button">
                  <i class="fal fa-plus"></i>
                  <input type="file" />
                  <p style="margin-top: -70px">Photo Name</p>
                </label>
              </div>
            </div>

            <!-- Submit Button -->
            <hr />
            <div class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text">Add Product</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>