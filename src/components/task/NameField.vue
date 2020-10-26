<template>
  <section class="name-field">
    <div class="form-group">
      <label for="name">Name</label>
      <input 
        type="text"
        id="name"
        class="form-control"
        :value="name.$model"
        @input="onChangeName($event.target.value)"
      >
      <div v-if="name.$error && name.$dirty" class="alert alert-danger mt-1">
        <div v-if="name.required.$invalid">{{ name.required.$message }}</div>
        <div v-else-if="name.minLength.$invalid">{{ name.minLength.$message }}</div>
        <div v-else-if="name.maxLength.$invalid">{{ name.maxLength.$message }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'name-field',
    props: ['name', 'onName'],
    methods: {
      onChangeName(value) {
        this.$emit('name', value)
      }
    }
  }
</script>
