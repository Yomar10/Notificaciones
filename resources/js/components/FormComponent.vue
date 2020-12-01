<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header bg-primary"><h5>Panel</h5></div>
                    <div class="card-body">                        
                        <form action="" v-on:submit.prevent="onClickAdd()">
                            <div class="form-group">
                                <label>Ingrese Notas</label>
                                <input type="text" class="form-control" id="" v-model="contenido">
                                <small id="emailHelp" class="form-text" v-bind:class="[error ?'text-primary':'text-danger']">{{mensaje}}</small>
                            </div>
                            <button type="submit" class="btn btn-primary">Ingresar Notass</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            contenido:'',
            error:true,
            mensaje:'Maximo 500 caracteres'
        }
    },
    methods:{
        onClickAdd(){
            // alert(",asjkajsk")
            let nuevanota = {
                contenido:this.contenido,
                created_at:'29/11/2019'
            }
            if(this.contenido==""){
                this.error = false;
                this.mensaje='contenido vacío, por favor ingrese contenido a la nota'
            }else{
                this.$emit('nuevo',nuevanota);
                this.contenido='';
                this.mensaje='Maximo 500 caracteres';
                this.error=true;
            }
            
        }
    }
}
</script>