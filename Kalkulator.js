let prozor = document.getElementById('prozor');

let dugmici = Array.from(document.getElementsByClassName('dugme'));

let prozormali = document.getElementById('prozor-mali');

dugmici.map( dugme => 
    {   
        dugme.addEventListener('click', (e) => {
            switch(e.target.innerText)
            {
                case 'C':
                    prozor.innerText = '';
                    prozormali.innerText = '';
                    break;
                case 'DEL':
                    if(prozor.innerText)
                    {
                        prozor.innerText = prozor.innerText.slice(0, -1);
                    }
                    break;
                case '=':
                    try{
                        prozormali.innerText = '';
                        prozormali.innerText += prozor.innerText+"=";
                        prozor.innerText = eval(prozor.innerText);
                    }catch
                    {
                        prozor.innerText = 'Грешка!';
                    }
                    break;
                case '1/x':
                    prozor.innerText = '1/';
                    break;
                case '√':
                    prozormali.innerText = "√" + prozor.innerText+'=';
                    prozor.innerText = (Math.sqrt(prozor.innerText));       
                    break;
                case 'π':
                    prozor.innerText += '3.14';
                    break;
                default:
                    prozor.innerText += e.target.innerText;
            }
        });
    });