<template>
  <div class="container">
    <div class="from-group">
      <div class="row">
        <form @submit.prevent="validater" class="col">
          <label class="info">Dispatch Details</label>
            <div class="form-floating mb-3">
              <input type="text" required name="Nm" class="form-control" id="dispatcherName" placeholder="Dispatcher Name (e.g: 'ABC company pvt ltd')" v-model="DispDtls.Nm"/>
              <label for="dispatcherName">Dispatcher Name</label>
            </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" required name="Addr1" class="form-control" id="dispatchAddress1" placeholder="Addr1:(e.g: '7th block, kuvempu layout')" v-model="DispDtls.Addr1"/>
                <label for="dispatchAddress1">Dispatch Address 1</label>
              </div></div>
            <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" name="Addr2" class="form-control" id="dispatchAddress2" placeholder="Addr2:(e.g: 'kuvempu layout')" v-model="DispDtls.Addr2"/>
                <label for="dispatchAddress2">Dispatch Address 2</label>
              </div></div>
          </div>
          <div class="row">
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="Loc" class="form-control" id="dispatchLocation" placeholder="Dispatch Location (e.g: Bangalore)" v-model="DispDtls.Loc"/>
              <label for="dispatchLocation">Dispatch Location</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="number" required name="Pin" class="form-control" id="dispatchPin" placeholder="Dispatch Pin (e.g: 560001)" v-model="DispDtls.Pin"/>
              <label for="dispatchPin">Dispatch Pin</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="State_code" class="form-control" id="dispatchStateCode" placeholder="Dispatch State Code (e.g: 29)" v-model="DispDtls.Stcd"/>
              <label for="dispatchStateCode">Dispatch State Code</label>
            </div></div>
          </div>
<!-- Shipment Details is Below Here in Form format        -->
          <label class="info">Shipment Details</label>
          <div class="row">
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" name="Gstin" class="form-control" id="shipmentGstin" placeholder="GSTIN (e.g: '29AWGPV7107B1Z1')" v-model="ShipDtls.Gstin"/>
              <label for="shipmentGstin">GSTIN</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="LglNm" class="form-control" id="shipmentLegalName" placeholder="Legal Name:(e.g: 'CBE company pvt ltd')" v-model="ShipDtls.LglNm"/>
              <label for="shipmentLegalName">Legal Name</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" name="TrdNm" class="form-control" id="shipmentTraderName" placeholder="Trade Name:(e.g: 'kuvempu layout')" v-model="ShipDtls.TrdNm"/>
              <label for="shipmentTraderName">Trade Name</label>
            </div></div>
            </div>
          <div class="row">
            <div class="col-md-6">
            <div class="form-floating mb-3">
              <input type="text" required name="Addr1" class="form-control" id="shipmentAddress1" placeholder="Addr1:(e.g: '7th block, kuvempu layout')" v-model="ShipDtls.Addr1"/>
              <label for="shipmentAddress1">Shipment Address 1</label>
            </div></div>
            <div class="col-md-6">
            <div class="form-floating mb-3">
              <input type="text" name="Addr2" class="form-control" id="shipmentAddress2" placeholder="Addr2:(e.g: 'kuvempu layout')" v-model="ShipDtls.Addr2"/>
              <label for="shipmentAddress2">Shipment Address 2</label>
            </div></div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input type="text" required name="Loc" class="form-control" id="shipmentLocation" placeholder="Shipment Location (e.g: Bangalore)" v-model="ShipDtls.Loc"/>
                <label for="shipmentLocation">Shipment Location</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input type="number" required name="Pin" class="form-control" id="shipmentPin" placeholder="Shipment Pin (e.g: 560001)" v-model="ShipDtls.Pin"/>
                <label for="shipmentPin">Shipment Pin</label>
              </div></div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input type="text" required name="StateCode" class="form-control" id="shipmentStateCode" placeholder="Shipment State Code (e.g: 29)" v-model="ShipDtls.Stcd"/>
                <label for="shipmentStateCode">Shipment State Code</label>
              </div></div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <button @click.self="emittion(itemlists)" class="btn btn-secondary">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import items from '@/JsonContainer/itemlist.json';
    export default {
        props:['page_load','itemlist'],
        setup(props){
          //console.log(page);
          const DispDtls=ref(items.empty.DispDtls);
          const ShipDtls=ref(items.empty.ShipDtls);
          const itemlists=ref();
          /* const emittion=()=>{
            emit("change",props.page_load);
          } */
          const mount=async ()=>{
            await props.itemlist;
          };
          onMounted(async ()=>{
            await mount();
            itemlists.value=await props.itemlist;
            console.log(itemlists.value);
          });
          const validater=async ()=>{
            //const{}
            // itemlists.value.DispDtls.Nm=DispDtls.value.Nm;
            // itemlists.value.DispDtls.Stcd=DispDtls.value.Stcd;
            itemlists.value.DispDtls.Pin=await Number(DispDtls.value.Pin);
            // itemlists.value.DispDtls.Addr1=DispDtls.value.Addr1;
            // itemlists.value.DispDtls.Addr2=DispDtls.value.Addr2;
            // itemlists.value.DispDtls.Loc=DispDtls.value.Loc;
            itemlists.value.DispDtls={...DispDtls.value}
            // itemlists.value.ShipDtls.Gstin=ShipDtls.value.Gstin;
            // itemlists.value.ShipDtls.LglNm=ShipDtls.value.LglNm;
            // itemlists.value.ShipDtls.TrdNm=ShipDtls.value.TrdNm;
            // itemlists.value.ShipDtls.Addr1=ShipDtls.value.Addr1;
            // itemlists.value.ShipDtls.Addr2=ShipDtls.value.Addr2;
            // itemlists.value.ShipDtls.Loc=ShipDtls.value.Loc;
            itemlists.value.ShipDtls.Pin=await Number(ShipDtls.value.Pin);
            itemlists.value.ShipDtls={...ShipDtls.value}
            // itemlists.value.ShipDtls.Stcd=ShipDtls.value.Stcd;
          };
          return{itemlists,validater,DispDtls,ShipDtls};
        },
        methods:{
          emittion(itemlists){
            this.$emit("forward",itemlists);
          }
        },
    }
</script>


<style>
.info{
  margin-top: auto;
  font-weight: bolder;
  font-size: larger;
}
</style>