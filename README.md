# nick-and-jaspers-bizzarre-adventure
We hebben gekozen om het Façade design pattern uit te werken.
Dit hebben we gedaan omdat een façade het meeste nut heeft in Functional programming vergeleken met de andere dat we gebruikt hebben.
Waar bij OO een façade een externe klasse is, is dit bij functional een eigen functie waarin al de andere functies in worden aangeroepen.
Dit prinicipe zorgt voor een betere structuur in het project waardoor ze leesbaarder wordt.

Een verschil in het project is dat bij OO we de machine vullen met "Items", deze zijn instanties van de klasse "Item". 
Bij functional programming wouden we vermijden van een object te gebruiken, dus hebben we een Array gebruikt. 
Deze Array kreeg dan Int waardes mee om op te slaan:

                                                        - In welke rij het object was
                                                        - Hoeveel er in de rij nog zaten
                                                        - Van welk type het object was

De code is in JS hierdoor iets minder "straight forward" om te lezen.