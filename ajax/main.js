const btn = document.querySelector('.btn');
const info = document.querySelector('.info');
/*
const ajax = new XMLHttpRequest();
//console.log(ajax);

ajax.open('GET','info.txt',true);

ajax.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
        info.textContent = this.responseText;
    }
};
ajax.send();


*/
function getData(url){
    const ajax = new XMLHttpRequest();
    console.log(ajax);
    
    ajax.open('GET', url,true);
    
    //ajax.onreadystatechange = function(){
     //   if(this.status === 200 && this.readyState === 4){
     //       info.textContent = this.responseText;
     //   }
     ajax.onload = function(){
        if(this.status === 200){
            info.textContent= this.responseText;
        }
        else{
            console.log(this.status)
        }
    };
    ajax.onerror = function (){
        console.log('there was an error')
    }
    ajax.send();
}
btn.addEventListener('click', function(){
    getData('info.txt');
});