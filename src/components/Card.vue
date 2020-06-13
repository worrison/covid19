<template>
    <div>

<b-card-group deck>
    <b-card title="Title" img-src="https://picsum.photos/300/300/?image=41" img-alt="Image" img-top>
      <b-card-text>
       {{descripcion}}
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
    </b-card-group>

    </div>
</template>









<script>
export default {
    data() {
        return {
        }
    },
    props: {
          descripcion:{
            type: String,
            default:''
          },
          title: {
             type: String,
            default:''
          }
  }
}
</script>
