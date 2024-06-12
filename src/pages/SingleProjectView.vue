<script>
  import axios from 'axios';

  export default{
    name: 'SingleProjectView',
    data(){
      return{
        project: [],
      };
    },
    methods:{
      getProjects(){
        axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
        .then((response)=> {
          this.project = response.data.project;
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
    <div class="container">
        <div class="card my-3">
            <div class="card-body">
                <h5 class="card-title">
                    {{ project.name }}
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Client name: {{project.client_name}}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Project slug: {{project.slug}}</h6>
                <div v-if="project.type">
                    <h6 class="card-subtitle mb-2 text-body-secondary">Project type: {{project.type.name}}</h6>
                </div>
                <p>
                    {{project.summary}}
                </p>
            </div>
        </div>
    </div>
</template>