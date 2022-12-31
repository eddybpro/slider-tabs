const tabsBox = document.querySelector('.tabs-box');
const allTabs = document.querySelectorAll('.tab');
const btns = document.querySelectorAll('.icon button')


const handleBtns = ()=>{
    let scrollVal = Math.round(tabsBox.scrollLeft);
    let maxScrollWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

    
    btns[0].parentElement.style.display = scrollVal > 0?'flex':'none';
    btns[1].parentElement.style.display = maxScrollWidth > scrollVal?'flex':'none';
}

btns.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        tabsBox.scrollLeft += btn.className === 'left-btn'?-350:350;
        setTimeout(handleBtns, 50)
    })
})

allTabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        tabsBox.querySelector('.active').classList.remove('active');
        tab.classList.add('active');
    })
})

let isDragging = false;

function dragging(e){
    if(!isDragging)return;
    tabsBox.scrollLeft -= e.movementX;
    tabsBox.classList.add('dragging');
    handleBtns();
}

function stopDragging(){
    isDragging = false;
    tabsBox.classList.remove('dragging');
}

tabsBox.addEventListener('mousedown', ()=>isDragging = true);
tabsBox.addEventListener('mousemove', dragging);
tabsBox.addEventListener('mouseup', stopDragging);

















































