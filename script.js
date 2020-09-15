            function other(answer2, number2){
                if (parseInt(answer2)>parseInt(number2)){
                    alert("Liczba " + answer2 + " jest za duża!")
                }
                if (parseInt(answer2)<parseInt(number2)){
                    alert("Liczba " + answer2 + " jest za mała!")
                }
            }

            alert("Mini-Gra: Zgadnij liczbę!")
            alert("Celem gry jest zgadnięcie przez GRACZA2 liczby wpisanej przez GRACZA1 w 8 lub mniej rundach. Powodzenia! :)")

            let g1 = prompt ("GRACZ 1 - Podaj swoje imię/nick")
            let g2 = prompt ("GRACZ 2 - Podaj swoje imię/nick")

            let number = prompt(g1+": Podaj liczbę z zakresu od 0 do 200");
            parseInt(number);

            let end=0;

            if (number>-1 & number<201 & number!==""){
                for (i=0; i<8; i++){
                    let answer = prompt(g2+": Podaj liczbę z zakresu od 0 do 200 - próba " + (i+1));
                    parseInt(answer);
                    if (answer>-1 & answer<201 & answer!==""){
                        if (answer===number){
                        alert(g2+" wygrał w " + (i+1) + " rundzie!");
                        end++;
                        break;
                        }
                        else{
                        other(answer, number);
                        }
                    }
                    else{
                        alert("Liczba jest poza zakresem!");
                    }
                }
                if (end===0){
                    alert("Wygrał "+g1+"!")
                }
            }
            else{
                alert("Liczba jest poza zakresem! >(");
            }