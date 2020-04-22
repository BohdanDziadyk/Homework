let stamina = 0;
let hunger = 0;
let money = 0;
let isDressedUp = false;
let isJobDone = false;
let isRoadJammed =false;
let isHomeworkDone = false;
function wakeUp(isRested,cb){
    setTimeout(() => {
        if (isRested) {
            stamina = 100;
            console.log("Waked up successfully!");
            cb(null, stamina);
        }
        else{
            console.log("You`re wake up to late to go to work");
            cb('LOW STAMINA');
        }
    },1000);
}
function haveBreakfast(stamina,cb) {
    setTimeout(()=>{
        if(stamina > 0){
            hunger = 100;
            console.log("You had a good meal");
            cb(null,hunger);
        }
        else {
            console.log("You slept away your meal");
            cb('YOU`RE HUNGRY');
        }
    },500);
}
function dressUp(hunger,cb) {
    setTimeout(()=>{
        if(hunger > 0){
            isDressedUp = true;
            console.log("You`re dressed up well");
            cb(null,isDressedUp);
        }
        else {
            console.log("You`re look like piece of shit");
            cb('YOU`RE NUDE');
        }
    },1500);
}
function goToWork(isDressedUp,cb) {
    setTimeout(()=>{
        if(isDressedUp){
            isRoadJammed = false;
            console.log("Road is free");
            cb(null,isRoadJammed);
        }
        else {
            console.log("Road is overloaded");
            cb('ROAD JAMMED');
        }
    },3000);
}
function arriveToWork(isRoadJammed,cb) {
    setTimeout(()=>{
        if(!isRoadJammed){
            money = 100;
            hunger -= 25;
            stamina -=25;
            console.log("You worked well");
            cb(null,money);
        }
        else {
            console.log("You don`t do a shit");
            cb('YOU`RE LAZY PIG');
        }
    },1500);
}
function goToCafe(money,cb) {
    setTimeout(() => {
    if(money > 25){
        money -= 25;
        hunger += 15;
        console.log("You had a good meal");
        cb(null,hunger);
    }
    else {
        console.log("Not enough money");
        cb('NOT ENOUGH MONEY');
    }
    },500);
}
function work(stamina,hunger,cb) {
    setTimeout(() => {
    if(hunger > 25){
        money += 100;
        hunger -= 35;
        stamina -= 25;
        isJobDone = true;
        console.log("You worked well");
        cb(null,hunger,isJobDone);
    }
    else {
        console.log("You don`t do a shit");
        cb('YOU`RE LAZY PIG');
    }
    },1500);
}
function goHome(isJobDone,cb) {
    setTimeout(() => {
    if(isJobDone){
        stamina -= 25;
        console.log("You go home");
        cb(null,stamina);
    }
    else {
        console.log("You still at work");
        cb('JOB IS NOT DONE');
    }
    },1000);
}
function doHomework(stamina,cb) {
    setTimeout(() => {
    if(stamina > 25){
        stamina -= 25;
        hunger -= 25;
        isHomeworkDone = true;
        console.log("You do homework well");
        cb(null,isHomeworkDone);
    }
    else {
        console.log("You don`t do a shit at home");
        cb('YOU`RE LAZY PIG');
    }
    },1500);
}
function goToSleep(isHomeworkDone,cb) {
    setTimeout(() => {
    if(isHomeworkDone){
        stamina += 100;
        console.log("You go to sleep");
        cb(null,stamina);
    }
    else {
        console.log("You still doing homework");
        cb('YOU DON`T DO HOMEWORK');
    }
    },3000);
}

wakeUp(true,(error,sStatus) => {
    if(error){
        console.error(error);
    }
    else {
        haveBreakfast(sStatus, (error,hStatus)=>{
            if(error)
            {
                console.error(error);
            }
            else {
                dressUp(hStatus,(error,dStatus) =>{
                    if(error){
                        console.error(error);
                    }
                    else{
                        goToWork(dStatus,(error,rStatus)=>{
                            if(error){
                                console.error(error);
                            }
                            else {
                                arriveToWork(rStatus,(error,mAmount)=>{
                                    if(error){
                                        console.error(error);
                                    }
                                    else {
                                        goToCafe(mAmount,(error,hStatus)=> {
                                            if(error) {
                                                console.error(error);
                                            }
                                            else{
                                                work(sStatus,hStatus,(error,hStatus)=>{
                                                    if(error){
                                                        console.error(error);
                                                    }
                                                    else {
                                                        goToCafe(mAmount,(error,hStatus)=>{
                                                            if(error){
                                                                console.error(error);
                                                            }
                                                            else {
                                                                work(sStatus,hStatus,(error,hStatus,jStatus)=>{
                                                                    if(error){
                                                                       console.error(error);
                                                                    }
                                                                    else {
                                                                        goHome(jStatus,(error,sStatus)=> {
                                                                            if(error){
                                                                                console.error(error);
                                                                            }
                                                                            else{
                                                                                doHomework(sStatus,(error,hwStatus)=>{
                                                                                    if(error){
                                                                                        console.error(error);
                                                                                    }
                                                                                    else{
                                                                                        goToSleep(hwStatus,(error,sStatus)=>{
                                                                                            if(error){
                                                                                                console.error(error);
                                                                                            }
                                                                                            else {
                                                                                                console.log(sStatus);
                                                                                            }
                                                                                        })
                                                                                    }
                                                                                })
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    }
);