<template>
  <div class="json-viewer">
    <button @click="GetDatas">Key Generator</button>
    <pre v-if="jsonkey===null">{{ JSON.stringify(jsonfinale, null, 2) }}</pre>
    <div v-else>{{jsonkey}}</div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import axios from "axios";
import {removeInvalids} from "@/Functions/DefaultStructure";

export default {
  props:{'itemlist':Object},
  setup(props){
    const jsonfinale=ref();
    const jsonkey=ref(null);
    const dataintialiazer=async ()=>{
       await props.itemlist;
    }
    onMounted(async ()=>{
      await dataintialiazer();
      jsonfinale.value=await props.itemlist;
      jsonfinale.value=await removeInvalids(jsonfinale.value);
      console.log(await removeInvalids(jsonfinale.value));
    })
    const GetDatas=async ()=>{
      // const parameters={
      //   customermember:'kishore'
      // }
      try {
        const response=await axios.get('http://localhost:3030');
        console.log(response.data);
        jsonkey.value=response.data;
      }
      catch (e){
        console.log("Error Details"+e);
      }
    };
    return{jsonfinale,GetDatas,jsonkey}
  },
}
</script>

<style scoped>
.json-viewer {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  white-space: pre-wrap;
}
</style>