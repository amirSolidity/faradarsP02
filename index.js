// const images = document.querySelectorAll('.img')
// for(let n = 0;n<images.length;n++){
//     console.log(images[n])
//     images[n].style.display = 'none'
// }

// let i = 0;

const count = document.getElementById('count')


// function loading(){
//     for(let i = 0;i<images.length;i++){
        // setTimeout(()=> {
        //     count.innerHTML = images[i].style.display = 'inline'
        // } , 2000)        
//     }
// }



const images = document.createElement('img')
images.className = 'imagee'
images.style.width = '50%'
images.style.height = '400px'
images.id = 'imageee'
images.src = '#'
count.appendChild(images)





for(var i = 1; i <= 4; i++){
    (function(i){
        setTimeout(function(){
            images.src = `${i}.jpg`;
        }, 3000 * (i + 1));
    })(i);
}















// function loading(){
//     for(let i = 1;i<3;i++){
//         setTimeout(() => {
//             images.src = `${i}.jpg`
//             count.appendChild(images)
//         } , 2000)
//     }
// }


// function doSetTimeout(i) {
//     setTimeout(function() {
//         images.src = `${i}.jpg`;
//     }, 2000);
//   }
  
//   for (var i = 1; i <= 4; ++i)
//     doSetTimeout(i);


for(let i = 1;i<=4;i++){
    (
        function(i){
            setTimeout(() => {
                images.src = `${i}.jpg`;
            } , 2000)
        }
    )(i);
}











