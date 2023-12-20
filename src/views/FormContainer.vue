<template>
<div class="Forms">
    <table class="table table-bordered table-hover">
    <tr>
        <td>
        <TransactionVue :items="items" @addtolist="updateitems"
        @updatelist="Insertion" @removeList="Deletion"
        :itemlist="Itemlist" :page_load="render"/>
    </td>
    </tr>
    <tr><td>
        <Dispatch_dtlsVue :items="items" @addtolist="updateitems"
        :PreDocDtl="PreDocDtls" @Updater="PreDocDtlsUpdater"
        :value="Lister" @updatelist="Insertion" @removeList="Deletion"
        :itemlist="Itemlist" :page_load="render" @forward="moveForward" @backward="moveBackward"/>
    </td></tr>
    <tr><td>    
        <Seller_Buyer :items="items" @addtolist="updateitems"
        :PreDocDtl="PreDocDtls" @Updater="PreDocDtlsUpdater"
        :value="Lister" @updatelist="Insertion" @removeList="Deletion"
        :itemlist="Itemlist" :page_load="render" @forward="moveForward" @backward="moveBackward"/>
    </td></tr>
    <tr><td>
        <ItemListContainer :items="items" @addtolist="updateitems"
        :PreDocDtl="PreDocDtls" @Updater="PreDocDtlsUpdater"
        :value="Lister" @updatelist="Insertion" @removeList="Deletion"
        :itemlist="Itemlist" :page_load="render" @forward="moveForward" @backward="moveBackward"/>
    </td></tr>
    <tr><td>
        <val_dtls :items="items" @addtolist="updateitems"
        :PreDocDtl="PreDocDtls" @Updater="PreDocDtlsUpdater"
        :value="Lister" @updatelist="Insertion" @removeList="Deletion"
        :itemlist="Itemlist" :page_load="render" @forward="moveForward" @backward="moveBackward"/>

    </td></tr>
    <tr><td>
        <Doc :items="items" @addtolist="updateitems"
        :PreDocDtl="PreDocDtls" @Updater="PreDocDtlsUpdater"
        :value="Lister" @updatelist="Insertion" @removeList="Deletion"
        :itemlist="Itemlist" :page_load="render" @forward="moveForward" @backward="moveBackward"/>
    </td></tr>
    <tr><td>  
        <Eway_bil :items="items" @addtolist="updateitems"
        :PreDocDtl="PreDocDtls" @Updater="PreDocDtlsUpdater"
        :value="Lister" @updatelist="Insertion" @removeList="Deletion"
        :itemlist="Itemlist" :page_load="render" @forward="moveForward" @backward="moveBackward"/>
    </td></tr>
    </table>
</div>
</template>
<script>
   import {ref, onMounted, watchEffect} from 'vue';
import Doc from "@/views/Forms/Doc.vue";
import Dispatch_dtlsVue from './Forms/Dispatch_dtls.vue';
import TransactionVue from "./Forms/Transaction.vue";
import Seller_Buyer from "./Forms/Seller_Buyer.vue";
import ItemListContainer from "@/views/Forms/ItemListContainer.vue";
import itemList from '@/JsonContainer/itemlist.json';
import val_dtls from "@/views/Forms/Val_dtls.vue";
import ItemList from "@/views/Forms/ItemList.vue";
import Eway_bil from "@/views/Forms/Eway_bil.vue";
export default {

  //methods: {render},
  components: {
    Dispatch_dtlsVue,
    TransactionVue,
    Seller_Buyer,
    ItemListContainer,
    Doc,Eway_bil,val_dtls
  },
  setup() {
    const Itemlist=ref();
    const render = ref(1);
    const data = ref([]);
    //For ItemList
    const itemslist=ref([]);
    const items=ref(itemList.empty.ItemList[0]);
    const Lister=ref([{id:"1"}]);
    //PreDocDtls FlexBot
    const PreDocDtls=ref([itemList.empty.RefDtls.PrecDocDtls[0]]);
    //Page Changing Algorithm
    const currentDataIndex = ref(0);
    const renders = (page) => {
      render.value = page + 1;
    };
    //PreDocDtls List Updater
    const PreDocDtlsUpdater=(lsit)=>{
      PreDocDtls.value=lsit;
    }
    const updateitems=(list)=>{
      itemslist.value=list;
      ItemList.value.ItemList=itemslist.value;
    }
    const moveForward = async(newitemlists) => {
      //console.log(newitemlists);
      await renders(currentDataIndex.value + 1);
      currentDataIndex.value = (currentDataIndex.value + 1) % data.value.length;
      Itemlist.value=await newitemlists;
      console.log(Itemlist.value);
    };

    const moveBackward = async() => {
      await renders(currentDataIndex.value - 1);
      currentDataIndex.value = (currentDataIndex.value - 1 + data.value.length) % data.value.length;
    };
    const Insertion=async (items)=>{
      Lister.value=await items;
      console.log(Lister.value);
    }
    const Deletion=async (items)=>{
      /* const index=await Lister.value.findIndex(item=>item.id===items.id);
      if (index!==-1){
        await Lister.value.splice(index, 1);
      } */
      Lister.value=await items;
      console.log(Lister.value);
    }
    //Deleting ControlDtls and AddDocDtls
    watchEffect(async ()=>{
      await Itemlist.value;
    //   if(await Itemlist.value.RefDtls.ContrDtls[0]===null){
    //     delete await Itemlist.value.RefDtls.ContrDtls;
    //   }
    })

    // Simulate async data fetching on component mount
    onMounted(async () => {
      try {
        // Replace this with your actual data fetching logic
        //const response = await fetchData();
        //data.value = response.data;
        data.value=[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },{ id: 5 },
          { id : 6 },{ id : 7 },{ id : 8 }];
        Itemlist.value=await itemList.empty;
        //console.log(Itemlist.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    return {PreDocDtls,PreDocDtlsUpdater
      ,Insertion,Deletion,Lister
      , moveForward, moveBackward,
      render,Itemlist,
      items,updateitems, };
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 2s ease;
  color: lightblue;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s ease;
  color: lightblue;
}
.icons{
  font-size: small;
}
.coned{
  position: absolute;
}
button{
  align-content: center;
}
</style>
