function createPhoneNumber(numbers){
    let formNumber = '(';
    for (let i = 0; i<numbers.length; i++){
      if(i == 3){
        formNumber += ') ';
      }
      
      if(i == 6){
           formNumber += '-'; 
      }
      formNumber += numbers[i];
    }
  return formNumber;
}
