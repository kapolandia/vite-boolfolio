<script>
    export default{
        name: 'SingleProject',
        props:{
            projectResults: Object
        },
        mounted(){
            console.log(this.projectResults)
        }
    }

</script>

<template>
    <div class="col">
        <div class="card my-3">
            <div class="card-body">
                <h5 class="card-title">
                    {{ projectResults.name }}
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Client name: {{projectResults.client_name}}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Project slug: {{projectResults.slug}}</h6>
                <div v-if="projectResults.type">
                    <h6 class="card-subtitle mb-2 text-body-secondary">Project type: {{projectResults.type.name}}</h6>
                </div>
                <p>
                    {{projectResults.summary}}
                </p>
                <router-link :to="{name: 'project-view', params: {'slug':projectResults.slug}}" class="btn btn-primary">View more<i class="fa-solid fa-chevron-right ms-3"></i></router-link>
            </div>
        </div>
    </div>
</template>