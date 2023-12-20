import {ref} from "vue";
export const createDefaultItem=(sl)=> {
    return ref({
      SlNo: sl,
      IsServc: "",
      PrdDesc: "",
      HsnCd: "",
      Barcde: "",
      BchDtls: {
        Nm: "",
        Expdt: "",
        wrDt: ""
      },
      Qty: null,
      FreeQty: null,
      Unit: "",
      UnitPrice: null,
      TotAmt: null,
      Discount: null,
      PreTaxVal: null,
      AssAmt: null,
      GstRt: null,
      SgstAmt: null,
      IgstAmt: null,
      CgstAmt: null,
      CesRt: null,
      CesAmt: null,
      CesNonAdvlAmt: null,
      StateCesRt: null,
      StateCesAmt: null,
      StateCesNonAdvlAmt: null,
      OthChrg: null,
      TotItemVal: null,
      OrdLineRef: "",
      OrgCntry: "",
      PrdSlNo: "",
      AttribDtls: [
        {
          Nm: "",
          Val: ""
        }
      ]
    });
}
export const DateExchange=(val)=>{
  const day = String(val.getDate()).padStart(2, '0');
  const month = String(val.getMonth() + 1).padStart(2, '0');
  const year = val.getFullYear();
  return `${day}/${month}/${year}`;
}

export const removeInvalids=(obj)=>{
  for (const key in obj){
    if (obj[key]===null || obj[key] ===undefined || obj[key]==='' ||obj[key]==="" || obj[key]===0 ){
     delete obj[key];
    }
    else if (typeof obj[key]==='object' && !Array.isArray(obj[key])){
      removeInvalids(obj[key]);
      if(Object.keys(obj[key]).length===0){
        delete obj[key];
      }
      else if(obj[key][0]===null){
        delete obj[key];
      }
    }
    else if(Array.isArray(obj[key])){
      removeInvalids(obj[key]);
      if(obj[key].length===0){delete obj[key];}
      else if(obj[key].length===1 && obj[key][0]===null){delete obj[key];}
    }
  }
  return obj;
}
  