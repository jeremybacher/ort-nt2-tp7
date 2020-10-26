<template>
  <section class="login-form">
    <div class="jumbotron">
      <h2>Login</h2>
      <hr />
      <form novalidate autocomplete="off" @submit.prevent="login()">
        <!-- -------------- -->
        <!-- Username Field -->
        <!-- -------------- -->
        <UsernameField :username="$v.f.username" @username="changeUsername($event)" />

        <!-- ---------------  -->
        <!--  Password Field  -->
        <!-- ---------------  -->
        <PasswordField :password="$v.f.password" @password="changePassword($event)" />

        <!-- ------------ -->
        <!-- Login Button -->
        <!-- ------------ -->
        <SendButton :value="buttonValue" />
      </form>

      <!-- Show errors -->
      <div v-if="errors != ''" class="alert alert-danger">
        {{ errors }}
      </div>
    </div>
  </section>
</template>

<script>
  import { required } from '@vuelidate/validators';
  import PasswordField from './PasswordField.vue';
  import UsernameField from './UsernameField.vue';
  import SendButton from '../Button.vue';

  export default  {
    name: 'task-form',
    props: [],
    components : {
      PasswordField,
      UsernameField,
      SendButton
    },
    data () {
      return {
        f: this.reset(),
        errors: '',
        buttonValue: 'Login'
      }
    },
    validations: {
      f: {
        password: { 
          required
        },
        username: { 
          required
        }
      }
    },
    mounted() {
      if (localStorage.getItem('username')) {
        this.$router.push('/')
      }
    },
    methods: {
      /* form reset */
      reset() {
        return {
          password : '',
          username: ''
        }
      },
      changePassword(password) {
        this.$v.f.password.$model = password;
      },
      changeUsername(username) {
        this.$v.f.username.$model = username;
      },
      /* Submit form */
      async login() {
        this.errors = ''
        this.$v.$touch()
        if (!this.$v.$invalid) {
          let fields = this.f
          if (fields.username === 'root' && fields.password === '1234') {
            localStorage.setItem("username", fields.username)
            this.$router.push('/')
          }
          this.errors = 'invalid data'
        }
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
