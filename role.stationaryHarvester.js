let roleStationaryHarvester = {

    run: function (creep) {

        creep.memory.working = false;



        // If Creep working = true and has no carry energy set working = false
        // if (creep.memory.working === true && creep.carry.energy === 0) {
        //     creep.memory.working = false;
        // }
        //
        // else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
        //     creep.memory.working = true;
        // }
        if (creep.memory.working === true) {
            let primaryContainer = Game.getObjectById('5c0e71865a83755cac125445');
            // console.log(`Container1: ${primaryContainer[0]}`);
            // console.log(`Container2: ${primaryContainer[1]}`);
            if (creep.transfer(primaryContainer, 'energy') === ERR_NOT_IN_RANGE){
                creep.moveTo(primaryContainer)
            }

        }

        else {
            let source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }

        }
    }

};

module.exports = roleStationaryHarvester;