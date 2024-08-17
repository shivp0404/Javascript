var button = document.querySelector('#btn')
var btn = document.querySelector('#btn2')
var main = document.querySelector('.main')
button.addEventListener('click', ()=>{
    var newtask = document.createElement('div');
    newtask.innerHTML =`
    <div class="card">
                <div class="nav">List Of Task
                </div>
                 <textarea class="textarea"></textarea>
            </div>`
     main.appendChild(newtask)
}
)
 btn.addEventListener('click', ()=>{

}
)