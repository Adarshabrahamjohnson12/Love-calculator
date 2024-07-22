document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    
    if (name1 && name2) 
        {
        var lovePercentage = Math.floor(Math.random() * 100) + 1;
        var resultDiv = document.getElementById('result');
        resultDiv.textContent = `${name1} and ${name2} have a love compatibility of ${lovePercentage}%!`;
    } else {
        alert('Please enter both names.');
    }
});
