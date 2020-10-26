<template>
  <section class="username-field">
    <div class="form-group">
      <label for="username">Username</label>
      <input 
        type="text"
        id="username"
        class="form-control"
        :value="username.$model"
        @input="onChangeUsername($event.target.value)"
      >
      <div v-if="username.$error && username.$dirty" class="alert alert-danger mt-1">
        <div v-if="username.required.$invalid">{{ username.required.$message }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'username-field',
    props: ['username', 'onUsername'],
    methods: {
      onChangeUsername(value) {
        this.$emit('username', value)
      }
    }
  }
</script>
