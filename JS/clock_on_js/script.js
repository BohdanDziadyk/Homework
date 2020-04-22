for (let i = 0; i<60; i++){
    for(let y = 0;y<60;y++){
        if(i<10){
            document.write('0'+i+':'+y);
        }
        else if(y<10){
             document.write(i+':0'+y);
        }
        else if(i<10 && y<10)
        {
             document.write('0'+i+':'+y+'0');
        }
        else{
            document.write(i+':'+y);
        }
        document.write("<br>")
    }
}
