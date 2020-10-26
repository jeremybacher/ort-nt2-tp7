<template>
  <section class="list-tasks">
    <div class="jumbotron">
      <h2>List Tasks</h2>
      <hr />
      <div class="table-responsive">
        <table class="table">
          <tr class="bg-success text-white">
            <th>Description</th>
            <th>Name</th>
            <th>Email</th>
            <th>CreatedAt</th>
          </tr>
          <tr
            class="bg-info text-white"
            v-for="(task, index) in tasks"
            :key="index"
          >
            <td>{{ task.description }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.email }}</td>
            <td>{{ dateFormat(task.createdAt) }}</td>
          </tr>
        </table>

        <!-- Show errors -->
        <div v-if="errors != ''" class="alert alert-danger">
          {{ errors }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import dateFormat from '../../mixins.js'

  export default  {
    name: 'list-tasks',
    props: [],
    mixins: [dateFormat],
    mounted () {
      if (!localStorage.getItem('username')) {
        this.$router.push('/login')
      }
      this.fetchTasks()
    },
    data () {
      return {
        url: 'https://5f94bcac2de5f50016ca1a6f.mockapi.io/tasks',
        tasks: [],
        errors: ''
      }
    },
    methods: {
      /* fetch tasks */
      async fetchTasks() {
        this.axios(this.url)
          .then(res => {
            if (res.data.length > 0) {
              this.tasks = res.data
            } else {
              this.errors = 'No tasks were found'
            }            
          })
          .catch(error => this.errors = error.message)
      }
    }
  }
</script>

<style scoped lang="css">
  .jumbotron {
    background-color: rgb(114, 19, 51);
    color: white;
    padding: 2rem 2rem;
  }
  hr {
    background-color: #ddd;
  }
</style>