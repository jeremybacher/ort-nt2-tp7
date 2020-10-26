<template>
  <section class="send-button">
    <div class="form-group">
      <input 
        type="submit"
        class="btn btn-success mt-4"
        :value="value"
      >
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'send-button',
    props: ['value']
  }
</script>