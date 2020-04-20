<template>
  <div>
    <form :model="form">
      <input type="text" v-model="form.name" />
      <input type="password" v-model="form.psd" />
      <button @click="submit">{{ name }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "loginlogin",
      form: {
        name: null,
        psd: null
      }
    };
  },
  mounted() {
    submit: (v1, v2, v3) => {
      console.log("1111:",v1, v2, v3);
    };
  }
};
</script>