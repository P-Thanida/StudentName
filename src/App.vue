<template>
   <form @submit="onSubmit" >
    <div>
      <label>Name : </label>
      <input type="text" v-model="name" name="name" placeholder="Enter Your Name" />
    </div> <br>
    <div>
      <label>Age : </label>
      <input
        type="text"
        v-model="age"
        name="age"
        placeholder="Enter Your Age"
      />
    </div> <br>
    <input type="submit" value="Save Information"/>
  </form>
</template>

<script>

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
}

</script>
<style>
</style>
