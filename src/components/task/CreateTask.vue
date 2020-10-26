<template>
  <section class="task-form">
    <div class="jumbotron">
      <h2>Create Task</h2>
      <hr />
      <form novalidate autocomplete="off" @submit.prevent="create()">
        <!-- ----------------- -->
        <!-- Description Field -->
        <!-- ----------------- -->
        <DescriptionField :description="$v.f.description" @description="changeDescription($event)" />

        <!-- ------------ -->
        <!--  Name Field  -->
        <!-- ------------ -->
        <NameField :name="$v.f.name" @name="changeName($event)" />

        <!-- ------------- -->
        <!--  Email Field  -->
        <!-- ------------- -->
        <EmailField :email="$v.f.email" @email="changeEmail($event)" />

        <!-- ------------ -->
        <!-- Create Button  -->
        <!-- ------------ -->
        <SendButton :value="buttonValue" />
      </form>

      <!-- Show messages -->
      <div v-if="success != ''" class="alert alert-success">
        {{ success }}
      </div>
      <div v-else-if="errors != ''" class="alert alert-danger">
        {{ errors }}
      </div>
    </div>
  </section>
</template>

<script>
  import { required, maxLength, minLength, email } from '@vuelidate/validators';
  import DescriptionField from './DescriptionField.vue';
  import EmailField from './EmailField.vue';
  import NameField from './NameField.vue';
  import SendButton from '../Button.vue';

  export default  {
    name: 'task-form',
    props: [],
    mounted() {
      if (!localStorage.getItem('username')) {
        this.$router.push('/login')
      }
    },
    components : {
      DescriptionField,
      EmailField,
      NameField,
      SendButton
    },
    data () {
      return {
        f: this.reset(),
        url: 'https://5f94bcac2de5f50016ca1a6f.mockapi.io/tasks',
        errors: '',
        success: '',
        buttonValue: 'Create'
      }
    },
    validations: {
      f: {
        description: { 
          required,
          maxLength: maxLength(50),
          minLength: minLength(10)
        },
        email: { 
          required,
          email
        },
        name: { 
          required,
          maxLength: maxLength(15),
          minLength: minLength(5)
        },
      }
    },
    methods: {
      /* form reset */
      reset() {
        return {
          description: '',
          email: '',
          name: ''
        }
      },
      changeDescription(description) {
        this.$v.f.description.$model = description;
      },
      changeName(name) {
        this.$v.f.name.$model = name;
      },
      changeEmail(email) {
        this.$v.f.email.$model = email;
      },
      /* Submit form */
      async create() {
        this.errors = ''
        this.success = ''
        this.$v.$touch()
        if(!this.$v.$invalid) {
          let fields = this.f
          await this.send(fields)
          this.f = this.reset()
          this.$v.$reset()
        }
      },
      /* Send form to mockapi */
      send(fields) {
        this.axios.post(this.url, fields, {'content-type': 'application/json'})
          .then(res => {
            if (res.data) {
              this.success = "Task created"
              setTimeout(() => {
                this.success = ""
              }, 3000);
            }
          })
          .catch(error => {
            this.errors = "Something went wrong: " + error.message
            setTimeout(() => {
              this.errors = ""
            }, 3000);
          })
      },
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
