let roleUpgrader = {

    run: function(creep) {

        let spotOneX = 24;
        let spotOneY = 17;
        let spotTwoX = 25;
        let spotTwoY = 17;
        let spotThreeX = 25;
        let spotThreeY = 18;
        let upgradeSpotOne = (spotOneX + ',' + spotOneY);
        let upgradeSpotTwo = (spotTwoX + ',' + spotTwoY);
        let upgradeSpotThree = (spotThreeX + ',' + spotThreeY);

        // // console.log(spotOneX + ',' + spotOneY);
        // console.log(upgradeSpotOne);
        // // console.log(creep.pos);
        // console.log(upgradeSpotTwo);
        // console.log(upgradeSpotThree);
        // console.log(creep.pos === upgradeSpotOne || creep.pos === upgradeSpotTwo || creep.pos === upgradeSpotThree);
        // console.log();
        //
        // if (creep.pos === upgradeSpotOne || creep.pos === upgradeSpotTwo || creep.pos === upgradeSpotThree) {
        //     creep.moveTo()
        // }



    // If Creep working = true and has no carry energy set working = false
    if (creep.memory.working === true && creep.carry.energy === 0){
        creep.memory.working = false;
    }

    else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity){
        creep.memory.working = true;
    }

    if (creep.memory.working === true) {
        if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE){
            creep.moveTo(creep.room.controller);
        }
    }

    else {
        let storage = Game.getObjectById('5c10172ced4dcc244c6c0f25');
        if (creep.withdraw(storage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
            // move towards it
            creep.moveTo(storage);
        }
    }
}
};

module.exports = roleUpgrader;

//   else {
//             // find closest container
//             let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
//                 filter: s => s.structureType === STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 500
//             });
            
//             if (container === undefined) {
//                 container = creep.room.storage;
//             }
//                   // if one was found
//             if (container != undefined) {
//                 // try to withdraw energy, if the container is not in range
//                 if (creep.withdraw(container, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
//                     // move towards it
//                     creep.moveTo(container, {visualizePathStyle: {stroke: '#FFFFFF'}});
//                 }
//             }
            
//             else {
//                 let sources = creep.room.find(FIND_SOURCES);
//                 if (creep.harvest(sources[1]) === ERR_NOT_IN_RANGE){
//                     creep.moveTo(sources[1]);
//                 }
//             }
//         }

    // else if (creep.withdraw(creep.room.storage, 'energy') === ERR_NOT_IN_RANGE){
    //     creep.moveTo(creep.room.storage);
    // }


    // else {
    //     let sources = creep.room.find(FIND_SOURCES);
    //     if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
    //         creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#FFFFFF'}});
    //     }

    // }
    // else {
    //     let source = creep.pos.findClosestByPath(FIND_SOURCES);
    //     if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
    //         creep.moveTo(source)
    //     }
    // }
