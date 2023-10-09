<template>
  <div>Client {{ $route.params.id }} page</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
