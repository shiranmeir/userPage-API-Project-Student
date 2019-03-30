//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = { }
    }

    loadData(){
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: (users) => {
            this.data.mainUser= {firstName: users.results[0].name.first,
                        lastName: users.results[0].name.last,
                         city: users.results[0].location.city,
                         state: users.results[0].location.state,
                         picture: users.results[0].picture.medium
                        } 

            let friends=[]
        
            for(let i = 1; i < 7; i++){
                let n = users.results[i]
                friends.push({firstName: n.name.first,
                              lastName: n.name.last})
            }
            this.data.myFriends=friends
            }
        })
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 900)}`,
            success:(poke)=>{
            this.data.pokemon={name: poke.name,
                              image: poke.sprites.front_default
                              }
            }
        })
        $.ajax({
            method:"GET",
            url:"https://baconipsum.com/api/?callback=?&paras=2",
            success: (text)=>{
            this.data.meatText=text   
            }
        })
        // $.ajax({
        //     method:"GET",
        //     url: "",
        //     success: (quote)=>{
        //     this.data.myQuote
        //     }
        // })





               
        //you should make all your API requests here
        //each request should update the `data` object accordingly
    }

}
