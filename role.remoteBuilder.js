let roleRemoteBuilder = {


    run: function (creep) {

        // let test = _.filter(Game.creeps, (creep) => creep.memory.role === 'remoteBuilder');
        // console.log(test);
        // console.log(test[0]);
        // console.log(test[1]);


        // if (creep.room.name === creep.memory.target2){
        //     if(creep.room.controller) {
        //         if(creep.signController(creep.room.controller, "Si Vis Pacem Para Bellum!") == ERR_NOT_IN_RANGE) {
        //             creep.moveTo(creep.room.controller);
        //         }
        //     }
        // }

        // Memory "Working" state switcher
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        } else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }
        // END Memory "Working" state switcher


        if (creep.memory.working === true) {

            if (creep.room.name === creep.memory.home) {

                // LOOK FOR EXIT FROM HOME ROOM
                let exit = creep.room.findExitTo(creep.memory.target1);
                // MOVE TO EXIT
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#f7ff02'}});
            }
            if (creep.room.name === creep.memory.target1) {

                // LOOK FOR CONSTRUCTION SITES
                let constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

                // LOOK TO BUILD IN TARGET ROOM
                if (constructionSite !== undefined || constructionSite != null) {
                    if (creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#00FFFF'}});
                    }
                }

                if (constructionSite === null || constructionSite === undefined) {
                    // LOOK FOR EXIT FROM TARGET1
                    let exit = creep.room.findExitTo(creep.memory.target2);
                    // MOVE TO EXIT
                    creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#f7ff02'}});
                }
            }
            if (creep.room.name === creep.memory.target2) {

                // LOOK FOR CONSTRUCTION SITES
                let constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                // LOOK TO BUILD IN TARGET ROOM
                if (constructionSite !== undefined || constructionSite != null) {
                    if (creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#00FFFF'}});
                    }
                }
            }
        } else {

            // IF CREEP IS IN HOME ROOM
            if (creep.room.name === creep.memory.home) {

                let sources = Game.getObjectById('5c10172ced4dcc244c6c0f25');
                if (creep.withdraw(sources, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources);
                }
            }

            // If creep not working and empty and creep is in remote room.
            if (creep.room.name === creep.memory.target1 || creep.room.name === creep.memory.target2) {
                let sources = creep.pos.findClosestByRange(FIND_SOURCES);
                if (creep.harvest(sources) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources, {visualizePathStyle: {stroke: '#FFFFFF'}});
                }
            }
        }
    }
};

module.exports = roleRemoteBuilder;


// ARCHIVED CODE:

// target = Game.getObjectById('5c1481b984fc1e52e91c5521')
// if (target.store.energy >= 150) {
//     if (creep.withdraw(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
//         creep.moveTo(target);
//     }
// }

// If no dropped energy found go home
// if (target.store.energy < 150) {
//
//     // If no construction sites found move to exit
//     let exit = creep.room.findExitTo(creep.memory.home);
//     // move to exit
//     creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#f7ff02'}});
// }
// }

// If creep is home and needs to refill
// if (creep.room.name === creep.memory.home) {
//
//     let sources = Game.getObjectById('5c10172ced4dcc244c6c0f25');
//     if (creep.withdraw(sources, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
//         creep.moveTo(sources);
//     }
// }



// LOOK FOR REPAIR SITES
// let structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
//     filter: (s) => s.hits < s.hitsMax && s.structureType !== STRUCTURE_WALL
// });


// LOOK TO REPAIR IN TARGET ROOM
// else if (structure != undefined || structure != null) {
//     if (creep.repair(structure) === ERR_NOT_IN_RANGE) {
//         // move towards it
//         creep.moveTo(structure, {visualizePathStyle: {stroke: '#FF0000'}});
//     }
// }