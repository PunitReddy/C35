class Form{
    constructor(){

    }

    display(){

    var title = createElement("h2")
    title.html("Car Racing Game")
    title.position(100, 10)
    
    var input = createInput("Name")
    input.position(50, 100)

    var button = createButton("Play")
    button.position(150, 150)

    var greeting = createElement("h3")
    button.mousePressed(function(){

        input.hide()
        button.hide()

        var name = input.value()
        greeting.html(" Hello " + name)
        greeting.position(100, 100)

        playerCount = playerCount + 1
        player.update(name)

        player.updateCount(playerCount)
    })
    }


}