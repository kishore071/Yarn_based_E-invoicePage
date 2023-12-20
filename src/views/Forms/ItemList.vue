<template>
  <div class="container">
    <div class="itemlist center-container">
      <div class="form-group">
        <form @submit.prevent="addList">
          <label class="info">ItemList</label>
          <div class="form-group">
            <div class="row">
              <div class="col-md-2">
                <div class="form-floating mb-3">
                <input type="text" id="slNo" disabled required name="SlNo" class="form-control" v-model="itemsdata.SlNo" placeholder="Sl No (e.g:'1')"/>
                <label for="slNo">SL_No
                  <span class="star">*</span></label>
                </div></div>
              <div class="col-md-5">
                <div class="form-floating mb-3">
                  <input type="text" name="PrdDesc" class="form-control" v-model="itemsdata.PrdDesc" placeholder="Product Description (e.g:'Rice')" />
                  <label for="productDescription" class="fw-bold">Product_Description</label>
                </div></div>
              <div class="col-md-2">
                <div class="form-floating mb-3">
                  <select name="ISServc" required class="form-select" v-model="itemsdata.IsServc">
                    <option value="Y" selected>Yes</option>
                    <option value="N">No</option>
                  </select>
                  <label for="isService" class="fw-bold">Is_Service
                    <span class="star">*</span></label>
                </div></div>
              <div class="col-md-3">
                <div class="form-floating mb-3">
                  <input type="text" required name="HsnCd" class="form-control" v-model="itemsdata.HsnCd" placeholder="HSN Code (e.g:'1001')" />
                  <label for="hsnCode" class="fw-bold">HSN_Code<span class="star">*</span></label>
                </div>
              </div>
            </div>
                          <!--    Item Brief Details Here  -->
            <label class="info">Batch Details</label>
            <div class="row">
              <div class="col-md-4">
                <div class="form-floating mb-3">
                  <input type="text" required name="Nm" class="form-control" v-model="itemsdata.BchDtls.Nm" placeholder="Batch Name (e.g:'123456')" />
                  <label for="batchName">Batch_Name<span class="star">*</span></label>
                </div></div>
              <div class="col-md-4">
                <div class="form-floating mb-3">
                  <input type="date" name="ExpDt" class="form-control" v-model="itemsdata.BchDtls.Expdt" placeholder="Expiry Date (e.g:'01/08/2020')" />
                  <label for="batchExpiryDate">Batch_ExpiryDate</label>
                </div></div>
              <div class="col-md-4">
                <div class="form-floating mb-3">
                  <input type="date" name="wrDt" class="form-control" v-model="itemsdata.BchDtls.wrDt" placeholder="Warranty Date (e.g:'01/09/2020')" />
                  <label for="batchWarrantyDate">Batch_WarrantyDate</label>
                </div>
              </div>
            </div>
            <label for="" class="info">Brief Item</label>
            <div class="container">
              <table class="table table-responsive table-bordered">
                <thead class="thead-dark">
                <tr>
                  <th v-for="render in itemsList1" :key="render">{{ render[5] }}
                    <span class="star" v-if="render[2]">*</span>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td v-for="(render, key) in itemsList1" :key="render">
                    <div class="form-floating mb-3">
                      <input :type="render[1]" :required="render[2]" v-model="itemsdata[render[3]]" :name="render[3]" :id="render[5]" class="form-control" :placeholder="render[5]=key" />
                      <label :for="render[5]">{{ render[5] }}
                        <span class="star" v-if="render[2]">*</span>
                      </label>
                    </div>
                  </td>
                </tr>
                </tbody>
                <thead class="thead-dark">
                  <tr>
                    <th v-for="render in itemsList2" :key="render">{{ render[5] }}
                      <span class="star" v-if="render[2]">*</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td v-for="(render, key) in itemsList2" :key="render">
                      <div class="form-floating mb-3">
                        <input :type="render[1]" :required="render[2]" v-model="itemsdata[render[3]]" :name="render[3]" :id="render[5]" class="form-control" :placeholder="render[5]=key" />
                        <label :for="render[5]">{{ render[5] }}
                          <span class="star" v-if="render[2]">*</span>
                        </label>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                  <thead class="thead-dark">
                    <tr>
                      <th v-for="render in itemsList3" :key="render">{{ render[5] }}
                        <span class="star" v-if="render[2]">*</span>
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td v-for="(render, key) in itemsList3" :key="render">
                        <div class="form-floating mb-3">
                          <input :type="render[1]" :required="render[2]" v-model="itemsdata[render[3]]" :name="render[3]" :id="render[5]" class="form-control" :placeholder="render[5]=key" />
                          <label :for="render[5]">{{ render[5] }}
                            <span class="star" v-if="render[2]">*</span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    </tbody>
              </table>
            </div>
            <label for="" class="info">Attribute details</label>
            <div class="row">
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input type="text" required name="AttrNm" class="form-control" v-model="itemsdata.AttribDtls[0].Nm" placeholder="Attribute Name(e.g:'Rice')" />
                  <label for="attributeName">Attribute Name
                  <span class="star">*</span>
                  </label>
                </div></div>
              <div class="col-md-6">
              <div class="form-floating mb-3">
                <input type="text" required name="AttrVal" class="form-control" v-model="itemsdata.AttribDtls[0].Val" placeholder="Attribute Value(e.g:'10000')" />
                <label for="attributeValue">Attribute Value
                  <span class="star">*</span></label>
              </div></div>
          </div></div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <button @click.self="senddata" v-if="buttonvalidator" class="btn btn-secondary">Emit Data</button>
      </div>
    </div>
  </div>
</template>

<script>
import itemlist from '@/JsonContainer/itemlist.json';
import {onMounted, ref,} from 'vue';
import { createDefaultItem } from '@/Functions/DefaultStructure';

export default {
  props: ['itemsSlNo'],
  setup(props, { emit }) {
    const itemsList1 = ref();
    const itemsList2 = ref();
    const itemsList3 = ref();
    const buttonvalidator = ref(false);
    const SlNo = ref(props.itemsSlNo);
    const itemsdata = createDefaultItem(props.itemsSlNo);
    console.log(itemlist.ItemList1.length);
    const loader = async () => {
      await props.itemsSlNo;
    };
    onMounted(async () => {
      await loader();
      itemsList1.value = await itemlist.ItemList1;
      itemsList2.value=await itemlist.ItemList2;
      itemsList3.value=await itemlist.ItemList3;
      SlNo.value = props.itemsSlNo;
      console.log(SlNo.value);
    });
    const addList = async () => {
      itemsdata.value.UnitPrice=await parseFloat(itemsdata.value.UnitPrice).toFixed(3);
      itemsdata.value.TotAmt=await parseFloat(itemsdata.value.TotAmt).toFixed(2);
      itemsdata.value.AssAmt=await parseFloat(itemsdata.value.AssAmt).toFixed(2);
      itemsdata.value.GstRt=await parseFloat(itemsdata.value.GstRt).toFixed(3);
      itemsdata.value.TotItemVal=await parseFloat(itemsdata.value.TotItemVal).toFixed(2);
      //itemsdata.value.SlNo =await SlNo.value; // Update the SlNo here
      // itemsdata.value.Qty=await parseFloat(itemsdata.value.Qty).toFixed(3);
      // itemsdata.value.FreeQty=await Number(itemsdata.value.FreeQty).toFixed(3);
      // itemsdata.value.Discount=await parseFloat(itemsdata.value.Discount).toFixed(2);
      // itemsdata.value.PreTaxVal=await parseFloat(itemsdata.value.PreTaxVal).toFixed(2);
      // itemsdata.value.IgstAmt=await parseFloat(itemsdata.value.IgstAmt).toFixed(2);
      buttonvalidator.value = true;
    };

    const senddata = () => {
      emit('listupdate', itemsdata.value);
      buttonvalidator.value = false; // Set it to false here after emitting the data
    };

    return {
      itemsList1,
      itemsList2,
      itemsList3,
      senddata,
      itemsdata,
      addList,
      buttonvalidator,
    };
  },
};
</script>


<style>
.star{
    color: red;
}
</style>