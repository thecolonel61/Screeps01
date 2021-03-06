let roleRampartRepairer = {

    run: function (creep) {

        // if creep is trying to repair something but has no energy left
        if (creep.memory.working === true && creep.carry.energy === 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to repair something
        if (creep.memory.working === true) {
            // find all ramparts in the room
            let ramparts = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType === STRUCTURE_RAMPART
            });

            let target = undefined;

            // loop with increasing percentages
            for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.005){
                // find a rampart with less than percentage hits
                for (let rampart of ramparts) {
                    if (rampart.hits / rampart.hitsMax < percentage) {
                        target = rampart;
                        break;
                    }
                }

                // if there is one
                if (target !== undefined) {
                    // break the loop
                    break;
                }
            }

            // if we find a rampart that has to be repaired
            if (target !== undefined) {
                // try to repair it, if not in range
                if (creep.repair(target) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(target);
                }
            }
            // if we can't fine one
            else {
                // look for construction sites

            }
        }


        else {
            if (creep.memory.working === false){
                let sources = Game.getObjectById('5c10172ced4dcc244c6c0f25');
                if (creep.withdraw(sources, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources);
                }
            }
        }
        // if creep is supposed to harvest energy from source
        // else {
        //     // find closest source
        //     let source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE, {
        //         filter: (s) => s.energy > 0
        //     });
        //     // try to harvest energy, if the source is not in range
        //     if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
        //         // move towards the source
        //         creep.moveTo(source);
        //     }
        // }


    }
};

module.exports = roleRampartRepairer;