let roleLongDistanceHarvester = {

    run: function (creep) {
        // creep.memory.working = false;

        let myLDH = _.filter(Game.creeps, (creep) => creep.memory.role === 'longDistanceHarvester');
        // console.log(myLDH.length);




        // **** SET SOURCE AND TARGET BASED ON CREEP ****
        if (creep === myLDH[0]) {
            if (creep.memory.target !== 'E29N42') {
                creep.memory.target = 'E29N42';
            }
            if (creep.memory.sourceIndex !== 0) {
                creep.memory.sourceIndex = 0;
            }
        }

        if (creep === myLDH[1]) {
            if (creep.memory.target !== 'E29N42') {
                creep.memory.target = 'E29N42';
            }
            if (creep.memory.sourceIndex !== 1) {
                creep.memory.sourceIndex = 1;
            }
        }
        // **** END OF SOURCE AND TARGET SETTING ****


        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working === true) {
            // if in home room
            if (creep.room.name === creep.memory.home) {

            }

            // if not in home room...
            else {
                // find exit to home room
                let exit = creep.room.findExitTo(creep.memory.home);
                // and move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit), {visualizePathStyle: {stroke: '#fff40b'}});
            }
        }


        // if creep is supposed to harvest energy from source
        else {
            // if in target room
            if (creep.room.name === creep.memory.target) {

                if (creep === myLDH[0]) {
                    // find source
                    let source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];

                    if (creep.pos !== 11, 4) {
                        creep.moveTo(11, 4);
                    }

                    // try to harvest energy, if the source is not in range
                    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                        // move towards the source
                        creep.moveTo(source);
                    }
                }

                if (creep === myLDH[1]) {
                    // find source
                    let source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];

                    if (creep.pos !== 42, 40) {
                        creep.moveTo(42, 40);
                    }

                    // try to harvest energy, if the source is not in range
                    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                        // move towards the source
                        creep.moveTo(source);
                    }
                }
            }
            // if not in target room
            else {
                // find exit to target room
                let exit = creep.room.findExitTo(creep.memory.target);
                // move to exit
                creep.moveTo(creep.pos.findClosestByPath(exit));
            }
        }
    }
};

module.exports = roleLongDistanceHarvester;