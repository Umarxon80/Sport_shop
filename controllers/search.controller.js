import { Contract } from "../models/Contracts.js";
import { Customer } from "../models/Customers.js";
import { Product } from "../models/Products.js";

async function writedebter(e,date) {
  let customer = await Customer.findOne({ _id: e.customer_id });
  let product = await Product.findOne({ _id: e.product_id });
  return `${customer.name} ${product.name}ni  (${e.date.toISOString().slice(0,16).replace("T"," ")})da ${product.price}ga kreditga olgan lekin ${e.monthly_payments} miqdorda qarzdorlikni tolamagan, ${date} kunga kech qolgan `;
}

async function writelog(e) {
    let product = await Product.findOne({ _id: e.product_id });
    return `${product.name} ${e.date.toISOString().slice(0,16).replace("T"," ")}da sotilgan`;
  }

export const debters = async (req, res) => {
  let contracts = await Contract.find();
  let arr = [];
  for (let e of contracts) {
    if (e.day_of_payment < new Date().getDate() && e.payment_for_month ==false) {
      let days=new Date().getDate()-e.day_of_payment
      arr.push(await writedebter(e,days));
    }
  }
  res.send({ "Oz vaqtida tolov qimaganlar": arr });
};


export const logs =async (req,res)=>{
    let contracts = await Contract.find();
    let arr=[]
    req.body.end=new Date(req.body.end)
    req.body.start=new Date(req.body.start)
    for(let e of contracts){        
        if(e.date<req.body.end && e.date>req.body.start){
            arr.push(await writelog(e))
        }
    }
    res.send({"Sotilgan mahsulotlar":arr})
}