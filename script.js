let like_button=document.getElementsByClassName("icon")
let plus_btn=document.getElementsByClassName("plus-btn")
let quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let prices=[1379.00 , 176.00 , 249.00]
let finalprice=document.getElementById("finalPrice")
let delete_btn=document.getElementsByClassName("delete")
let item=document.getElementsByClassName("Item")
for (let i=0;i<3;i++){
    //like buttom
    like_button[i].addEventListener("click",function(){
        if (like_button[i].style.color==="red"){
            like_button[i].style.color="black"
        }
        else{
            like_button[i].style.color="red"
        }
    })
    // plus button
    plus_btn[i].addEventListener("click",function(){
        quant[i].value=Number(quant[i].value)+1
        finalprice.value=Number(finalprice.value)+prices[i]

    })
    // minus button
    minus_btn[i].addEventListener("click",function(){
        if (quant[i].value!=="1"){
            quant[i].value=Number(quant[i].value)-1
            finalprice.value=Number(finalprice.value)-prices[i]
        }
    })
    // delete button
    delete_btn[i].addEventListener("click",function(){
        item[i].style.display="None"
        finalprice.value=Number(finalprice.value)-(Number(prices[i])* Number(quant[i].value))
    })
}
