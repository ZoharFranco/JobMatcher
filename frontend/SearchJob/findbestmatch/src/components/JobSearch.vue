<template>
  <div class="job-search">
    <h2>Search for Jobs</h2>
    <input v-model="query" placeholder="Enter job title or keyword"/>
    <button @click="searchJobs">Search</button>

    <ul>
      <li v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
          {{ job.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      jobs: [
        {id: 1, title: 'Frontend Developer'},
        {id: 2, title: 'Backend Developer'},
        {id: 3, title: 'Full Stack Developer'},
      ],
    };
  },
  methods: {
    searchJobs() {
      this.jobs = this.jobs.filter((job) => job.title.toLowerCase().includes(this.query.toLowerCase()));
    },
  },
};
</script>

<style scoped>
@import '../assets/global.css';
@import '../assets/jobSearch.css';
</style>
