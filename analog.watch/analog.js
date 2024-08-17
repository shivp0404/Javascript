setInterval(()=>{
    var h = document.getElementById('hour')
    var m = document.getElementById('min')
    var s = document.getElementById('sec')
    t= new Date;
    min= t.getMinutes();
    hour= t.getHours();
    sec= t.getSeconds();
    

    h.style.transform = `rotate(${30*hour + min/2}deg)`
    m.style.transform = `rotate(${6*min}deg)`
    s.style.transform = `rotate(${6*sec}deg)`
},1000)