<template>
  <div class="job-detail">
    <h2>{{ job.title }}</h2>
    <p>{{ job.description }}</p>

    <div class="comparison">
      <h3>Requirements vs Your Qualities</h3>
      <table>
        <thead>
        <tr>
          <th>Requirement</th>
          <th>Your Quality</th>
          <th>Match Percentage</th>
          <th>Suggested Courses</th>
        </tr>
        </thead>
        <tbody>
        <!-- Iterate through job requirements and compare -->
        <tr v-for="(requirement, index) in job.requirements" :key="index">
          <!-- Safeguard: Check if seeker qualities exist for this index -->
          <td>{{ requirement.skill }}</td>
          <td>{{ seekerQualities[index] ? seekerQualities[index].skill : 'N/A' }}</td>
          <td>
            <!-- Safeguard: Only calculate match if both requirement and seeker qualities are available -->
            {{ seekerQualities[index] ? calculateMatch(requirement, seekerQualities[index]) : 'N/A' }}%
          </td>
          <td>
            <a :href="courseUrls[index]" target="_blank" v-if="courseUrls[index]">Improve Here</a>
            <span v-else>No course available</span>
          </td>
        </tr>
        </tbody>
      </table>
      <p><strong>Overall Match:</strong> {{ overallMatch }}%</p>
    </div>

    <button @click="applyForJob">Apply Now</button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null,
      seekerQualities: [
        {skill: 'HTML', experience: 1}, // Frontend Developer
        {skill: 'Node.js', experience: 2}, // Backend Developer
        {skill: 'JavaScript', experience: 3}, // Full Stack Developer
      ],
      courseUrls: [
        'https://www.udemy.com/course/the-complete-web-development-bootcamp/', // HTML/CSS for Frontend
        'https://www.udemy.com/course/nodejs-the-complete-guide/', // Node.js for Backend
        'https://www.udemy.com/course/complete-javascript-course/', // JavaScript for Full Stack
      ],
    };
  },

  created() {
    const jobId = this.id;
    this.job = this.getJobById(jobId);
  },

  computed: {
    overallMatch() {
      const totalMatch = this.job.requirements.reduce((acc, requirement, index) => {
        // Ensure both requirement and seeker qualities are defined before calculating
        if (this.seekerQualities[index]) {
          return acc + this.calculateMatch(requirement, this.seekerQualities[index]);
        }
        return acc;
      }, 0);
      return (totalMatch / this.job.requirements.length).toFixed(2);
    }
  },

  methods: {
    getJobById(id) {
      const jobs = [
        {
          id: 1,
          title: 'Frontend Developer',
          description: 'Work with the latest web technologies.',
          requirements: [
            {skill: 'HTML', experience: 2},
            {skill: 'CSS', experience: 1},
            {skill: 'JavaScript', experience: 3},
            {skill: 'React', experience: 1},
          ],
        },
        {
          id: 2,
          title: 'Backend Developer',
          description: 'Build robust server-side applications.',
          requirements: [
            {skill: 'Node.js', experience: 3},
            {skill: 'Express', experience: 2},
            {skill: 'MongoDB', experience: 2},
            {skill: 'REST APIs', experience: 3},
          ],
        },
        {
          id: 3,
          title: 'Full Stack Developer',
          description: 'Handle both front-end and back-end tasks.',
          requirements: [
            {skill: 'HTML', experience: 2},
            {skill: 'CSS', experience: 2},
            {skill: 'JavaScript', experience: 3},
            {skill: 'Node.js', experience: 2},
            {skill: 'React', experience: 2},
            {skill: 'MongoDB', experience: 2},
          ],
        },
      ];
      return jobs.find((job) => job.id == id);
    },

    calculateMatch(requirement, seeker) {
      let matchPercentage = 0;

      // Check if skill matches
      if (requirement.skill.toLowerCase() === seeker.skill.toLowerCase()) {
        matchPercentage = 100; // Exact match
      } else {
        matchPercentage = 0;
      }

      // Check experience match (can adjust logic as per requirements)
      const experienceDifference = Math.abs(requirement.experience - seeker.experience);
      const experienceMatch = Math.max(0, 100 - experienceDifference * 20); // Simple experience difference logic

      return Math.round((matchPercentage + experienceMatch) / 2); // Average of skill and experience match
    },

    applyForJob() {
      alert('You applied for the job!');
    },
  },
};
</script>

<style scoped>
.job-detail {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.comparison {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

a {
  color: #6a11cb;
  text-decoration: none;
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
  background-color: #6a11cb;
}
</style>
