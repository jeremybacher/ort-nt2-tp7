<template>
  <section v-if="isLogged" class="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <router-link to="/">
        <a class="navbar-brand" href="#">Home</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/create-task">
              <a class="nav-link" href="#">Create Task</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list-tasks">
              <a class="nav-link" href="#">List Tasks</a>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout()">logout</a>
          </li>
        </ul>
      </div>      
    </nav>
  </section>
</template>

<script>
  export default  {
    name: 'navbar',
    props: [],
    data() {
      return {
        isLogged: false
      }
    },
    mounted() {
      this.isLogged = localStorage.getItem('username');
    },
    methods: {
      logout() {
        localStorage.removeItem("username")
        this.$router.push('/login')
      }
    }
  }
</script>