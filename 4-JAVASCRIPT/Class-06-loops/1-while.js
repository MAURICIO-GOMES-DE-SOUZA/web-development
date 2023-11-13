let count = 1; //flag
while (count <= 10) {
    if(count >2 && count< 8) {
        count++;
        // continue;
        break;
    }
    console.log("count");
    count++; // esse cara é o container




    while (true) {
        let resp = prompt ("Deseja encerrar?");
    
        if(resp) {
            alert("Obrigado pela sua vista!")
            break;
        }
    }
}