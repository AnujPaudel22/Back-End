// function cookFood(food,time){
//     return new Promise((resolve, reject)=>{
//         if(!food) return("No food found");
//         setTimeout(()=>resolve(`${food} coked in  ${time} seconds`),time*1000);
//     })
// }

// async function prepareFood(){
//     try{
//         console.log("Cooking started");
//         const result= await cookFood("pizza",2);
//         console.log(result);
//         const result1= await cookFood("BURGER",3);
//         console.log(result1);
//         const result2= await cookFood("",1);
//         console.log(result2);

//     }catch(error){
//         console.error("Error");
//     }
// }

// prepareFood();

// let isPromise= new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Task completed successfully");
//     }
//     else{
//         reject("Task failed");
//     }
// });

// isPromise
// .then((result) => {
//     console.log(result);
// })

// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Task Finished");
// });

// Promise all
// Promise any
// Promise race

function cook(food,time){
    return new Promise((resolve,reject)=>{
        if(!food) return reject("Not found any food item");
        setTimeout(()=>{
           resolve(`${food} cooked in ${time} seconds`); 
        })
    })
}
function clean(room,time){
    return new Promise((resolve,reject)=>{
        if(!room) return reject("Not found any room");
        setTimeout(()=>{
           resolve(`${room} cleaned in ${time} seconds`); 
        })
    })
}
function playGame(game,time){
    return new Promise((resolve,reject)=>{
        if(!game) return reject("Not found any game");
        setTimeout(()=>{
            const success= Math.random()>0.3;
            if(success) resolve(`${game} played in ${time} seconds`); 
            else reject(`${game} game failed to play`);
        })
    })
}

// Promise.all([
//     cook("pasta",2),
//     clean("living room",3),
//     playGame("dice",1)
// ])
// .then((result)=>{
//     console.log("All tasks completed:");
//     result.forEach((msg)=>console.log(msg));
// })

// .catch((error)=>{
//     console.error("Error in one of the tasks:",error);
// })
// Promise.race([
//     cook("pasta",2),
//     clean("living room",3),
//     playGame("dice",1)
// ])
// .then((winner)=>{
//     console.log("All tasks completed:");
    
// })

// .catch((error)=>{
//     console.error("Error in one of the tasks:",error);
// })
Promise.any([
    cook("pasta",2),
    clean("living room",3),
    playGame("dice",1)
])
.then((winner)=>{
    console.log("All tasks completed:");
    
})

.catch((error)=>{
    console.error("Error in one of the tasks:",error);
})