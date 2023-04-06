document.getElementById('calculate').addEventListener('click', function(){

    const capital = document.getElementById('capital').value;
    const taxa = document.getElementById('taxa').value / 100;
    const meses = document.getElementById('meses').value;

    const montante = capital * (1 + taxa)**meses;

    document.getElementById('montante').innerHTML = ("R$" + montante.toFixed(2));

});



