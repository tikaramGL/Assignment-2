var userListData = [{
	"id": 1,
	"first_name": "Tilda Shere"
}, {
	"id": 2,
	"first_name": "Britte Woolerton"
}, {
	"id": 3,
	"first_name": "Oralle Chasier"
}, {
	"id": 4,
	"first_name": "Ainslie Gilffilland"
}, {
	"id": 5,
	"first_name": "Tiphanie Wheeliker"
}, {
	"id": 6,
	"first_name": "Vivia Saunton"
}, {
	"id": 7,
	"first_name": "Eula Giacovetti"
}, {
	"id": 8,
	"first_name": "Gardener Hyndson"
}, {
	"id": 9,
	"first_name": "Rivi Premble"
}, {
	"id": 10,
	"first_name": "Shelley Boow"
},
{
	"id": 11,
	"first_name": "Hannie Bavidge"	
}, {
	"id": 12,
	"first_name": "Cicely Passmore"	
}, {
	"id": 13,
	"first_name": "Nat Zelley",	
}, {
	"id": 14,
	"first_name": "Quincy Sambrok",
}, {
	"id": 15,
	"first_name": "Alleyn Redman",	
}
];

function fndragStart(event) {
	event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
	var data = event.dataTransfer.getData("Text");
	event.target.className = 'highlight';
	event.target.appendChild(document.getElementById(data));
	//adding button to target
	var b = document.createElement('button');
	//b.setAttribute('content', 'test content');
	b.setAttribute('class', 'cancel-btn');
	b.innerHTML = 'X';
	event.target.appendChild(b);
}

function genUserList() {
    for (var i = 0; i < userListData.length; i++) {
		var user = userListData[i];
		
		//adding User DIV dynamically to DOM
		var node = document.createElement("DIV");
		node.id = 'dragtarget';
		node.setAttribute('draggable', true);
		node.setAttribute('class', 'user-list-items');
		node.addEventListener('dragstart', ev => {
			fndragStart(ev);
		}, false);
        var textnode = document.createTextNode(user.first_name);
		node.appendChild(textnode);
		document.getElementById('user-list-section').appendChild(node);
    }
}