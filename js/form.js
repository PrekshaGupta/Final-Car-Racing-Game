class Form{
    constructor(){
        this.input = createInput("Name");  // displaying text in the input box
        this.button = createButton('play');
        this.greeting = createElement('h3'); // to display text on the html page (createElement)
        this.title = createElement('h2');
        this.reset = createButton('reset'); // creating a button
    }

    hideForm(){  // for using in other class to change the game state
        this.greeting.hide(); // works with html elements (hide function)
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50,0); // position used for html elements

        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{ // => is binding to class file
            this.input.hide();
            this.button.hide();

            player.name = this.input.value()

            playerCount+= 1
            player.index = playerCount; // index value of player equals to player count

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);

            player.update();
            player.updateCount(playerCount); // updated player count
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({
                players:null,
                carsAtEnd:0
            })
        })
    }
}