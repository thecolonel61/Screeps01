let roleBuilder = require('role.builder');

let roleRepairer = {

    run: function (creep) {


        // If Creep working = true and has no carry energy set working = false
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
        }

        else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
            }

        if (creep.memory.working === true) {
            let structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => s.hits < s.hitsMax && s.structureType !== STRUCTURE_WALL});


            if (structure !== undefined) {
                // try to repair it, if it is out of range
                if (creep.repair(structure) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure, {visualizePathStyle: {stroke: '#FF0000'}});
                }
            }

            else {
                roleBuilder.run(creep);

            }
        }

        else {
            // find closest container
            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType === STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 500
            });
            
            if (container === undefined) {
                container = creep.room.storage;
            }
            


            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (creep.withdraw(container, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(container, {visualizePathStyle: {stroke: '#FFFFFF'}});
                }
            }
            
            else {
                let sources = creep.room.find(FIND_SOURCES);
                if (creep.harvest(sources[1]) === ERR_NOT_IN_RANGE){
                    creep.moveTo(sources[1]);
                }
            }
        }
        
                    //             else {
            // let sources = creep.room.find(FIND_SOURCES);
            // if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
            //     creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#FFFFFF'}});
            // }

        // else {
        //     let sources = creep.room.find(FIND_SOURCES);
        //     if (creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#FFFFFF'}});
        //     }

        // }

        // else if (creep.withdraw(creep.room.storage, 'energy') === ERR_NOT_IN_RANGE){
        //     creep.moveTo(creep.room.storage);
        // }
    }
};

module.exports = roleRepairer;