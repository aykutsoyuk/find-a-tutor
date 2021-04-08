<template>
  <div>
    <p>Tutors</p>
    <ul v-if="filteredTutors">
      <li v-for="tutor in filteredTutors" :key="tutor.id">
        {{ tutor.first_name }}
      </li>
    </ul>
    <p v-else>No tutors found</p>
  </div>
</template>

<script>
export default {
  computed: {
    filteredTutors() {
      return this.$store.getters["tutors/tutors"];
    },
  },
};
</script>

<style lang="sass" scoped>
</style>