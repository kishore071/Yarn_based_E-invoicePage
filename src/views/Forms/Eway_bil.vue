<template>
  <div class="container">
    <div class="input-group">
      <form @submit.prevent="submitForm">
        <label class="info">E-way Bill Details</label>
        <table class="table-bordered table">
          <thead>
          <tr>
            <th>Distance</th>
            <th>Transid</th>
            <th>Transname</th>
            <th>Transdocno</th>
            <th>TransdocDt</th>
            <th>Vehno</th>
            <th>Vehtype</th>
            <th>TransMode</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div class="form-floating mb-3">
                <input type="number" v-model="ewbDtls.Distance" required class="form-control" placeholder="Distance">
                <label for="Distance" class="fw-bold">Distance:</label>
              </div>
            </td>
            <td>
              <div class="form-floating mb-3">
                <input type="text" v-model="ewbDtls.Transid" class="form-control" placeholder="Transid">
                <label for="Transid" class="fw-bold">Transid:</label>
              </div>
            </td>
            <td>
              <div class="form-floating mb-3">
                <input type="text" v-model="ewbDtls.Transname" class="form-control" placeholder="Transname">
                <label for="Transname" class="fw-bold">Transname:</label>
              </div>
            </td>
            <td>
              <div class="form-floating mb-3">
                <input type="text" v-model="ewbDtls.Transdocno" class="form-control" placeholder="Transdocno">
                <label for="Transdocno" class="fw-bold">Transdocno:</label>
              </div>
            </td>
            <td>
              <div class="form-floating mb-3">
                <input type="date" v-model="ewbDtls.TransdocDt" class="form-control">
                <label for="TransdocDt" class="fw-bold">TransdocDt:</label>
              </div>
            </td>
            <td>
              <div class="form-floating mb-3">
                <input type="text" v-model="ewbDtls.Vehno" class="form-control" placeholder="Vehno">
                <label for="Vehno" class="fw-bold">Vehno:</label>
              </div>
            </td>
            <td>
              <div class="form-floating mb-3">
                <input type="text" v-model="ewbDtls.Vehtype" class="form-control" placeholder="Vehtype">
                <label for="Vehtype" class="fw-bold">Vehtype:</label>
              </div>
            </td>
            <td>
              <div class="form-floating mb-3">
                <select class="form-select form-control" v-model="ewbDtls.TransMode">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
                <label for="TransMode" class="fw-bold">TransMode:</label>
              </div>
            </td></tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
      <button v-if="setter" @click.self="pushfinale">Finale</button>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import itemlisterpart from '@/JsonContainer/itemlist.json';
import {DateExchange} from "@/Functions/DefaultStructure";
export default {
  props:{'itemlist':Object},
  setup(props,{emit}){
    const ewbDtls=ref(itemlisterpart.empty.EwbDtls);
    const fulllist=ref();
    const setter=ref(false);
    const loader=async ()=>{
      await props.itemlist;
    }
    onMounted(async ()=>{
      await loader();
      fulllist.value=await props.itemlist;
    })
    const submitForm=async ()=>{
      ewbDtls.value.Distance=await Number(ewbDtls.value.Distance);
      if(ewbDtls.value.TransdocDt!==''){
        const value=DateExchange(new Date(ewbDtls.value.TransdocDt))
        ewbDtls.value.TransdocDt=value;
      }
      fulllist.value.EwbDtls={...ewbDtls.value};
      setter.value=true;
    }
    // watchEffect(()=>{
    //   if ({...fulllist.value.EwbDtls}==={...ewbDtls.value}){
    //     setter.value=true;
    //   }
    //   else {setter.value=false;}
    // })
    const pushfinale=()=>{
      emit('forward',fulllist.value);
    }
    return{ewbDtls,submitForm,pushfinale,setter}
  }
};
</script>

<style>
.input-label span {
  font-weight: bold;
  margin-right: 10px;
}
</style>
