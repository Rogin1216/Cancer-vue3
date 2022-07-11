<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-sm-4 mt-5">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="text">Username</label>
            <input type="text" class="form-control" v-model="form.text">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" v-model="form.password">
          </div>

          <button type ="submit" class="btn btn-dark">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive } from '@vue/reactivity';
import { reactive } from 'vue';
import login from './Login.vue';
import axios from 'axios';
// import VueAxios from 'vue-axios';

export default {
  setup(){
    const form = reactive({
      email:'',
      password:''
    });
    const login = async()=>{
      let res = await axios.post('http://192.168.7.188:8040/api/login', form)
      Vue.axios.post('http://192.168.7.188:8040/api/login')
      console.log(res);
    }

    return{
      form,
      login
    }
  }
}
</script>

<style>

</style>