<template>
  <div class="container">
    <div class="from-group">
      <div class="container">
        <form @submit.prevent="validate">
          <label class="info">Seller Details</label>
          <div class="row">
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="Gstinsel" :class="error ? 'form-control is-invalid' : 'form-control is-valid'" id="sellerGstin" placeholder="Seller GST" v-model="SellerDtls.Gstin"/>
              <div class="invalid-feedback">Please enter a valid GST number.</div>
              <label for="sellerGstin">Seller GST</label>
            </div>
            </div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="suppLglNm" class="form-control" id="sellerLegalName" placeholder="Seller Legal Name" v-model="SellerDtls.LglNm"/>
              <label for="sellerLegalName">Seller Legal Name</label>
            </div>
            </div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" name="suppTrdNm" class="form-control" id="sellerTraderName" placeholder="Seller Trader Name" v-model="SellerDtls.TrdNm"/>
              <label for="sellerTraderName">Seller Trader Name</label>
            </div>
            </div>
          </div>
          <div class="row">
          <div class="col-md-6">
            <div class="form-floating mb-3">
              <input type="text" required name="suppaddr1" class="form-control" id="sellerAddress1" placeholder="Seller Address 1" v-model="SellerDtls.Addr1"/>
              <label for="sellerAddress1">Seller Address 1</label>
            </div></div>
            <div class="col-md-6">
            <div class="form-floating mb-3">
              <input type="text" name="suppaddr2" class="form-control" id="sellerAddress2" placeholder="Seller Address 2" v-model="SellerDtls.Addr2"/>
              <label for="sellerAddress2">Seller Address 2</label>
            </div></div>
          </div>
          <div class="row">
          <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="suppLoc" class="form-control" id="sellerPlace" placeholder="Seller Place or Location (e.g:- Bangalore)" v-model="SellerDtls.Loc"/>
              <label for="sellerPlace">Seller Place or Location</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="number" required name="suppin" class="form-control" id="sellerPin" placeholder="Seller Pin (e.g:- 560001)" v-model="SellerDtls.Pin"/>
              <label for="sellerPin">Seller Pin</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="suppcode" class="form-control" id="sellerStateCode" placeholder="Seller State Code (e.g:- 29)" v-model="SellerDtls.Stcd"/>
              <label for="sellerStateCode">Seller State Code</label>
            </div></div>
          </div>
          <div class="row">
          <div class="col-md-6">
            <div class="form-floating mb-3">
              <input type="text" name="supphn" class="form-control" id="sellerPhone" placeholder="Seller Phone (e.g:-9000000000)" v-model="SellerDtls.Ph"/>
              <label for="sellerPhone">Seller Phone</label>
            </div></div>
            <div class="col-md-6">
            <div class="form-floating mb-3">
              <input type="text" name="suppem" class="form-control" id="sellerEmail" placeholder="Seller Email (e.g:- abc@gmail.com)" v-model="SellerDtls.Em"/>
              <label for="sellerEmail">Seller Email</label>
            </div></div>
          </div>
          <label class="info">Buyer Details</label>
          <div class="row">
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="Gstin" class="form-control" id="buyerGstin" placeholder="Buyer GST" v-model="BuyerDtls.Gstin"/>
              <label for="buyerGstin">Buyer GST</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="buyLglNm" class="form-control" id="buyerLegalName" placeholder="Buyer Legal Name" v-model="BuyerDtls.LglNm"/>
              <label for="buyerLegalName">Buyer Legal Name</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" name="buyTrdNm" class="form-control" id="buyerTraderName" placeholder="Buyer Trader Name" v-model="BuyerDtls.TrdNm"/>
              <label for="buyerTraderName">Buyer Trader Name</label>
            </div></div>
          </div>
          <div class="row">
          <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" name="buyTrdNm" class="form-control" id="buyerPos" placeholder="Buyer Pos" v-model="BuyerDtls.Pos"/>
              <label for="buyerPos">Buyer Pos</label>
            </div></div>
          <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="buyaddr1" class="form-control" id="buyerAddress1" placeholder="Buyer Address 1" v-model="BuyerDtls.Addr1"/>
              <label for="buyerAddress1">Buyer Address 1</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" name="buyaddr2" class="form-control" id="buyerAddress2" placeholder="Buyer Address 2" v-model="BuyerDtls.Addr2"/>
              <label for="buyerAddress2">Buyer Address 2</label>
            </div>
          </div></div>
          <div class="row">
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="buyLoc" class="form-control" id="buyerPlace" placeholder="Buyer Place or Location (e.g:- Bangalore)" v-model="BuyerDtls.Loc"/>
              <label for="buyerPlace">Buyer Place or Location</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="number" name="buypin" class="form-control" id="buyerPin" placeholder="Buyer Pin (e.g:- 560001)" v-model="BuyerDtls.Pin"/>
              <label for="buyerPin">Buyer Pin</label>
            </div></div>
            <div class="col-md-4">
            <div class="form-floating mb-3">
              <input type="text" required name="buycode" class="form-control" id="buyerStateCode" placeholder="Buyer State Code (e.g:- 29)" v-model="BuyerDtls.Stcd"/>
              <label for="buyerStateCode">Buyer State Code</label>
            </div></div>
          </div>
          <div class="row">
            <div class="col-md-6">
            <div class="form-floating mb-3">
              <input type="text" name="buyphn" class="form-control" id="buyerPhone" placeholder="Buyer Phone (e.g:-9000000000)" v-model="BuyerDtls.Ph"/>
              <label for="buyerPhone">Buyer Phone</label>
            </div></div>
            <div class="col-md-6">
            <div class="form-floating mb-3">
              <input type="text" name="buyem" class="form-control" id="buyerEmail" placeholder="Buyer Email (e.g:- abc@gmail.com)" v-model="BuyerDtls.Em"/>
              <label for="buyerEmail">Buyer Email</label>
            </div>
            </div>
          </div>
          <button type="submit" v-if="!butttonpresence" class="btn btn-primary">Submit</button>
        </form>
        <button @click.self="next(finallist)" class="btn btn-secondary">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref, watchEffect} from 'vue';
import items from '@/JsonContainer/itemlist.json';
    export default {
        props:{'itemlist':Object},
        setup(props,{emit}) {
          //console.log(props.uniqueid);
          const finallist = ref();
          const butttonpresence = ref(false);
          const SellerDtls=ref(items.empty.SellerDtls);
          const BuyerDtls=ref(items.empty.BuyerDtls);
          const error=ref(true);
          const nextPage = async () => {
            await emit('forward', finallist);
          }
          const recievelist = async () => {
            await props.itemlist;
          };
          watchEffect(()=>{
            if(SellerDtls.value.Gstin.length===15){
              error.value=false;
            }
            else {
              error.value=true;
            }
          })
          onMounted(async () => {
            await recievelist();
            await props.itemlist;
            finallist.value = await props.itemlist;
            console.log(finallist.value);
          });
          const validate = async () => {
            // const {
            //   Gstinsel, suppLglNm, suppTrdNm, suppaddr1, suppaddr2, suppLoc, suppin, supphn, suppcode, suppem
            //   , Gstin, buyLglNm, buyTrdNm, buyaddr1, buyaddr2, buyLoc, buypin, buycode, buyphn, buyem
            // } = Object.fromEntries(new FormData(event.target));
            //Seller Details Updater
            // finallist.value.SellerDtls.Gstin = SellerDtls.value.Gstin;
            // finallist.value.SellerDtls.LglNm = SellerDtls.value.LglNm;
            // finallist.value.SellerDtls.TrdNm = SellerDtls.value.TrdNm;
            // finallist.value.SellerDtls.Addr1 = SellerDtls.value.Addr1;
            // finallist.value.SellerDtls.Addr2 = SellerDtls.value.Addr2;
            // finallist.value.SellerDtls.Loc = SellerDtls.value.Loc;
            finallist.value.SellerDtls.Pin =await Number(SellerDtls.value.Pin);
            finallist.value.SellerDtls={...SellerDtls.value};
            // finallist.value.SellerDtls.Stcd = SellerDtls.value.Stcd;
            // finallist.value.SellerDtls.Ph = SellerDtls.value.Ph;
            // finallist.value.SellerDtls.Em = SellerDtls.value.Em;
            //Buyer Details Inputing Updater
            // finallist.value.BuyerDtls.Gstin = BuyerDtls.value.Gstin;
            // finallist.value.BuyerDtls.LglNm = BuyerDtls.value.LglNm;
            // finallist.value.BuyerDtls.TrdNm = BuyerDtls.value.TrdNm;
            // finallist.value.BuyerDtls.Addr1 = BuyerDtls.value.Addr1;
            // finallist.value.BuyerDtls.Addr2 = BuyerDtls.value.Addr2;
            // finallist.value.BuyerDtls.Loc = BuyerDtls.value.Loc;
            finallist.value.BuyerDtls.Pin =await Number(BuyerDtls.value.Pin);
            finallist.value.BuyerDtls={...BuyerDtls.value};
            // finallist.value.BuyerDtls.Stcd = BuyerDtls.value.Stcd;
            // finallist.value.BuyerDtls.Ph = BuyerDtls.value.Ph;
            // finallist.value.BuyerDtls.Em = BuyerDtls.value.Em;
            console.log(finallist.value.SellerDtls);
            console.log(finallist.value.BuyerDtls);
            butttonpresence.value = !butttonpresence.value;
          };
          return {
            validate,
            nextPage,
            butttonpresence,
            SellerDtls,
            BuyerDtls,
            error,
            finallist
          };
        },
      methods:{
          next(finallist){
            this.$emit('forward',finallist);
          }
      }
    }
</script>

<style>
.error{
  border-color: crimson;
  box-shadow: 0 0 0 1px crimson;
}
</style>