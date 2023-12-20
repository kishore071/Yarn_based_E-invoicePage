<template>
  <div>
    <div>
      <div v-for="(component) in componentList" :key="component.id">
        <item-lists :itemsSlNo="component.id" @listupdate="listadd"/>
        <button @click="removeComponent(component.id)" v-if="componentList.length>1">Remove Component</button>
        <button @click.self="addComponent">
          <span class="material-icons design">add</span>
          Add Component</button>
      </div>
      <button v-if="render>0" @click.self="pagepush">Click View</button>
    </div>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid';
import {onMounted, ref} from 'vue';
import ItemLists from "@/views/Forms/ItemList.vue";

export default {
  props:['itemlist','value','items'],
  components:{ItemLists},
  setup(props,{emit}){
    const render=ref(0);
    const componentList=ref([]);
    //const listitems=ref([]);
    const referece=ref();
    console.log(referece.value)
    const fulllist=ref();

    const listadd = async (lists) => {
      const index = fulllist.value.ItemList.findIndex(item => item.SlNo === lists.SlNo);
      if (index !== -1) {
        // Update only the changed parameters
        const existingData = fulllist.value.ItemList[index];
        for (const key in lists) {
          if(Object.prototype.hasOwnProperty.call(existingData, key) && existingData[key] !== lists[key]){
             existingData[key] = lists[key];
             render.value++;
          }
        }
        //console.log("Data updated:", existingData);
      } else {
        // Data not found, push the new data
        fulllist.value.ItemList.push(lists);
        render.value++;
        console.log("Data appended:", lists);
      }
    };

    const addComponent = async() => {
      const newComponent = createNewItem();
      await componentList.value.push(newComponent);
      await emit('updatelist',componentList.value);
    };
    // Create a new item with default values
    const createNewItem = () => {
      return {id: SinoGenerator()};
    };
    const renderlist=async ()=>{
      await props.itemlist;
      await props.value;
    }
    const SinoGenerator=()=>{
      return uuidv4().slice(0,4);
    }
    onMounted(async ()=>{
      await renderlist();
      fulllist.value=await props.itemlist;
      //Pushing the values inside the list
      componentList.value=await props.value;
      console.log(componentList.value[0].id);
      console.log(componentList.value);
      if(componentList.value.length===1 && fulllist.value.ItemList[0].IsServc===''){
        console.log("never website updated");
        fulllist.value.ItemList[0].SlNo="1";
      }
      else if(componentList.value.length===0){
        componentList.value.push(createNewItem());
        await emit("updatelist",componentList.value);
      }
      console.log(componentList.value);
      //Full List value appends
      console.log(fulllist.value);
      //fulllist.value.Itemlist.pop();
      //console.log(componentList.value)
    })
    const pagepush=()=>{
      emit('forward',fulllist.value);
    }
    const removeComponent=async(id)=>{
      const index = componentList.value.findIndex((component) => component.id === id);
      const fullindex = fulllist.value.ItemList.findIndex(item => item.SlNo === id);
      if (index !== -1) {
        componentList.value.splice(index, 1);
      }
      if(fullindex!==null){
        fulllist.value.ItemList.splice(fullindex,1);
      }
      console.log(componentList.value);
      await emit('removeList',componentList.value);
    };
    return{componentList,addComponent,removeComponent,render,listadd,pagepush}
  },
  methods:{
    emittion(page){
      this.$emit("change",page);
    }
  },
}
</script>

<style>

</style>