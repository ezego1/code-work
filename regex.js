const regex = new RegExp('^(([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2}$')
// const specialRegex = new RegExp('^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$')
console.log(regex.test("SW1W 0NY"))
console.log(regex.test("PO16 7GZ"))



// const pattern = new RegExp('^\\d{4}\\/\\d{4,5}$', 'g')

// const staffId1 = '2345/56783'

// const ans = pattern.test(staffId1)
// console.log(ans)

// const test = '{"name":"file is does not exist"}'

// const parse = JSON.parse(test)

// const data = {
// 	"idNumber": "8",
// 	"amount": 1450,
// 	"gatewayType": "Paystack",
// 	"orderNumber": "card-167-e5b7ed3e-8a3e-4ee3-a995-2ef05160a1e9",
// 	"transactionReference": "8c116d16-05f5-494f-9b2b-e3d9f27a5318",
// 	"transactionStatus": "failed"
// }
// const transactions = [
//     {
//       "orderId": "card-167-e5b7ed3e-8a3e-4ee3-a995-2ef05160a1e9",
//       "email": "sms2@yopmail.com",
//       "phoneNumber": null,
//       "prevStatus": "SUCCESS",
//       "currentStatus": "SUCCESS"
//     }
//   ]

//   function isMatch(data1, data2) {
//     const res = data1.map(item => {
//         if (item.orderId === data2.orderNumber) {
//             return true;
//         }
//         return false
//     })
//     return res[0]
//   }

//   const ans = isMatch(transactions, data)
//   console.log(ans)


//   function isMatch(data1, data2) {
//     const res = data1.map((item) => {
//       if (item.orderId === data2.orderNumber) {
//         return true;
//       }
//       return false;
//     });
//     return res[0];
//   }


// const value = new RegExp("/\b" + "^[p][g]\/([a-z]+\.?[a-z]*)\/?([a-z]*\.?[a-z]*)?\/\d{4}\/\d{3}$" + "\b/", 'i')
const js = {
    "cool": "^(?:[pP][gG])\/(?:[A-Za-z]+\.?[A-Za-z]*)\/?(?:[A-Za-z]*\.?[A-Za-z]*)?\/[0-9]{4}\/[0-9]{3}$"
}

const so = new RegExp(js.cool, 'g')

const check = "^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"

const emailCheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

const BaseEmailCheck = "^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$"

const signUp = "^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$"


console.log(so.test("PG/ph.d/m/0007/034"))

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  console.log(emailRegex.test("cool@xml.co.uk"))
//   console.log(BaseEmailCheck.test("Mike.ipeti@yahoo.co.uk"))


  function isRegexValid(value, regex) {
    return regex && !new RegExp(regex).test(value);
  }

  console.log(isRegexValid("Mike.ipeti@yahoo.co.uk", signUp))