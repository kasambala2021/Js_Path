let userInput = prompt('Enter a number:');
userInt = parseInt(userInput);
if(userInt){
    if(userInput%2 === 0){
        alert('Number is Even');
    }
    else{
        alert('Number is Odd')
    }
}
else{
    console.error('Oops!!!!Try Again')
}