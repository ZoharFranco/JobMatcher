<template>
  <div class="jobs">
    <h2>Job Listings</h2>
    <div class="job-list">
      <div v-for="job in jobs" :key="job.id" class="job-card">
        <h3>{{ job.title }}</h3>
        <p>{{ job.description }}</p>
        <!-- Make sure the router-link passes the correct id -->
        <router-link :to="'/jobs/' + job.id" class="view-job-btn">...</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Simulating job data
      jobs: [
        {id: 1, title: 'Frontend Developer', description: 'Work with the latest web technologies.'},
        {id: 2, title: 'Backend Developer', description: 'Build robust server-side applications.'},
        {id: 3, title: 'Full Stack Developer', description: 'Handle both front-end and back-end tasks.'},
      ],
    };
  },
};
</script>

<style scoped>
.jobs h2 {
  font-size: 3rem;
}

.jobs {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
}

.job-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.job-card {
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.job-card h3 {
  font-size: 2rem;
  color: #333;
}

.job-card p {
  color: #666;
  font-size: 1.4rem;
}

.view-job-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #a959ff;
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.view-job-btn:hover {
  background-color: #f4f6f4;
  color: black;
}
</style>
