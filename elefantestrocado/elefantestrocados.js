let numero = Number(prompt ('Digite a quantidade de elefantes desejada:'));
let e=1

while(e<=numero){
    if(e==1){
        var plural='incomoda'
    }
    else{
        var plural = 'incomodam'
    }
    e ++
    let par = e + 1 
    console.log(`${e}  elefantes ${plural}  muito mais, ${par} incomodam, incomodam muito maaais`)
}