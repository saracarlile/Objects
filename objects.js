var jar = {};
jar.round = {};
jar.round = {contents: "water", 
             glass: "green",
             refill: function(){
             console.log("fill me");
            }
            };
jar.round.refill();

function full(){
  console.log("i\'m full");
}

jar.round.pour = full;
jar.round.pour();

//console reads: 
//"fill me"
//"i'm full"