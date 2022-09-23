<template> 
  <h1 class = "display-1 text-bold"> About </h1> 
  <h1 class = "text-gray-soft text-regular"> about page </h1>

    <div class="scroll-box" ref="scrollBox">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis
    felis mauris, vel dapibus nulla molestie laoreet. Nunc porttitor metus
    faucibus ante pellentesque, ac maximus augue cursus. Fusce hendrerit, eros
    dictum accumsan hendrerit.
  </div>
  <p>{{ scroll }}</p> 
</template>

<script> 
//import { ref } from 'vue';
import { useScroll } from '@vueuse/core';


export default { 
  data () {
    return {
      scrollBox: '',
      scroll: ''
    }
  },
  created () {
    console.log(this.$refs.scrollBox)
    // this.scrollBox = this.$refs.scrollBox;
    // console.log(this.scrollBox);
    // this.scroll = useScroll(this.scrollBox);
  },
  mounted () {
    console.log(this.$refs.scrollBox)
    this.scrollBox = this.$refs.scrollBox;
    console.log(this.scrollBox);
    this.scroll = useScroll(this.scrollBox);
  }
}; 
</script>

<style>
.scroll-box {
  background: gray;
  height: 150px;
  width: 100px;
  overflow: scroll;
  position: relative;
  padding: 10px;
}
</style>
