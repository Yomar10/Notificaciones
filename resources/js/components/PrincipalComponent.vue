<template>
    <div>
        <form-component @nuevo="nuevo"
        
        ></form-component>
        <notificaciones-component
        
        v-for="(nota,index) in notas" 
        :key="nota.id"
        :nota="nota"
        :index="index"
        @update="update(index, ...arguments)"
        @eliminar="eliminar(index)"
        ></notificaciones-component>
        
    </div>    
</template>
<script>
import NotificacionesComponent from './NotificacionesComponent.vue';
export default {
    data(){
        return{
            notas:[{
                'contenido':'Actualiza la base de datos',
                'created_at':'29/11/2019'
            }],
        };
    },
    methods: {
        nuevo(nuevanota){
            this.notas.push(nuevanota)
        },
        update(index,contenido){
            this.notas[index] = contenido;
        },
        eliminar(index){
            this.notas.splice(index,1);
        }
    }
}
</script>