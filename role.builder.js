let roleWallRepairer = require("role.wallRepairer");

let roleBuilder = {


    run: function(creep){

        // If Creep working = true and has no carry energy set working = false
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        }

        else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity){
            creep.memory.working = true;
        }

        if (creep.memory.working === true) {

            let constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);


            if (constructionSite != undefined || constructionSite != null) {
                if (creep.build(constructionSite) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#00FFFF'}});
                }
            }

            else {

                roleWallRepairer.run(creep);

                // let ramparts = creep.room.find(FIND_STRUCTURES, {
                //     filter: (s) => s.structureType === STRUCTURE_RAMPART
                // });
                //
                // let target = undefined;
                //
                // // loop with increasing percentages
                // for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.0001) {
                //     // find a wall with less than percentage hits
                //     for (let rampart of ramparts) {
                //         if (rampart.hits / rampart.hitsMax < percentage) {
                //             target = rampart;
                //             break;
                //         }
                //     }
                //
                //     // if there is one
                //     if (target !== undefined) {
                //         // break the loop
                //         break;
                //     }
                // }
                //
                // // if we find a wall that has to be repaired
                // if (target !== undefined) {
                //     // try to repair it, if not in range
                //     if (creep.repair(target) === ERR_NOT_IN_RANGE) {
                //         // move towards it
                //         creep.moveTo(target, {visualizePathStyle: {stroke: '#00FFFF'}});
                //     }
                // }
            }
        }

        else {
            let sources = Game.getObjectById('5c10172ced4dcc244c6c0f25');
            if (creep.withdraw(sources, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources);
            }
        }

    }  // END FUNCTION (CREEP)

};
module.exports = roleBuilder;

