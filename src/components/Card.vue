<template>
    <b-card
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  {{title}}
    <b-card-text>
      {{descripcion}}
    </b-card-text>

    <b-button href="#" variant="primary">Ver</b-button>
  </b-card>
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
