<template>
  <section class="description-field">
    <div class="form-group">
      <label for="description">Description</label>
      <input 
        type="text"
        id="description"
        class="form-control"
        :value="description.$model"
        @input="onChangeDescription($event.target.value)"
      >
      <div v-if="description.$error && description.$dirty" class="alert alert-danger mt-1">
        <div v-if="description.required.$invalid">{{ description.required.$message }}</div>
        <div v-else-if="description.minLength.$invalid">{{ description.minLength.$message }}</div>
        <div v-else-if="description.maxLength.$invalid">{{ description.maxLength.$message }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'description-field',
    props: ['description', 'onDescription'],
    methods: {
      onChangeDescription(value) {
        this.$emit('description', value)
      }
    }
  }
</script>
