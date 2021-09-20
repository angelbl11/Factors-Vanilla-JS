window.onload = begin;
        function begin()
        {
            let generateButton = document.getElementById("generateButton");
            generateButton.addEventListener("click",clickGenerateButton);
        }
        function onlyNumbers(e){
            var key = e.keyCode || e.which;
            var keyboard = String.fromCharCode(key);
            var num = "0123456789";
            var specials = "8-37-38-46";
            keyboard_special = false;
            for(var i in specials){
                if(key == specials[i]){
                    keyboard_special = true;
                }
            }
            if(num.indexOf(keyboard)== -1 && !keyboard_special){
                return false;
            }
        }
        let divFactors = document.getElementById("Factors");
        function getFactors(number)
            {
                let factors = [];
                if(number == 0){
                    divFactors.innerHTML = 'No factors for 0.'  
                   }
                else{
                    for(let i = 1; i <= Math.floor(Math.sqrt(number));++i)
                {
                    if(number % i == 0)
                    {
                        factors.push(i);
                        if(number / i != i)
                        {
                            factors.push( number / i);
                        }
                    }
                }
                factors.sort((a,b) => a - b);
                factorsString = factors.toString();
                factorsString = factorsString.replace(/,/g, "-");
                divFactors.innerHTML = factorsString;
            }
        }

        function clickGenerateButton()
        {
            let number = document.getElementById("number").value;
            number = parseInt(number);
            onlyNumbers(number);
            getFactors(number);
        }    