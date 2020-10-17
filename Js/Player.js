class Player{
    constructor(){}
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
        
    }
    update(name){
        var playerIndex = "Player"+playerCount
        database.ref(playerIndex).set({
            name:name
        })
    }
    getCount(){
         database.ref('playerCount').on("value",function(data)
    {
        playerCount = data.val();
    })}

}