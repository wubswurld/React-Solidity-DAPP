const contractABI = require('./abi.js');
const express = require('express');
const router = express.Router();
const contractAddress = require('./ContractAddress.js');
const Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

var passportContract = web3.eth.Contract(contractABI, contractAddress);

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// router.get('/getUserByAddress', (req, res) => {
//   if (req.query.address)
//       res.send('There should be no queries attached to your POST request')
//       {
//         var ret = req.body;
//         passportContract.methods.get
//       }
// })

router.get('/getUserByIndex', (req, res) => {
    var ret = req.body;

    passportContract.methods.getUserByIndex(ret.index)
        .call()
        .then((user) => {
            var userObject = {
                "name": user.Name,
                "totalBadges": web3.eth.utils.hexToNumber(user.TotalBadges._hex)
            }
            // console.log(user);
            // console.log(user.Name);
            // console.log(user.TotalBadges._hex);
            // console.log(userObject);
            res.send(userObject)
        })
})



router.get('/allUsers', (req, res) => {
    const tasks = [];

    function getUser(index) {
        return new Promise(resolve => {
            passportContract.methods.getUserByIndex(index)
                .call()
                .then((user) => {
                    console.log(user);
                    resolve(user)
                })
        }, reject => {
            res.send('error')
        })
    }
    passportContract.methods.getNumberOfUsers().call()
        .then((totalUsers) => {
            totalUsers = web3.eth.utils.hexToNumber(totalUsers._hex)
            for (let i = 1; i < totalUsers; i++) {
                tasks.push(() => getUser(i));
            }

            const arrayOfPromises = tasks.map(task => task())
            Promise.all(arrayOfPromises)
                .then(result => {
                    console.log({
                        result
                    });
                    res.send(result)
                    res.end()
                })
        })
})



// Todo for curtis
router.get('/allUserBadgesByAddress', (req, res) => {
    var ret = req.query.address ? req.query : req.body
    const tasks = [];
    console.log(ret);
    function getBadge(index) {
        return new Promise(resolve => {
            passportContract.methods.getBadgeByIndex(index)
                .call()
                .then((badge) => {
                    console.log(badge);
                    resolve(badge)
                })
        }, reject => {
            res.send('error')
        })
    }
    passportContract.methods.getUserBadgesByAddress(ret.address)
        .call()
        .then((badges) => {
            for (let i = 0; i < badges.length; i++) {
                tasks.push(() => getBadge(i));
            }

            const arrayOfPromises = tasks.map(task => task())
            Promise.all(arrayOfPromises)
                .then(result => {
                    console.log({
                        result
                    });
                    res.send(result)
                    res.end()
                })
        })
})




router.get('/getUserbyName', (req, res) => {
    var ret = req.body;
    passportContract.methods.getUserIndexByName(ret.userName).call()
        .then((index) => {
            index = web3.eth.utils.hexToNumber(index)
            passportContract.methods.getUserByIndex(index)
                .call()
                .then((user) => {
                    res.send(user)
                })
        })
        .catch((err) => {
            console.log(err);
            res.send(-1);
        })
})


router.get('/getUserInfoByIndex', (req, res) => {
    passportContract.methods.getUserByIndex(req.body.userIndex).call()
        .then((getUserInfo) => {
            res.send(getUserInfo);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
})

router.get('/allBadges', (req, res) => {
    var allBadges = [];
    passportContract.methods.getNumberOfBadges().call()
        .then((totalBadges) => {
            console.log(`Total badges: ${totalBadges}`)
            for (var i = 0; i < totalBadges; i++) {
                passportContract.methods.getBadgeByIndex(i).call().then((badge) => {
                    allBadges.push(badge);
                    console.log(badge);
                })
            }
            console.log(allBadges);
            return allBadges;
        }).then((e) => {
            sleep(1000).then(() => {
                res.send(e);
            })
        })
})

// passportContract.methods.createBadge("Royal shuffling", "Burt Reynolds", "Today bitch", "Dancing").call({
//   from
// })

module.exports = router;
