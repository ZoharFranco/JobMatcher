<template>
  <div class="skill-input">
    <h2>Your Skills</h2>
    <textarea v-model="skills" placeholder="List your skills separated by commas"></textarea>
    <button @click="analyzeSkills">Analyze</button>
  </div>
</template>

<script>
export default {
  props: ['jobId'],
  data() {
    return {
      skills: '',
    };
  },
  methods: {
    analyzeSkills() {
      this.$emit('analyze', this.skills.split(','));
    },
  },
};
</script>

<style scoped>
@import '../assets/global.css';
@import '../assets/skillInput.css';
</style>
