const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
//Just to understand before adding to database
const user1 = {
    id: "1",
    email: "amitmaindola@gmail.com",
    password: "abcd1234",
    fName: "Amit",
    lName: "Maindola",
    friends: [{
            userId: "2",
            messages: [{
                senderId: "1",
                receiverId: "2",
                message: "Hii!"
            }, {
                senderId: "1",
                receiverId: "2",
                message: "How are you?"
            }, {
                senderId: "2",
                receiverId: "1",
                message: "Hello!"
            }, {
                senderId: "2",
                receiverId: "1",
                message: "I'm Fine"
            }]
        },
        {
            userId: "3",
            messages: [{
                senderId: "1",
                receiverId: "3",
                message: "Hii!"
            }, {
                senderId: "1",
                receiverId: "3",
                message: "How are you?"
            }, {
                senderId: "3",
                receiverId: "1",
                message: "Hello!"
            }, {
                senderId: "3",
                receiverId: "1",
                message: "I'm Fine"
            }]
        }
    ],
    notifications: [{
        notification: "John Doe liked your post."
    }, {
        notification: "John Doe commented on your post."
    }],
    posts: [{
        post: "Amit 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: [{
            userId: "2"
        }, {
            userId: "3"
        }],
        comments: [{
            userId: "3",
            comment: "Nice One"
        }]
    }, {
        post: "Amit 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: [{
            userId: "2"
        }],
        comments: [{
            userId: "3",
            comment: "Nice One"
        }, {
            userId: "2",
            comment: "Good"
        }]
    }]
}

const user2 = {
    id: "2",
    email: "ankitmaindola@gmail.com",
    password: "abcd1234",
    fName: "Ankit",
    lName: "Maindola",
    friends: [{
            userId: "1",
            messages: [{
                senderId: "1",
                receiverId: "2",
                message: "Hii!"
            }, {
                senderId: "1",
                receiverId: "2",
                message: "How are you?"
            }, {
                senderId: "2",
                receiverId: "1",
                message: "Hello!"
            }, {
                senderId: "2",
                receiverId: "1",
                message: "I'm Fine"
            }]
        },
        {
            userId: "3",
            messages: [{
                senderId: "2",
                receiverId: "3",
                message: "Hii!"
            }, {
                senderId: "2",
                receiverId: "3",
                message: "How are you?"
            }, {
                senderId: "3",
                receiverId: "2",
                message: "Hello!"
            }, {
                senderId: "3",
                receiverId: "2",
                message: "I'm Fine"
            }]
        }
    ],
    notifications: [{
        notification: "John Doe liked your post."
    }, {
        notification: "John Doe commented on your post."
    }],
    posts: [{
        post: "Amit 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: [{
            userId: "2"
        }, {
            userId: "3"
        }],
        comments: [{
            userId: "3",
            comment: "Nice One"
        }]
    }, {
        post: "Amit 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: [{
            userId: "2"
        }],
        comments: [{
            userId: "3",
            comment: "Nice One"
        }, {
            userId: "2",
            comment: "Good"
        }]
    }]
}

const user3 = {
    id: "3",
    email: "ajaymaindola222@gmail.com",
    password: "abcd1234",
    fName: "Ajay",
    lName: "Maindola",
    friends: [{
            userId: "1",
            messages: [{
                senderId: "2",
                receiverId: "3",
                message: "Hii!"
            }, {
                senderId: "2",
                receiverId: "3",
                message: "How are you?"
            }, {
                senderId: "3",
                receiverId: "2",
                message: "Hello!"
            }, {
                senderId: "3",
                receiverId: "2",
                message: "I'm Fine"
            }]
        },
        {
            userId: "2",
            messages: [{
                senderId: "1",
                receiverId: "3",
                message: "Hii!"
            }, {
                senderId: "1",
                receiverId: "3",
                message: "How are you?"
            }, {
                senderId: "3",
                receiverId: "1",
                message: "Hello!"
            }, {
                senderId: "3",
                receiverId: "1",
                message: "I'm Fine"
            }]
        }
    ],
    notifications: [{
        notification: "John Doe liked your post."
    }, {
        notification: "John Doe commented on your post."
    }],
    posts: [{
        post: "Amit 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: [{
            userId: "2"
        }, {
            userId: "3"
        }],
        comments: [{
            userId: "3",
            comment: "Nice One"
        }]
    }, {
        post: "Amit 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        likes: [{
            userId: "2"
        }],
        comments: [{
            userId: "3",
            comment: "Nice One"
        }, {
            userId: "2",
            comment: "Good"
        }]
    }]
}

var user = user3;


app.use(express.static("Assets"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

// const messageSchema = new mongoose.Schema({
//     senderId:String,
//     receiverId:String,
//     message : String
// },{timestamps:true});
// // const Message = new mongoose.model("User",messageSchema);

// const friendSchema = new mongoose.Schema({
//     userId : String,
//     messages : [messageSchema],
// },{ timestamps: true });

// const notificationSchema = new mongoose.Schema({
//     notification : String,
// },{timestamps:true});

// const likeSchema = new mongoose.Schema({
//     userId : String,
// },{timestamps:true});

// const commentSchema = new mongoose.Schema({
//     userId : String,
//     comment : String,
// },{timestamps:true});
// const postSchema = new mongoose.Schema({
//     postContent : String,
//     likes : [likeSchema],
//     comments : [commentSchema]
// },{timestamps:true});
// const userSchema = new mongoose.Schema( {
//     email : String,
//     password : String,
//     fName : String,
//     lName : String,
//     friends : [friendSchema],
//     notifications : [notificationSchema],
//     posts: [postSchema]
// },{timestamps:true});

app.get("/", function (req, res) {
    res.render("Login");
});
app.get("/login", function (req, res) {
    res.render("Login");
});
app.get("/register", function (req, res) {
    res.render("SignUp");
});
app.get("/home", function (req, res) {
    // const numberLike = user.posts[0].likes.length;
    res.render("home", {
        user: user
    });
});
app.get("/messages", function (req, res) {
    var lasts=[];
    for (let i = 0; i < user.friends.length; i++) {
        const len = user.friends[i].messages.length;
        const lastMessage = user.friends[i].messages[len-1] ;
        var last={
            userId : user.friends[i].userId,
            senderName : function () {
                if(lastMessage.senderId==user.id)
                    return "You";
                    else{
                        if(lastMessage.senderId==user1.id)
                        return user1.fName;
                        if(lastMessage.senderId==user2.id)
                        return user2.fName;
                        if(lastMessage.senderId==user3.id)
                        return user3.fName;
                    }
            },
            message : lastMessage.message
        }
    lasts.push(last);
    }
        res.render("messages", {
            lasts:lasts
        });
});
app.get("/notifications", function (req, res) {
    res.render("notifications", {
        notifications: user.notifications
    });
});
app.get("/account", function (req, res) {
    res.render("account");
});
app.get("/newpost", function (req, res) {
    res.render("newpost");
})
app.get("/messages/:userId",function (req,res) {
    userId = req.params.userId;
   if (userId==user1.id) {
       otherUser = user1;
   }
   if (userId==user2.id){
       otherUser = user2;
   }
   if (userId==user3.id) {
       otherUser = user3;
   }
   for (let i = 0; i < user.friends.length; i++) {
       if(user.friends[i].userId==userId)
       friendIndex=i;
   }
   var name1=user.fName+" "+user.lName;
   var name2=otherUser.fName+" "+otherUser.lName;
   res.render("conversation",{name2:name2,name1:name1,chat:user.friends[friendIndex].messages,myId:user.id,friendId:user.friends[friendIndex].userId,userFriendIndex:friendIndex});
});



app.post("/login",function (req,res) {
    if (req.body.email=="1") {
        user=user1;
    }
    if (req.body.email=="2") {
        user=user2;
    }
    if (req.body.email=="3") {
        user=user3;
    }
    res.redirect("home");
})

app.post("/newpost", function (req, res) {
    const newPost = {
        post: req.body.newpost,
        likes: [],
        comments: []
    }
    user.posts.unshift(newPost);
    res.redirect("/home")
})
app.post("/newmessage",function (req,res){
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const userFriendIndex = req.body.userFriendIndex;
    const newmessage = {
        senderId : sender,
        receiverId : receiver,
        message : req.body.chat
    }

    user.friends[userFriendIndex].messages.push(newmessage);

    if (user.id==sender) {
        friendId=receiver;
    }
    else{
        friendId=sender;
    }

    if(user1.id==friendId){
        for (let i = 0; i < user1.friends.length; i++) {
            if(user1.friends[i].userId==user.id){
                user1.friends[i].messages.push(newmessage);
            }
        }
    }
    if(user2.id==friendId){
        for (let i = 0; i < user1.friends.length; i++) {
            if(user2.friends[i].userId==user.id){
                user2.friends[i].messages.push(newmessage);
            }
        }
    }
    if(user3.id==friendId){
        for (let i = 0; i < user1.friends.length; i++) {
            if(user3.friends[i].userId==user.id){
                user3.friends[i].messages.push(newmessage);
            }
        }
    }
    res.redirect("/messages/"+friendId);
})
app.listen(3000, function () {
    console.log("The server has been started at port 3000.");
});