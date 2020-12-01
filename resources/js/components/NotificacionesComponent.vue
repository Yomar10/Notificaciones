<template>
    <div class="container mt-4">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card bg-dark text-white">
                    <div class="card-header bg-success"><h5>Nota: {{index+1}}  Creado el: {{nota.created_at}}</h5></div>
                    <div class="card-body">
                        <h4 v-if="modoedit">{{nota.contenido}}</h4>
                        <input v-else type="text" class="form-control" v-model="nota.contenido">
                    </div>
                    
                    <div class="card-body">
                        <button v-if="modoedit" type="submit" class="btn btn-success" v-on:click="onEditar">Editar</button>
                        <button v-else type="submit" class="btn btn-primary" v-on:click="onUpdate">Guardar</button>
                        <button type="submit" class="btn btn-danger" v-on:click="onEliminar">Eliminar</button>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['nota','index'],
        data(){
            return{
                modoedit:true
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            onEditar(){
                this.modoedit=false
            },
            onUpdate(contenido){
                this.modoedit=true
                contenido = "nota.contenido",
                this.$emit('update',contenido);
            },
            onEliminar(){
                this.$emit('eliminar')
            }
        }
    }
</script>
