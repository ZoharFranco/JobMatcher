<template>
  <div class="profile">
    <h2>User Profile</h2>

    <div class="form-section">
      <h3>Enter Your Qualities</h3>
      <form @submit.prevent="submitQualities">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" v-model="profile.name" id="name" required/>
        </div>

        <div class="form-group">
          <label for="qualities">Enter Your Qualities</label>
          <textarea v-model="profile.qualities" id="qualities" placeholder="e.g. Hardworking, Team Player"
                    required></textarea>
        </div>

        <button type="submit">Save Qualities</button>
      </form>
    </div>

    <div class="form-section">
      <h3>Skill Assessment</h3>
      <form @submit.prevent="submitSkills">
        <div class="form-group">
          <label for="frontend">Frontend Development</label>
          <input type="number" v-model="skills.frontend" id="frontend" min="1" max="5" required/>
        </div>

        <div class="form-group">
          <label for="backend">Backend Development</label>
          <input type="number" v-model="skills.backend" id="backend" min="1" max="5" required/>
        </div>

        <div class="form-group">
          <label for="design">UI/UX Design</label>
          <input type="number" v-model="skills.design" id="design" min="1" max="5" required/>
        </div>

        <button type="submit">Submit Skills</button>
      </form>
    </div>

    <!-- Display Profile and Skills -->
    <div v-if="profile.name && profile.qualities" class="profile-info">
      <h3>Your Profile</h3>
      <p><strong>Name:</strong> {{ profile.name }}</p>
      <p><strong>Qualities:</strong> {{ profile.qualities }}</p>
    </div>

    <div v-if="skills.frontend && skills.backend && skills.design" class="skills-info">
      <h3>Your Skills</h3>
      <p><strong>Frontend Development:</strong> {{ skills.frontend }} / 5</p>
      <p><strong>Backend Development:</strong> {{ skills.backend }} / 5</p>
      <p><strong>UI/UX Design:</strong> {{ skills.design }} / 5</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: '',
        qualities: '',
      },
      skills: {
        frontend: 1,
        backend: 1,
        design: 1,
      },
    };
  },
  methods: {
    submitQualities() {
      alert('Qualities saved successfully!');
    },
    submitSkills() {
      alert('Skills submitted successfully!');
    },
  },
};
</script>

<style scoped>
.profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2, h3 {
  font-family: 'Calibri', sans-serif;
  color: #333;
  margin-bottom: 20px;
}

.form-section {
  margin-bottom: 40px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 1rem;
  color: #555;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  height: 150px;
  resize: none;
}

button {
  padding: 10px 20px;
  background-color: #6a11cb;
  border: none;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}


button:hover {
  background-color: white;
  color: black;
  border-color: black;
}

.profile-info, .skills-info {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.profile-info p, .skills-info p {
  font-size: 1.2rem;
  color: #333;
}

.skills-info p {
  font-weight: bold;
}
</style>
