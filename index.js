function display()
{
    let d = new Date();
    
 let hrs = d.getHours();
 let min = d.getMinutes();
 let sec = d.getSeconds();

document.getElementById("hr").value = hrs;
document.getElementById("min").value = min;
document.getElementById("sec").value = sec;
}

setInterval(() => {
    display()
}, 1000);