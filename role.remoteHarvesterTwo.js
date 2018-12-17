let roleRemoteHarvesterTwo = {

    run: function(creep) {

        // If Creep working = true and has no carry energy set working = false
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        }

        else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }


        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working === true) {
            // if in home room
            if (creep.room.name === creep.memory.home) {

                let structure = Game.getObjectById('5c159ad151062f1d965e2965');

                // if we found one
                if (structure !== undefined) {
                    // try to transfer energy, if it is not in range
                    if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.moveTo(structure, {reusePath: 50});
                    }
                }
            }


            // if not in home room...
            else {
                // find exit to home room
                let exit = creep.room.findExitTo(creep.memory.home);
                // and move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {reusePath: 50});
            }
        }


        // if creep is supposed to harvest energy from source
        else {
            // if in target room
            if (creep.room.name === creep.memory.target) {

                // find source
                let source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];


                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                    // move towards the source
                    creep.moveTo(source, {visualizePathStyle: {stroke: '#fff40b'}}, {reusePath: 50});
                }
            }
            // if not in target room
            else {
                // find exit to target room
                let exit = creep.room.findExitTo(creep.memory.target);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {reusePath: 200});
            }
        }
    }
};

module.exports = roleRemoteHarvesterTwo;