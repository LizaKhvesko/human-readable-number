module.exports = function toReadable (number) {
    if (number === 0) {
        return 'zero'
    }

  let smallNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  if (number < 20) {
    number = smallNumbers[number];
  }
  
  let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number>=20 && number<100) {
   if (number%10===0) {
      number = dozens[number/10];
    } 
    else {
      number = dozens[Math.trunc(number/10)] + ' ' + smallNumbers[number%10];
    }
}  

  if (number>=100 && number<=999) {
      let second = number.toString().slice(1);
    if (number%100===0) {
      number = smallNumbers[number/100] + ' hundred';
    }  else if (number%100 < 20) {
        number = smallNumbers[Math.trunc(number/100)] + ' hundred ' + smallNumbers[number%100];
    }
    else if (number%10===0) {
       number = smallNumbers[Math.trunc(number/100)] + ' hundred ' + dozens[second/10];
    } 
    else {
      let third = number.toString().slice(2);
      number = smallNumbers[Math.trunc(number/100)] + ' hundred ' + dozens[Math.trunc(second/10)] + ' ' + smallNumbers[third];
    }
  }
   return number;
}
