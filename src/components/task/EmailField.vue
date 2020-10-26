<template>
  <section class="email-field">
    <div class="form-group">
      <label for="email">Email</label>
      <input 
        type="email"
        id="email"
        class="form-control"
        :value="email.$model"
        @input="onChangeEmail($event.target.value)"
      >
      <div v-if="email.$error && email.$dirty" class="alert alert-danger mt-1">
        <div v-if="email.required.$invalid">{{ email.required.$message }}</div>
        <div v-else-if="email.email.$invalid">{{ email.email.$message }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'email-field',
    props: ['email', 'onEmail'],
    methods: {
      onChangeEmail(value) {
        this.$emit('email', value);
      }
    }
  }
</script>
