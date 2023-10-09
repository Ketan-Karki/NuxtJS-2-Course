<template>
  <div>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: undefined,
    };
  },
  async asyncData() {}, //before beforeCreate
  async fetch(ctx) {
    //after beforeCreate() created()
    const { params, $http } = ctx;
    const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`);
    return { post };
  },
};
</script>

<style lang="scss" scoped></style>
