var myjam = prompt("What is your favorite song in this genre?");
$(".messages #myjam").text('You: Hi! My jam is "'+myjam+'"!');

var messageField = $('#chatInput');
var messageList = $('#messageList');

var unique_user = 'anon' + (Date.now() * Math.random());

var video = window.location.href.substring(window.location.href.indexOf("?")+7);
var ref = new Firebase('https://glowing-fire-9979.firebaseio.com/'+video);

var room = null;
var total_rooms = 0;

var roomtest = null;

ref.once('value', function (snapshot) {
    total_rooms = snapshot.numChildren();
    // iterate over rooms
    var connected = snapshot.forEach(function (child) {
        // no more than 2 people per room
        if (snapshot.child(child.key()+'/people').numChildren() < 2) {
            // join this room
            room = child.key();
            ref.child(room+'/people').push({name: unique_user, jam: myjam});
            return true;
        }
    });
    if (!connected || !room) {
        room = 'room'+(total_rooms+1);
        data = {};
        data[room] = {people: {}, messages: {}};
        ref.set(data);
        ref.child(room+'/people').push({name: unique_user, jam: myjam});
    }
    ref.child(room+'/people').on('value', function (snapshot) {
        if (snapshot.numChildren()==2) {
            $(".messages li#placeholder").text("A stranger has connected. Say Hi!");
            snapshot.forEach(function (p) {
                var person = p.val();
                if (person.name!=unique_user) {
                    $(".messages #strangerjam").text('Stranger: Hi! My jam is "'+person.jam+'"!');
                    $("#chatbox .messages:first-child").show();
                }
            });
            messageField.keypress(function(e) {
                if (e.keyCode == 13) {
                    //FIELD VALUES
                    var message = messageField.val();

                    //SAVE DATA TO FIREBASE AND EMPTY FIELD
                    ref.child(room+'/messages').push({
                        name: unique_user,
                        text: message
                    });
                    messageField.val('');
                }
            });

            ref.child(room+'/messages').on('child_added', function (snapshot) {
                //GET DATA
                var data = snapshot.val();

                $(".messages li#placeholder").remove();

                if (data.name == unique_user) {
                    var username = 'You';
                } else {
                    var username = 'Stranger';
                }
                var message = data.text;

                //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
                var messageElement = $("<li>");
                var nameElement = $("<span class='user'></span>")
                nameElement.text(username);
                messageElement.text(message).prepend(nameElement);

                //ADD MESSAGE
                messageList.append(messageElement)

                //SCROLL TO BOTTOM OF MESSAGE LIST
                messageList[0].scrollTop = messageList[0].scrollHeight;
            });
        }
    });
});

