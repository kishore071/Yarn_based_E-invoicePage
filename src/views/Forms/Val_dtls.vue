<template>
<div class="center-container">
    <div class="input-group">
     <form @submit.prevent="validater">
       <div class="ValPay">
         <label class="info">DOCUMENT TOTAL</label>
         <div class="row">
           <div class="col-md-4">
         <div class="form-floating mb-2">
           <input type="text" required name="AssVal" class="form-control is-invalid" v-model="ValDtls.AssVal" placeholder="Assessable Value:e.g:('9978.84')">
           <label for="AssVal" class="fw-bold">Assesable Value of all items</label>
         </div></div>
           <div class="col-md-4">
         <div class="form-floating mb-2">
           <input type="text" name="CgstVal" class="form-control" v-model="ValDtls.CgstVal" placeholder="Cgst Value:e.g:('0')">
           <label for="CgstVal" class="fw-bold">CGST Value of all items</label>
         </div></div>
           <div class="col-md-4">
         <div class="form-floating mb-2">
           <input type="text" name="SgstVal" class="form-control" v-model="ValDtls.SgstVal" placeholder="Sgst Value:e.g:('0')">
           <label for="SgstVal" class="fw-bold">SGST Value of all items</label>
         </div></div>
         </div>
         <div class="row">
           <div class="col-md-4">
           <div class="form-floating mb-3">
            <input type="text" name="IgstVal" class="form-control"
                   v-model="ValDtls.IgstVal"
                   placeholder="Igst Value:e.g:('1197.46')">
             <label class="fw-bold" for="Igstval">IGST Value of all items</label>
           </div></div>
           <div class="col-md-4">
           <div class="form-floating mb-3">
             <input type="text" name="CesVal" class="form-control"
                   v-model="ValDtls.CesVal"
                   placeholder="Ces Value:e.g:('508.9')">
             <label class="fw-bold" for="CesVal">Cess Value of all items</label>
           </div></div>
           <div class="col-md-4">
           <div class="form-floating mb-3">
            <input type="text" name="StCesVal" class="form-control"
                   v-model="ValDtls.StCesVal"
                   placeholder="StCes Value:e.g:('1202.46')">
           <label class="input-label fw-bold" for="StCesVal">State Cess Value of all items</label>
         </div></div>
         </div>
         <table class="table-bordered table-responsive container">
           <thead class="thead-dark">
           <tr>
             <th>Invoice Discount</th>
             <th>Invoice Other Charges</th>
             <th>Round-Off Amount</th>
             <th>Total Invoice Value</th>
             <th>Invoice Value(Additional Currency)</th>
           </tr>
           </thead>
           <tbody>
           <tr>
             <td>
               <div class="form-floating">
               <input type="text" name="Discount" class="form-control"
                   v-model="ValDtls.Discount"
                   placeholder="Discount:e.g:('10')">
               <label for="Discount" class="fw-bold">Discount</label>
               </div></td>
             <td>
               <div class="form-floating">
               <input type="text" name="OthChrg" class="form-control"
                   v-model="ValDtls.OthChrg"
                   placeholder="OthCharges:e.g:('20')">
               <label for="OthChrg" class="fw-bold">Other Charges</label>
               </div></td>
             <td>
               <div class="form-floating">
               <input type="text" name="RndOffAmt" class="form-control"
                   v-model="ValDtls.RndOffAmt"
                   placeholder="Round Off Amount:e.g:('20')">
               <label for="RndOffAmt" class="fw-bold">Round-Off</label>
               </div></td>
             <td>
               <div class="form-floating">
               <input type="text" name="TotInvVal" required class="form-control"
                   v-model="ValDtls.TotInvVal"
                   placeholder="TotalInvVAl:e.g:('12908')">
               <label for="TotInvVal" class="fw-bold">Total Invoice</label>
               </div></td>
             <td>
               <div class="form-floating">
                 <input type="text" name="TotInvValFc" class="form-control"
                   v-model="ValDtls.TotInvValFc"
                   placeholder="TotalInvVAl:e.g:('12908')">
                 <label for="TotInvValFc" class="fw-bold">Total Inv Additional</label></div>
             </td>
           </tr></tbody></table>
        </div>
        <div class="paydtls">
            <label class="info">PAYEE DETAILS</label>
          <div class="row">
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input type="text" name="Nm" class="form-control"
                       v-model="PayDtls.Nm"
                       placeholder="Payee Name:e.g:('ABCDE')">
              <label class="fw-bold" for="Nm">Payee Name</label></div>
            </div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
              <input type="text" name="AccDet" class="form-control"
                       v-model="PayDtls.AccDet"
                       placeholder="Account Details:e.g:('5697389713210')">
              <label for="AccDet" class="input-label fw-bold">Account Details</label>
            </div></div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input type="text" name="Mode" class="form-control"
                       v-model="PayDtls.Mode"
                       placeholder="Payment Mode:e.g:('CASH')">
                <label class="fw-bold" for="Mode">Payment Mode</label>
                </div></div>
          </div>
          <table class="table-bordered table-responsive">
            <thead>
            <tr>
              <th>Branch or IFSC Code</th>
              <th>Payment Term</th>
              <th>Payment Instruction</th>
              <th>Credit Transfer</th>
              <th>Direct Debit</th>
              <th>Credit Days</th>
              <th>Paid Amount</th>
              <th>Payment Due</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <div class="form-floating">
                <input type="text" name="Fininsbr" class="form-control"
                       v-model="PayDtls.Fininsbr"
                       placeholder="IFSC CODE:e.g:('SBIN11000')">
                <label class="fw-bold" for="Fininsbr">
                  Branch or IFSC Code</label></div>
            </td>
              <td>
                <div class="form-floating">
                <input type="text" name="Payterm" class="form-control"
                       v-model="PayDtls.Payterm"
                       placeholder="Payterm:e.g:('100')">
                <label class="input-label fw-bold" for="Payterm">Payment Term</label>
                </div></td>
              <td>
                <div class="form-floating">
                <input type="text" name="Payinstr" class="form-control"
                       v-model="PayDtls.Payinstr"
                       placeholder="PayInstruction:e.g:('Gift')">
                <label class="input-label fw-bold" for="Payinstr">Payment Instruction</label>
                </div></td>
              <td>
                <div class="form-floating">
                <input type="text" name="Crtrn" class="form-control"
                       v-model="PayDtls.Crtrn"
                       placeholder="Credit Transfer:e.g:('test')">
                <label class="fw-bold" for="Crtrn">Credit Transfer</label>
              </div></td>
              <td>
                <div class="form-floating">
                <input type="text" name="Dirdr" class="form-control"
                       v-model="PayDtls.Dirdr"
                       placeholder="Direct Debit:e.g:('test')">
                <label class="fw-bold" for="Dirdr">Direct Debit</label>
              </div></td>
              <td>
                <div class="form-floating">
                <input type="text" name="Crday" class="form-control"
                       v-model="PayDtls.Crday"
                       placeholder="Credit Days:e.g:('100')">
                <label class="input-label fw-bold" for="Crday">Credit Days</label>
              </div></td>
              <td>
                <div class="form-floating">
                <input type="text" name="Paidamt" class="form-control"
                       v-model="PayDtls.Paidamt"
                       placeholder="Paid Amount:e.g:('10000')">
                <label class="fw-bold" for="Paidamt">Paid Amount</label>
                </div></td>
              <td>
                <div class="form-floating">
                <input type="text" name="Paymtdue" class="form-control"
                       v-model="PayDtls.Paymtdue"
                       placeholder="Payment due:e.g:('5000')">
                <label class="input-label fw-bold" for="Paymtdue">Payment Due</label>
              </div></td>
            </tr></tbody>
          </table>
        </div>
        <button type="submit">Submit</button>
     </form>
      <button @click="nextpage" :disabled="buttonvalidator">Push Details</button>
    </div>
</div>
</template>

<script>
import { onMounted, ref} from "vue";
import itemref from '@/JsonContainer/itemlist.json'
    export default {
        props:{'itemlist':Object},
        // eslint-disable-next-line vue/multi-word-component-names
        name:"Payment",
      setup(props,{emit}){
          const ValDtls=ref(itemref.empty.ValDtls);
          const PayDtls=ref(itemref.empty.PayDtls);
          const fulllist=ref();
          const buttonvalidator=ref(true);
          const loader=async ()=>{
            await props.itemlist;
          }
        onMounted(async ()=>{
          await loader();
          fulllist.value=await props.itemlist;
        });
          const validater=async ()=>{
            //console.log(formattedValDtls);
            ValDtls.value.AssVal=await Number(ValDtls.value.AssVal).toFixed(3);
            ValDtls.value.AssVal=await Number(ValDtls.value.AssVal);
            ValDtls.value.TotInvVal=await Number(ValDtls.value.TotInvVal).toFixed(3);
            ValDtls.value.TotInvVal=await Number(ValDtls.value.TotInvVal)
            fulllist.value.ValDtls={...ValDtls.value};
            PayDtls.value.Crday=await Number(PayDtls.value.Crday);
            PayDtls.value.Paymtdue=await Number(PayDtls.value.Paymtdue);
            fulllist.value.PayDtls={...PayDtls.value};
            buttonvalidator.value=false;
            console.log(fulllist.value);
          }
        const nextpage=()=>{
            emit('forward',fulllist.value);
        }
        return{ValDtls,PayDtls,nextpage,buttonvalidator,validater}
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