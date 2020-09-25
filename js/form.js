class Form{
    constructor(){

    }

    display(){
        var title= createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);
        var input= createInput("Name");
        var button = createButton("Play");
        var greeting = createElement("h3");
        button.position(250,200);
        input.position(130,160);
        button.mousePressed(()=>{
            input.hide();
            button.hide();
            var name=input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(130,160);
        });

    }
}