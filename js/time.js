prompt('How\'s it goin\'')

function askName() {
    var name = prompt('What\'s your name?');
    var output = 'Hello, ' + name + '!';
    var answer = confirm('Do you like books AND movies?');

    if (answer) {
        output = output + ' Get Excited!';
    } else {
        output = output + ' Get out!';
    }  

return output; 
