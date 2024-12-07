<template>
  <div class="results">
    <h2>Skill Gap Analysis</h2>
    <p>Missing Skills: {{ missingSkills.join(', ') }}</p>
    <h3>Recommended Courses:</h3>
    <ul>
      <li v-for="course in courses" :key="course.id">
        <a :href="course.link" target="_blank">{{ course.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['missingSkills'],
  computed: {
    courses() {
      return this.missingSkills.map((skill) => ({
        id: skill,
        name: `Learn ${skill}`,
        link: `https://www.example.com/courses/${skill}`,
      }));
    },
  },
};
</script>

<style scoped>
@import '../assets/global.css';
@import '../assets/results.css';
</style>
