<template>
    <div class="container">
      <table class="table table-responsive table-bordered">
        <thead>
          <tr>
            <th>
              <div class="form-floating mb-3">
                <input type="text" id="e-invoice" class="form-control" placeholder="">
                <label for="e-invoice">
                  IRN(Invoice)
                </label>
              </div>
            </th>
            <th>
              <div class="form-floating mb-3">
                <input type="text" id="SellerDt" class="form-control" placeholder="">
                <label for="SellerDt">
                  Seller GST
                </label>
              </div>
            </th>
            <th>
              <div class="form-floating mb-3">
                <input type="text" id="TrdNm" class="form-control" placeholder="">
                <label for="TrdNm">
                  Trader Name
                </label>
              </div>
            </th>
            <th>
              <div class="form-floating mb-3">
                <input type="text" id="TotalValue" class="form-control" placeholder="">
                <label for="TotalValue">
                  Total Value
                </label>
              </div>
            </th>
            <th>
              <div class="form-floating mb-3">
                <input type="date" id="date" class="form-control" placeholder="">
                <label for="date">
                  Generated Date
                </label>
              </div>
            </th>
            <th>
              <div class="form-floating mb-3">
                <input type="text" id="buttons" disabled class="form-control" placeholder="">
                <label for="buttons">
                  Generate/Delete
                </label>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in options" :key="value.irn">
            <td>{{value.irn}}</td>
            <td>{{value.sgst}}</td>
            <td>{{value.Trdnam}}</td>
            <td>{{value.Totval}}</td>
            <td>{{value.date}}</td>
            <td> 
                <span v-if="value.generated">
                    Generated
                </span>
                <span v-else>
                    Not Generated
                </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  

<script>
import { ref } from 'vue';
export default {
    setup(){
        const options=ref([{irn:"e98a1e9ac7a47ac",sgst:"29AABCT1332L000",Trdnam:"NIC Industries",Totval:"12908",date:"08/08/2020","generated":true}]);
        return {options};
    }
}
</script>

<style>
table {
  table-layout: fixed;
  width: 100%; /* Ensure the table takes the full width of its container */
}

tr {
  width: 100%;
  display: table;
  table-layout: fixed;
}
</style>
