<template>
  <div id="app">
    <!-- Navbar -->
    <header class="navbar">
      <div class="container">
        <h1 class="logo">Job Matcher</h1>
        <nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/profile" class="nav-link">Profile</router-link>
          <router-link to="/jobs" class="nav-link">Jobs</router-link>
        </nav>
      </div>
    </header>

    <div class="container">
      <!-- Main content rendered by router -->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
@import './assets/global.css';

/* Navbar Styling */
.navbar {
  background-color: #6a11cb;
  padding: 15px 0;
  color: #fff;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar .logo {
  font-size: 1.8rem;
  font-family: 'Calibri', sans-serif;
  font-weight: 700;
  color: #fff;
}

.navbar nav {
  display: flex;
  align-items: center;
}

.navbar .nav-link {
  text-decoration: none;
  font-size: 1.1rem;
  color: #fff;
  padding: 10px 15px;
  margin-left: 20px;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.navbar .nav-link:hover {
  background-color: #eaf6eb;
  color: #100e0e;
}

.navbar .nav-link:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .navbar .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar nav {
    margin-top: 15px;
    width: 100%;
  }

  .navbar .nav-link {
    width: 100%;
    text-align: left;
    padding: 12px;
  }
}
</style>
