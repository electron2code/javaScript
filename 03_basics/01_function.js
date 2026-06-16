function sayMyName() {
    console.log("Israfil");
}

sayMyName();
sayMyName();
sayMyName();

function addTwoNumbers(x, y) {
    // console.log(x + y);

    return x + y;
}

const result = addTwoNumbers(10, 20);

console.log("Result:", result);


function welcomeLoggedInUser(username = "anonymous") {
    // if (!username) {
    //     return;
    // }
    console.log(`Welcome, ${username}. You have just logged in.`);
}

welcomeLoggedInUser();



// handle arguments using rest operator (...nums)
// function calculateCartPrice(nums) {
//     return nums;
// }

// console.log(calculateCartPrice(300, 400, 700));

function calculateCartPrice(val1, val2, ...nums) {
    return nums;
}

console.log(calculateCartPrice(300, 400, 700, 450));


const user = {
    username: "Israfil",
    isLoggedIn: true,
}

function handleObjects({username, isLoggedIn}) {
    console.log(`username: ${username}, isLoggedIn: ${isLoggedIn}`);
}

const {username, isLoggedIn} = user;

handleObjects({
    username,
    isLoggedIn,
});