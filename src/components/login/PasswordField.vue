<template>
  <section class="password-field">
    <div class="form-group">
      <label for="password">Password</label>
      <input 
        type="password"
        id="password"
        class="form-control"
        :value="password.$model"
        @input="onChangePassword($event.target.value)"
      >
      <div v-if="password.$error && password.$dirty" class="alert alert-danger mt-1">
        <div v-if="password.required.$invalid">{{ password.required.$message }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'password-field',
    props: ['password', 'onPassword'],
    methods: {
      onChangePassword(value) {
        this.$emit('password', value)
      }
    }
  }
</script>
