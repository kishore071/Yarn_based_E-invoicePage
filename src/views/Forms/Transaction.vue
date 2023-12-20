<template>
  <div class="container">
    <div class="from-group">
      <form @submit.prevent="checker">
        <label class="info">Transaction Details</label>
        <div class="row">
          <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required :class=_Class[1] name="TaxSch" placeholder="TaxSch" v-model="TranDtls.TaxSch"/>
              <label for="floatingInputValue" class="fw-bold">Tax Scheme</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-floating mb-3">
            <select name="Typ" required class="form-select" id="floatingSelecter" v-model="TranDtls.SupTyp">
            <option value="B2B" selected>Business to Business</option>
            <option value="B2C">Business to Customer</option>
            <option value="SEZWP">To SEZ with Payment.</option>
            <option value="SEZWOP">To SEZ with Out Payment.</option>
            <option value="EXPWP">Export with Payment</option>
            <option value="EXPWOP">Export without Payment</option>
            <option value="WP">No</option>
            <option value="DEXP">Deemed Export</option>
            </select>
            <label for="floatingSelecter" class="fw-bold">Transaction Category</label>
            </div>
          </div>
          <div class="col-md-4">
          <div class="form-floating mb-3">
          <select name="Typ" class="form-select" id="floatingSelect" v-model="TranDtls.RegRev">
            <option value="Y" selected>Yes</option>
            <option value="N">No</option>
          </select>
            <label for="floatingSelect" class="input-label fw-bold">Whether Reverse Charge</label>
          </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text" :class=_Class[0] name="EcmGstin" placeholder="EcmGstin" v-model="TranDtls.EcmGstin"/>
              <label for="floatingInputValue" class="fw-bold">GSTIN Of E-Invoice Operator</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
            <select name="Typ" class="form-select is-valid" id="floatingSelect" v-model="TranDtls.IgstOnIntra">
              <option value="Y" selected>Yes</option>
              <option value="N">No</option>
            </select>
            <label for="floatingSelect" class="fw-bold">Igst On Intra</label>
            </div>
          </div>
        </div>
        <b class="info">Document Details</b>
        <div class="row">
          <div class="col-md-3">
            <div class="form-floating mb-3">
              <select name="Typ" required class="form-select is-valid" id="floatingSelect" v-model="DoctDtls.Typ">
                <option value="INV" selected>Invoice</option>
                <option value="CRN">Credit Note</option>
                <option value="DBN">Debit Note</option>
              </select>
              <label for="floatingSelect" class="fw-bold">Doc_Type</label>
            </div>
          </div>
          <div class="col-md-4">
        <div class="form-floating mb-3">
          <input type="text" required class="form-control" id="docno" name="No" placeholder="Document Number" v-model="DoctDtls.No">
          <label for="docno" class="fw-bold">Document_No</label>
        </div></div>
          <div class="col-md-5">
        <div class="form-floating mb-3">
          <input type="date" required name="Dt" class="form-control" id="Dt" v-model="DoctDtls.Dt">
          <label for="Dt" class="fw-bold">Document Date</label>
        </div>
          </div>
        </div>
        <button type="submit" v-if="disabled">Next Page</button>
      </form>
      <button v-if="!disabled" @click="next(itemlists)" :disabled="disabled">SellerPage</button>
      <!--          <span @click="emittion(1)"> next </span>-->
    </div>
  </div>
</template>
<script>
import {onMounted, ref, watchEffect,} from 'vue';
//import itemList from "@/views/Forms/ItemList.vue";
//import { useRouter } from 'vue-router';
import items from '@/JsonContainer/itemlist.json';
import {DateExchange} from "@/Functions/DefaultStructure";

export default{
  name:"TransactionVue",
  props:['page_load','itemlist'],
  setup(props,{emit}){
    //console.log(props.page_load);
    //console.log(props.itemlist);
    //const routs=useRouter();
    //const is_Valid_Class=ref<Boolean>([true,true,true,true,true,true,true,true]);
    const emitter=()=>{
      emit("moveForward",itemlists);
    };
    const _Class=ref(["is-valid","is-valid","is-valid","is-valid","is-valid","is-valid","is-valid","is-valid"]);
    const TranDtls=ref(items.empty.TranDtls);
    const DoctDtls=ref(items.empty.DocDtls);
    const disabled=ref(true);
    const itemlists=ref();
    //console.log(itemlists.value);
    const taxsch=ref("");
    const waitvalue=async ()=>{
      await props.itemlist;
    };
    onMounted(async()=>{
      await waitvalue();
      //await props.itemlist;
      itemlists.value=props.itemlist;
      console.log(itemlists.value);
      //console.log(itemlist.$schema[0])
      //console.log(TranDtls.value);
      //console.log(DocDtls.value);
    });
    watchEffect(()=>{
      //EcmGstin Validator
      if(TranDtls.value.EcmGstin===null){_Class.value[0]="form-control";}
      else{
      if(TranDtls.value.EcmGstin.length===15){
        _Class.value[0]="form-control is-valid"
      }
      else if(TranDtls.value.EcmGstin.length===0){
        _Class.value[0]="form-control";
      }
      else {
        _Class.value[0]="form-control is-invalid";
      }}
      //TaxSch Validater
      if(TranDtls.value.TaxSch.length===10 || TranDtls.value.TaxSch.length>=3){
        _Class.value[1]="form-control is-valid"
      }
      else if(TranDtls.value.TaxSch.length===0){
        _Class.value[1]="form-control";
      }
      else {
        _Class.value[1]="form-control is-invalid";
      }
    })
    const checker=async ()=>{
      //const {TaxSch,SupTyp,RegRev,IgstOnIntra,EcmGstin,Dt,No,Typ}=Object.fromEntries(new FormData(event.target));
      // itemlists.value.TranDtls.TaxSch=TranDtls.value.TaxSch;
      // itemlists.value.TranDtls.SupTyp=TranDtls.value.SupTyp;
      // itemlists.value.TranDtls.RegRev=TranDtls.value.RegRev;
      // itemlists.value.TranDtls.IgstOnIntra=TranDtls.value.IgstOnIntra;
      // itemlists.value.TranDtls.EcmGstin=TranDtls.value.EcmGstin;
      itemlists.value.TranDtls={...TranDtls.value};
      const value=DoctDtls.value.Dt;
      itemlists.value.DocDtls.Dt=DateExchange(new Date(value));
      DoctDtls.value.Dt=value;
      //console.log(DoctDtls.value.Dt.year);
      //itemlists.value.DocDtls.Dt=DoctDtls.value.Dt;
      itemlists.value.DocDtls.No=DoctDtls.value.No;
      itemlists.value.DocDtls.Typ=DoctDtls.value.Typ;
      if(taxsch.value!=null){
        disabled.value=false;
      }
      console.log(itemlists.value);
    }
    return{checker,disabled,itemlists,TranDtls,DoctDtls,_Class,emitter};
  },
  methods:{
    next(finallist){
      this.$emit('forward',finallist);
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .input-group {
    padding: 30px 40px 30px 40px;
    border-radius: 15%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .input-label {
    display: flex;
    align-items: baseline; /* Aligns the baseline of label content */
  }
  .input-label span {
    font-weight: bold;
    text-decoration: underline;
    margin-right: 4vw;
  }
  input,
  select {
    display: block;
    padding: 10px 60px 9px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    background-color:white;
    border-bottom: 1px solid #aaa;
    font-size:medium;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #555;
  }
</style>
  