var myForm = document.getElementById('myForm');
myForm.addEventListener('submit',function(e){
    e.preventDefault()

    var country= document.getElementById('country').value 


//fetch get request to get covid 19 data
var url = "https://api.covid19api.com/total/dayone/country/"+country
fetch(url)
.then((res)=> res.json())
.then((res)=> {
    console.log(res)
    var length = res.length
    var index = length - 1
    var confirmed = document.getElementById('confirmed')
    var recoverd = document.getElementById('recovered')
    var deaths = document.getElementById('deaths')
    confirmed.innerHTML = ''
    recovered.innerHTML = ''
    deaths.innerHTML = ''

    confirmed.append("Total Confirmed:"+res[index].Confirmed)
    recovered.append("Total Recovered:"+[index].recovered)
    deaths.append("Total deaths:"+res[index].deaths)
});

});

