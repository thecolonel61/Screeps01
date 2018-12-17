let roleRemoteRepairer = {


    run: function(creep){

        // Memory "Working" state switcher
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        }

        else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }
        // END Memory "Working" state switcher

        if (creep.memory.working === true) {

            if (creep.room.name === creep.memory.home) {

                // If no construction sites found move to exit
                let exit = creep.room.findExitTo(creep.memory.target);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#f7ff02'}});
            }

            if (creep.room.name === creep.memory.target) {

                // LOOK FOR CONSTRUCTION SITES
                let constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);


                // LOOK FOR REPAIR SITES
                let structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.hits < s.hitsMax && s.structureType !== STRUCTURE_WALL
                });

                // LOOK TO REPAIR IN TARGET ROOM
                if (structure != undefined || structure != null) {
                    if (creep.repair(structure) === ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.moveTo(structure, {visualizePathStyle: {stroke: '#FF0000'}});
                    }
                }

                // LOOK TO BUILD IN TARGET ROOM
                else if (constructionSite != undefined || constructionSite != null) {
                    if (creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#00FFFF'}});
                    }
                }

            }
        }

        else {
            // If creep not working and empty and creep is in remote room. Go home to refill
            if (creep.room.name === creep.memory.target) {

                // If in target room. Look for dropped resources. Pickup and use.
                let target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);

                if (target) {
                    if (creep.pickup(target) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(target, {visualizePathStyle: {stroke: '#ff0e18'}});
                    }
                }

                target = Game.getObjectById('5c1481b984fc1e52e91c5521')
                if (target.store.energy >= 150) {
                    if (creep.withdraw(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(target);
                    }
                }

                // If no dropped energy found go home
                if (target.store.energy < 150) {

                    // If no construction sites found move to exit
                    let exit = creep.room.findExitTo(creep.memory.home);
                    // move to exit
                    creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#f7ff02'}});
                }
            }

            // If creep is home and needs to refill
            if (creep.room.name === creep.memory.home) {

                let sources = Game.getObjectById('5c10172ced4dcc244c6c0f25');
                if (creep.withdraw(sources, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources);
                }
            }


        }
        // }


    }  // END FUNCTION (CREEP)
};

module.exports = roleRemoteRepairer;



// ARCHIVED CODE:

// LOOK TO REFILL ENERGY
// let needRefill = creep.carry.energy < 30 && Game.getObjectById('5c10e9f37c8e195cd3388f09').store.energy > 300;
// console.log(`I am looking for refill true, I found: ${needRefill}`);

// if (needRefill === true && creep.carry.energy === 0) {
//     console.log('I AM REFILLING AT CONTAINER');
//     let sources = Game.getObjectById('5c10e9f37c8e195cd3388f09');
//     if (creep.withdraw(sources, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
//         creep.moveTo(sources);
//     }
// }

// else {
// console.log('I am going HOME for energy');