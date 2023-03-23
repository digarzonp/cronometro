function cronometro(){

    let hora=0, minuto=0, segundo=0;
    //usamos while porque no sabemos cuanto dura el ciclo
    while(minuto<3){
        if(segundo<60){
            segundo++;
        }else{
            segundo=0;
            minuto++;

            if(minuto<60){
                minuto++;
            }else{
                minuto=0;
                hora++;
            }
        }

        
        let fecha= new Date();
        let fecha2= new Date();
        

        while(fecha2-fecha<1000){
            fecha2= new Date();
        }
        console.log(hora+":"+minuto+":"+ segundo)
    }

}

cronometro();