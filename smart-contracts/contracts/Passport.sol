pragma solidity ^0.5.1;

import "./ownable.sol";

contract Passport is Ownable {

    struct user {
        string Name;
        uint256[] AllBadges;
        uint256 UserIndex;
    }

    struct badge {
        string CourseName;
        string CourseAuthors;
        string CourseCreationDate;
        string CourseCategory;
    }

    // contains a reference to the index in the array where the user resides
    mapping (string => uint256) private userIndexByName;
    mapping (address => uint256) public registeredUsers;

    mapping (string => badge) private badgeByCourseName;
    // contains a reference to the index in the array where the user resides


    user[] private allUsers;
    badge[] private allBadges;

    constructor() public {
        user memory garbageValueUser;

        garbageValueUser.Name = "";
        garbageValueUser.UserIndex = 0;

        registeredUsers[address(0)] = 0;
        userIndexByName[""] = 0;
        allUsers.push(garbageValueUser);
    }

    /*
        Getters
    */
    function getUserIndexByAddress(address userAddress) public view returns (uint256) {
        uint256 userIndex = registeredUsers[userAddress];
        require(userIndex != 0);
        return (userIndex);
    }

    function getUserIndexByName(string memory Username) public view returns (uint256) {
        uint256 userIndex = userIndexByName[Username];
        return (userIndex);
    }

    function getNumberOfUsers() public view returns (uint256) {
        return allUsers.length;
    }

    function getNumberOfBadges() public view returns (uint256) {
        return allBadges.length;
    }

    function getUserByIndex(uint256 index) public view returns (
        string memory Name,
        uint256 TotalBadges
        ) {
        return (
            allUsers[index].Name,
            allUsers[index].AllBadges.length
            );
    }

    function getUserBadgesByIndex(uint256 index) public view returns (
        uint256[] memory
        ) {
        uint256 totalBadgeAmount = allUsers[index].AllBadges.length;
        uint256[] memory allUserBadges = new uint256[](totalBadgeAmount);
        for (uint256 i = 0; i < allUsers[index].AllBadges.length; i++) {
            allUserBadges[i] = allUsers[index].AllBadges[i];
        }
        return allUserBadges;
    }

    function getUserBadgesByAddress(address UserAddress) public view returns (
        uint256[] memory
        ) {
        uint256 userIndex = registeredUsers[UserAddress];
        uint256 TotalBadgeAmount = allUsers[userIndex].AllBadges.length;
        uint256[] memory AllUserBadges = new uint256[](TotalBadgeAmount);
        for (uint256 i = 0; i < allUsers[userIndex].AllBadges.length; i++) {
            AllUserBadges[i] = allUsers[userIndex].AllBadges[i];
        }
        return AllUserBadges;
    }

    function getTotalUserBadgesByIndex(uint256 index) public view returns (uint256) {
        return allUsers[index].AllBadges.length;
    }

    function getTotalUserBadgesByAddress(address UserAddress) public view returns (uint256) {
        return allUsers[registeredUsers[UserAddress]].AllBadges.length;
    }

    function getBadgeByIndex(uint256 index) public view returns (
        string memory CourseName,
        string memory CourseAuthors,
        string memory CourseCreationDate,
        string memory CourseCategory
        ) {
            return (
                allBadges[index].CourseName,
                allBadges[index].CourseAuthors,
                allBadges[index].CourseCreationDate,
                allBadges[index].CourseCategory
                );
    }

    /*
        Setters
    */

    function createUser(
        address UserAddress,
        string memory Username
        ) public onlyOwner {

        require(keccak256(bytes(Username)) != keccak256(""));
        require(allUsers[registeredUsers[UserAddress]].AllBadges.length == 0);
        require(keccak256(bytes(allUsers[registeredUsers[UserAddress]].Name)) == keccak256(""));
        require(userIndexByName[Username] == 0);

        user memory NewUser;
        NewUser.Name = Username;
        NewUser.UserIndex = allUsers.length;

        userIndexByName[Username] = allUsers.length;
        registeredUsers[UserAddress] = allUsers.length;
        allUsers.push(NewUser);
    }

    function createBadge(
        string memory CourseName,
        string memory CourseAuthors,
        string memory CourseCreationDate,
        string memory CourseCategory
        ) public onlyOwner {
        string memory TestCourseName = badgeByCourseName[CourseName].CourseName;
        require(keccak256(bytes(TestCourseName)) == keccak256(abi.encodePacked("")));

        badge memory NewBadge;
        NewBadge.CourseName = CourseName;
        NewBadge.CourseAuthors = CourseAuthors;
        NewBadge.CourseCreationDate = CourseCreationDate;
        NewBadge.CourseCategory = CourseCategory;

        badgeByCourseName[CourseName] = NewBadge;
        allBadges.push(NewBadge);
    }

    function addBadgeToUser(
        address userAddress,
        uint256 badgeIndex
        ) public onlyOwner {
        require(badgeIndex < allBadges.length, "Error, Badge out of bounds");

        //update the user's information in the mapping
        user storage userToAddBadge = allUsers[registeredUsers[userAddress]];
        userToAddBadge.AllBadges.push(badgeIndex);
    }
}
