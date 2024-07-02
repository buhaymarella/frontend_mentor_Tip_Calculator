function getTip(value){
    const bill = document.getElementById('bill').value;
    const num_people = document.getElementById('num-people').value;
    const final_amount = document.getElementById('final-amount');
    const total = document.getElementById('total');

    const final_tip = Math.trunc(((bill / num_people) * value / 100) * 100) / 100;
    final_amount.innerHTML = "$" + final_tip;

    const amount_per = (bill / num_people) + final_tip ;
    total.innerHTML = "$" + amount_per;

}
function showCust(){
    document.getElementById('custom-val').style.display = 'block';
}
function clearAmount(){
    document.getElementById('bill').value = '';
    document.getElementById('num-people').value = '';
    document.getElementById('final-amount').innerHTML = '$0.00';
    document.getElementById('total').innerHTML = '$0.00';
    document.getElementById('custom-val').style.display = 'none';
    document.getElementById('custom-val').value = '';
    
}