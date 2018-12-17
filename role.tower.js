let roleTower = {

    run: function (baseTower) {

        // let towers = _.filter(Game.room.structures, s => s.structureType === STRUCTURE_TOWER);
        let tower1 = Game.getObjectById('5c0ed0d2534f0023fe95c3a3');
        let tower2 = Game.getObjectById('5c12b1a816dbb85c979bc5e7');
        let towers = [tower1,tower2];

        for (let tower of towers) {
            let target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (target !== undefined) {
                // ...FIRE!
                tower.attack(target);
            }
        }

        for (let tower of towers) {
            let target = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (s) => s.hits < s.hitsMax && s.structureType
                    !== STRUCTURE_WALL
                    && s.structureType !== STRUCTURE_RAMPART
                    && s.structureType !== STRUCTURE_TOWER
            });

            tower.repair(target);

            // let walls = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            //     filter: (s) => s.structureType === STRUCTURE_WALL
            // });
            //
            // if (target !== walls) {
            //     tower.repair(target);
            // }

            // let ramparts = creep.room.find(FIND_STRUCTURES, {
            //     filter: (s) => s.structureType === STRUCTURE_RAMPART
            // });
            //
            // let target1 = undefined;
            //
            // // loop with increasing percentages
            // for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.0001) {
            //     // find a wall with less than percentage hits
            //     for (let rampart of ramparts) {
            //         if (rampart.hits / 40000 < percentage) {
            //             target1 = rampart;
            //             break;
            //         }
            //     }
            //
            //     // if there is one
            //     if (target1 !== undefined) {
            //         // break the loop
            //         break;
            //     }
            // }

            // // if we find a wall that has to be repaired
            // if (target1 !== undefined) {
            //     tower.repair(target1);
            // }


        }
    }
};

module.exports = roleTower;