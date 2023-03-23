function inc1(){
    (document.getElementById('val1').value)++;
    var tot1 = document.getElementById('val1').value * 63490;
    var tot2 = document.getElementById('val2').value * 158897;
    var tot3 = document.getElementById('val3').value * 179999;
    var total_sum = tot1+tot2+tot3;
    document.getElementById('billing').value = total_sum; 
}

function inc2(){
    document.getElementById('val2').value ++;
    var tot1 = document.getElementById('val1').value * 63490;
    var tot2 = document.getElementById('val2').value * 158897;
    var tot3 = document.getElementById('val3').value * 179999;
    var total_sum = tot1+tot2+tot3;
    document.getElementById('billing').value = total_sum; 
}

function inc3(){
    document.getElementById('val3').value ++;
    var tot1 = document.getElementById('val1').value * 63490;
    var tot2 = document.getElementById('val2').value * 158897;
    var tot3 = document.getElementById('val3').value * 179999;
    var total_sum = tot1+tot2+tot3;
    document.getElementById('billing').value = total_sum; 
}

function dec3(){
    if(document.getElementById('val3').value >0 )
        document.getElementById('val3').value --;
        var tot1 = document.getElementById('val1').value * 63490;
        var tot2 = document.getElementById('val2').value * 158897;
        var tot3 = document.getElementById('val3').value * 179999;
        var total_sum = tot1+tot2+tot3;
        document.getElementById('billing').value = total_sum;
}

function dec2(){
    if(document.getElementById('val2').value >0 )
        document.getElementById('val2').value --;
        var tot1 = document.getElementById('val1').value * 63490;
        var tot2 = document.getElementById('val2').value * 158897;
        var tot3 = document.getElementById('val3').value * 179999;
        var total_sum = tot1+tot2+tot3;
        document.getElementById('billing').value = total_sum; 
}

function dec1(){
    if(document.getElementById('val1').value >0 )
        document.getElementById('val1').value --;
        var tot1 = document.getElementById('val1').value * 63490;
        var tot2 = document.getElementById('val2').value * 158897;
        var tot3 = document.getElementById('val3').value * 179999;
        var total_sum = tot1+tot2+tot3;
        document.getElementById('billing').value = total_sum;
    
}

function final(){
    // var tot1 = document.getElementById('val1').value * 63490;
    // var tot2 = document.getElementById('val2').value * 158897;
    // var tot3 = document.getElementById('val3').value * 179999;
    // var total_sum = tot1+tot2+tot3;
    if(document.getElementById('billing').value == 0)
        alert("No Items In Cart!!!\n");
    else
        alert("Order Has Been Confirmed!!!");
}
