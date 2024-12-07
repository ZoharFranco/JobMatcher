<template>
  <div class="home">
    <h2>Welcome to Job Matcher</h2>
    <p>Find your dream job or improve your skills to get there!</p>
    <router-link to="/jobs" class="start-job-btn">Start Searching Jobs</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 50px 0;
}

.home h2 {
  margin: 3rem;
  font-size: 3rem;
}

.home p {
  margin: 3rem;
  font-size: 2rem;
}

.start-job-btn {
  margin-top: 100px;
  padding: 15px 30px;
  background-color: #6a11cb;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1.2rem;
  transition: background-color 0.3s;
}

.start-job-btn:hover {
  background-color: white;
  color: black;
}
</style>
