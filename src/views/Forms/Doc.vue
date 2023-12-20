<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="Docdtls">
        <div class="center-container">
            <div class="input-group">
              <form @submit.prevent="validater">
                <label for="" class="info">Reference Details</label>
                <div class="form-floating mb-6">
                  <input type="text" required class="form-control"
                         v-model="RefDtls.InvRm"
                         name="InvRm" placeholder="Invoice Remarks:(e.g:'TEST')" />
                  <label class="fw-bold" for="InvRm">Invoice Remarks
                    <span class="star">*</span></label>
                </div>
                <label class="info"> Document Period Details</label>
                <div class="row">
                <div class="col-md-6">
                <div class="form-floating mb-3">
                    <input type="date" required class="form-control"
                           v-model="RefDtls.DocPerdDtls.InvStDt"
                           name="InvStDt" placeholder="" />
                  <label class="fw-bold" for="InvStDt">
                    Invoice Start Date
                    <span class="star"> *</span></label></div>
                </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3">
                    <input type="date" required class="form-control"
                           v-model="RefDtls.DocPerdDtls.InvEndDt"
                           name="InvEndDt" placeholder="" />
                    <label class="fw-bold" for="InvEndDt">
                      <span>Invoice End Date:</span>
                </label></div></div>
                </div>
                <table class="table-bordered table">
                  <thead>
                  <tr>
                    <th>Add Document</th>
                    <th>Invoice Number</th>
                    <th>Invoice Date</th>
                    <th>Other Reference</th>
                    <th>Delete Document</th>
                  </tr>
                  </thead>
                <tbody class="PreDocDtls" v-for="products in PreDocDtls" :key="products.InvNo">
                <tr>
                  <td>
                    <button @click="addlist"><span class="material-icons">add_to_queue</span></button>
                  </td>
                  <td>
                    <div class="form-floating">
                    <input type="text" required readonly class="form-control"
                           v-model="products.InvNo" name="InvNo" placeholder="" />
                    <label class="input-label fw-bold">
                      Preceding Invoice Number<span class="star">*</span></label>
                    </div></td>
                  <td>
                    <div class="form-floating">
                      <input type="date" @input="event => updateDate(event, products)" class="form-control"
                         v-model="products.InvDt"
                         name="InvNo" placeholder="" />
                      <label for="InvNo" class="fw-bold">
                        Preceding Invoice Date<span class="star"> *</span></label>
                    </div></td>
                  <td>
                    <div class="form-floating">
                      <input type="text" class="form-control"
                         v-model="products.OthRefNo"
                         name="OthRefNo" placeholder="" />
                      <label class="fw-bold" for="OthRefNo">
                        Other Reference<span class="star"> *</span>
                      </label></div></td>
                  <td>
                  <button @click="existingdeleter(products.InvNo)" :disabled="PreDocDtls.length===1">Delete Preceding Doc {{products.InvNo}}</button>
                  </td></tr></tbody></table>
                <button type="submit" v-if="!buttonvalidater">Submit Data</button>
              </form>
              <button @click="pushNext" v-if="buttonvalidater"> Next Page</button>
            </div>
        </div>
    </div>
</template>

<script>
import {onMounted, ref} from "vue";
import itemlisterpart from '@/JsonContainer/itemlist.json';
import {v4 as uuidv4} from 'uuid';
    export default {
      props:{'itemlist':Object,'PreDocDtl':Object},
      setup: function (props, {emit}) {
        const items = ref();
        const PreDocDtls = ref([]);
        const RefDtls=ref(itemlisterpart.empty.RefDtls);
        //PreDocDtls.value[0].InvNo=SinoGenerator();
        const createNewItemdata = () => {
          return {
            InvNo: SinoGenerator(),
            InvDt: '',
            OthRefNo: ''
          };
        };
        const updateDate = (event, product) => {
          const inputDate = event.target.value;
          const [year, month, day] = inputDate.split("-");
          const formattedDate = `${day}/${month}/${year}`;
          product.InvDt = formattedDate;
        };
        const existingdeleter=(InvNo)=>{
          const index=PreDocDtls.value.findIndex((indexer)=>indexer.InvNo===InvNo);
          if(index!==null){
            PreDocDtls.value.splice(index,1);
          }
        }
        const addlist = () => {
          PreDocDtls.value.push(createNewItemdata());
        }
        const SinoGenerator = () => {
          return uuidv4().slice(0, 6);
        }
        const loader = async () => {
          await props.itemlist;
          await props.PreDocDtl;
        };
        onMounted(async () => {
          await loader();
          //total itemlist is added here
          items.value = await props.itemlist;
          PreDocDtls.value = await props.PreDocDtl;
          if (items.value.RefDtls.PrecDocDtls[0].InvNo === "") {
            const num = SinoGenerator();
            items.value.RefDtls.PrecDocDtls[0].InvNo = num;
            PreDocDtls.value[0].InvNo = num;
          }
          //pushing the itemlist PreDocDtls inside a temp list
        });
        const buttonvalidater = ref(false);
        const validater = () => {
          items.value.RefDtls={...RefDtls.value};
          items.value.RefDtls.PrecDocDtls=[...PreDocDtls.value];
          console.log(items.value);
          buttonvalidater.value=true;
        }
        const pushNext = () => {
          emit('forward', items.value);
        }
        return {items,RefDtls,updateDate,existingdeleter,buttonvalidater, validater, pushNext, PreDocDtls,createNewItemdata,addlist}
      }

    }
</script>

<style >

</style>