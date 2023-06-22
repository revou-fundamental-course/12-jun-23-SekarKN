let convertbtn = document.getElementById('Convert!');
let resetbtn = document.getElementById('Reset');

convertbtn.addEventListener('click', function(){//jika Convert button ditekan
    let cel = document.getElementById('celField').value;
    let fah = document.getElementById('fahField').value;
    let cal = document.getElementById('calculationField').innerText;
    
    if (cel != '') { //jika area celcius diberi inputan, maka area fahrenheit memunculkan hasil
        document.getElementById('fahField').value = ((parseFloat(cel)*1.8)+32).toFixed(1);
        document.getElementById('calculationField').innerText = (cel) + " * (9/5) + 32 = " + ((parseFloat(cel)*1.8)+32).toFixed(1) + " Fahrenheit";
    } else if (fah != ''){//sebaliknya, jika area fahrenheit diberi inputan, maka area celcius memunculkan hasil
        document.getElementById('celField').value = ((parseFloat(fah)-32)/1.8).toFixed(1);
        document.getElementById('calculationField').innerText = "("+(fah) + " -32) * 5/9 = " + ((parseFloat(fah)-32)/1.8).toFixed(1) + " Celcius";
    } else {//jika tidak ada yang diinputkan, maka di area kalkulasi akan muncul peringatan
        document.getElementById('fahField').value = fah;
        document.getElementById('celField').value = cel;
        document.getElementById('calculationField').innerText = "Input the temperature value first before click the 'Convert' button!";
    } 
}
)

resetbtn.addEventListener('click', function(){//jika Reset button ditekan, semua inputan dan outputan bersih
    let cel = document.getElementById('celField').value = '';
    let fah = document.getElementById('fahField').value = '';
    let cal = document.getElementById('calculationField').innerText = '';
} 
)