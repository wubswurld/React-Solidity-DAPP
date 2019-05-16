const abi = [{
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "address"
        }],
        "name": "registeredUsers",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "takeOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isNewOwner",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "userAddress",
            "type": "address"
        }],
        "name": "getUserIndexByAddress",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "Username",
            "type": "string"
        }],
        "name": "getUserIndexByName",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getNumberOfUsers",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getNumberOfBadges",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "index",
            "type": "uint256"
        }],
        "name": "getUserByIndex",
        "outputs": [{
                "name": "Name",
                "type": "string"
            },
            {
                "name": "TotalBadges",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "index",
            "type": "uint256"
        }],
        "name": "getUserBadgesByIndex",
        "outputs": [{
            "name": "",
            "type": "uint256[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "UserAddress",
            "type": "address"
        }],
        "name": "getUserBadgesByAddress",
        "outputs": [{
            "name": "",
            "type": "uint256[]"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "index",
            "type": "uint256"
        }],
        "name": "getTotalUserBadgesByIndex",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "UserAddress",
            "type": "address"
        }],
        "name": "getTotalUserBadgesByAddress",
        "outputs": [{
            "name": "",
            "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "index",
            "type": "uint256"
        }],
        "name": "getBadgeByIndex",
        "outputs": [{
                "name": "CourseName",
                "type": "string"
            },
            {
                "name": "CourseAuthors",
                "type": "string"
            },
            {
                "name": "CourseCreationDate",
                "type": "string"
            },
            {
                "name": "CourseCategory",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "UserAddress",
                "type": "address"
            },
            {
                "name": "Username",
                "type": "string"
            }
        ],
        "name": "createUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "CourseName",
                "type": "string"
            },
            {
                "name": "CourseAuthors",
                "type": "string"
            },
            {
                "name": "CourseCreationDate",
                "type": "string"
            },
            {
                "name": "CourseCategory",
                "type": "string"
            }
        ],
        "name": "createBadge",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "userAddress",
                "type": "address"
            },
            {
                "name": "badgeIndex",
                "type": "uint256"
            }
        ],
        "name": "addBadgeToUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

module.exports = abi;
