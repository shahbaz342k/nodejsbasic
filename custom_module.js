// function run() {
//     console.log('this is run');
// }

// function walk() {
//     console.log('this is walk');
// }

// module.exports.run = run;
// module.exports.walk = walk;

// module.exports = {
//     run: function() {
//         console.log('this is come from runs');
//     },
//     walk: function() {
//         console.log('this is come from walks');
//     }
// };

module.exports = {
    run: () => {
        console.log('this is come from run');
    },
    walk: () => {
        console.log('this is come from walk');
    }
};