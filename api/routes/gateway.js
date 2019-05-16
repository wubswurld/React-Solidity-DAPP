const contractABI = require('./abi.js');
const contractAddress = require('./ContractAddress.js');
const express = require('express');
const router = express.Router();
const Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var passportContract = web3.eth.Contract(contractABI, contractAddress);

//      passportContract.methods.getNumberOfUsers().call().then((tx) => {
//        console.log(tx);
//      });

// router.post('/createBadge', (req, res, next) => {
//   var ret = req.query;
//   console.log(ret);
//
//     // "name": "CourseName",
//     // "name": "CourseAuthors",
//     // "name": "CourseCreationDate",
//     // "name": "CourseCategory",
//
//   passportContract.methods.createBadge("Royal shuffling", "Burt Reynolds", "Today bitch", "Dancing")
// })
//0xcE8f6D32DAe7DBFc57A9C6174DB77e967Eee1AB5
router.post('/createBadge', (req, res) => {
    if (req.query.address)
        res.send('There should be no queries attached to your POST request')
    else {
        ret = req.body
        console.log(ret);
        web3.eth.getAccounts().then((accounts) => {
                passportContract.methods.createBadge(ret.courseName, ret.courseAuthor, ret.courseCreationDate, ret.courseCategory).send({
                    from: accounts[0],
                    gas: 10000000
                })
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
            })
            .then(() => {
                res.send('Successfully created badge')
                res.end()
            })
    }
})

router.post('/addBadgeToUser', (req, res) => {
    if (req.query.address)
        res.send('There should be no queries attached to your POST request')
    else {
        var ret = req.body;
        console.log(ret.address);
        console.log(ret.badge);
        web3.eth.getAccounts().then((accounts) => {
            var tx = new Promise((resolve, reject) => {
                passportContract.methods.addBadgeToUser(ret.address, ret.badge)
                    .send({
                        from: accounts[0],
                        gas: 10000000
                    })
                resolve();
            })
            tx.then((req) => {
                    console.log("Successfully added badge to User");
                    res.send("Successfully added badge to user");
                })
                .catch((err) => {
                    console.log(`Error: ${err}`)
                    res.send(err)
                })
        })
    }
})

router.post('/createUser', (req, res, next) => {
    if (req.query.address)
        res.send('There should be no queries attached to your POST request')
    else {
        var ret = req.body;
        web3.eth.getAccounts().then((accounts) => {
            console.log(`Smart contract inputs: ${ret.address} ${ret.userName}`)
            var tx = new Promise((resolve, reject) => {
                passportContract.methods.createUser(ret.address, ret.userName)
                    .send({
                        from: accounts[0],
                        gas: 10000000
                    })
                resolve();
            })
            tx.then((req) => {
                    console.log('Successfully created User');
                    res.send("Successfully created user");
                })
                .catch((err) => {
                    console.log(`Error: ${err}`)
                    res.send(err)
                    res.end()
                })
        })
    }
})

router.get('/', (req, res, next) => {
    res.send({
        name: "burt reynolds",
        badges: ["Honorable", "Swift Coder", "Better than average", "Youre half way there"]
    });
});

module.exports = router;

/*

//      passportContract.methods.getNumberOfUsers().call().then((tx) => {
//        console.log(tx);
//      });

*/
