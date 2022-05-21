const boxes = document.querySelectorAll('.box');

Array.from(boxes).forEach((element)=>{
    element.addEventListener('click', ()=>{
        for (index in Array.from(boxes)){
            boxes[index].style.backgroundColor = 'white';
            boxes[index].style.border = 'none';
            boxes[index].style.color = 'black';
        }
        element.style.backgroundColor = 'rgb(223, 236, 255)';
        element.style.borderLeft = '6px solid rgb(0, 136, 255)';
        element.style.color = 'rgb(0, 136, 255)';
    })
})