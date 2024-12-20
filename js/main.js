function form_submit(){
    console.log("just checking1");
    var your_food=document.getElementById('food').value;
    console.log(your_food);
    var quantity=document.getElementById('quantity').value;
    console.log(quantity);

    if (your_food=="pizza"){
        console.log("yes pizza is availble");
        one_pizza=100
        total=parseInt(one_pizza)*parseInt(quantity);
        document.getElementById('output').innerHTML="your total bill is"+total;
    }
    else if(your_food=="burger"){
        console.log("yes burger is avialble");
        one_burger=80
        total=parseInt(one_burger)*parseInt(quantity);
        document.getElementById('output').innerHTML="your total bill is"+total;
    }
    else if(your_food=="pasta"){
        console.log("yes pasta is available");
        one_pasta=50
        total=parseInt(one_pasta)*parseInt(quantity);
        document.getElementById('output').innerHTML="your total bill is "+total;
    }
    else{
        console.log("biriyani is not available");
        document.getElementById('output').innerHTML="biriynai is not available now";
    }
}