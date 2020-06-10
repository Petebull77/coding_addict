const btn = document.querySelector('.btn');
const info = document.querySelector('.info')

const ajax = new XMLHttpRequest();

ajax.open('GET', 'info.txt', true);

ajax.onreadystatechange = function(){
    if(this.status === 200 && this.readyState ===4){
        console.log('success')
    }
}
ajax.send();

console.log('hello');