<script>
  import axios from 'axios';
  import SingleProject from './SingleProject.vue'

  export default{
    name: 'ProjectList',
    components: {
      SingleProject,
    },
    data(){
      return{
        projects: [],
      };
    },
    methods:{
      getProjects(){
        axios.get('http://127.0.0.1:8000/api/projects')
        .then((response)=> {
          this.projects = response.data.projects;
          console.log("called");
        });
      }
    },
    mounted(){
      this.getProjects();
    }


  }
</script>

<template>
  <div class="container mt-5">
    
    <h1>Progetti</h1>
    
    <div class="row row-cols-3">
      <SingleProject v-for="project in projects" :projectResults="project" :key="project.id"></SingleProject>
    </div>

  </div>
</template>

<style scoped>
</style>
