<template>
   <form v-on:submit="submit">
    <div>
      <label for="name"> Name : </label>
      <input type="text" v-model="applicant.name" name="name"  placeholder="Enter Your Name" />
    </div> <br>

    <div>
      <label>Age : </label>
      <input type="text" v-model="applicant.age" name="age" placeholder="Enter Your Age"/>
    </div> <br>
    <button type="button" @click="clear">Clear</button>
    <button type="button">Submit</button>
    
  </form>
   <div class="spy">#Spy {{JSON.stringify(applicant)}}</div>
</template>

<script>

export default {
  name: "App",
  data(){
    return {
      applicant:{
        name: "",
        age: ""
      }
    };
  },
  methods:{
    submit(event){
      event.preventDefault();
      alert(JSON.stringify(this.applicant))
    },
    clear(){
      this.applicant ={
        name: "",
        age: ""
      }
    }
  }
}

</script>
<style>
.spy{
  margin-top: 16px;
  color: red;
}
</style>
