function fndragStart(event) {
	event.dataTransfer.setData("Text", event.target.id);
}

function dragLeave(event) {
	event.target.style.border = "";
}

function dragOver(event) {
	event.target.style.border = "2px dotted #ff8a65";
}

function allowDrop(event) {
	event.preventDefault();
	dragOver(event)
}

function drop(event) {
    event.preventDefault();
	var data = event.dataTransfer.getData("Text");
	event.target.appendChild(document.getElementById(data));
	//adding button to target
	var b = document.createElement('button');
	b.setAttribute('id', 'cancelActionBtn');
	b.setAttribute('class', 'cancel-btn');
	b.innerHTML = 'X';
	
	//get username
	var userName = event.target.querySelector('div').textContent;
	//b.onclick = cancelBtnClick;
	//function on cancel btn click
	b.addEventListener("click", function() {
		this.parentNode.innerHTML="";

		//adding name to list
		var node = document.createElement("DIV");
		node.id = 'dragtarget_'+userName;
		node.setAttribute('draggable', true);
		node.setAttribute('class', 'user-list-items');
		node.addEventListener('dragstart', ev => {
			fndragStart(ev);
			dragLeave(ev);
		}, false);
		var textnode = document.createTextNode(userName);
		node.appendChild(textnode);
		document.getElementById('user-list-section').prepend(node);
	});

	event.target.appendChild(b);
	//remove border
	event.target.style.border = "";
	
}

// function cancelBtnClick() {
// 	this.parentNode.innerHTML="";

// 	//adding name to list
// 	var node = document.createElement("DIV");
// 	node.id = 'dragtarget_';
// 	node.setAttribute('draggable', true);
// 	node.setAttribute('class', 'user-list-items');
// 	node.addEventListener('dragstart', ev => {
// 		fndragStart(ev);
// 		dragLeave(ev);
// 	}, false);
// 	var textnode = document.createTextNode("userName");
// 	node.appendChild(textnode);
// 	document.getElementById('user-list-section').prepend(node);
// 	// userListData.unshift({"first_name":"Tikaram", "last_name":"Charde"});
// 	// genUserList()
// }

function genUserList() {
    for (var i = 0; i < userListData.length; i++) {
		var user = userListData[i];
		
		//adding User DIV dynamically to  DOM
		var node = document.createElement("DIV");
		node.id = 'dragtarget_'+i;
		node.setAttribute('draggable', true);
		node.setAttribute('class', 'user-list-items');
		node.addEventListener('dragstart', event => {
			fndragStart(event);
			dragLeave(event);
		}, false);
        var textnode = document.createTextNode(user.first_name + " "+ user.last_name);
		node.appendChild(textnode);
		document.getElementById('user-list-section').appendChild(node);
    }
}

//user list data
var userListData = [{"id":1,"first_name":"Kenny","last_name":"Barlace"},
{"id":2,"first_name":"Marissa","last_name":"Nials"},
{"id":3,"first_name":"Cyril","last_name":"Smy"},
{"id":4,"first_name":"Darius","last_name":"Keeble"},
{"id":5,"first_name":"Harri","last_name":"Cordel"},
{"id":6,"first_name":"Ondrea","last_name":"Brameld"},
{"id":7,"first_name":"Chiquita","last_name":"Growcock"},
{"id":8,"first_name":"Craggy","last_name":"Hardwin"},
{"id":9,"first_name":"Ashley","last_name":"Strickler"},
{"id":10,"first_name":"Wilek","last_name":"Meldrum"},
{"id":11,"first_name":"Penrod","last_name":"Crowd"},
{"id":12,"first_name":"Claudette","last_name":"Dimanche"},
{"id":13,"first_name":"Vincenz","last_name":"Leftley"},
{"id":14,"first_name":"Pooh","last_name":"Myton"},
{"id":15,"first_name":"Gwynne","last_name":"Fernandes"},
{"id":16,"first_name":"Rabi","last_name":"Parlott"},
{"id":17,"first_name":"Riley","last_name":"Cudd"},
{"id":18,"first_name":"Allyn","last_name":"Mammatt"},
{"id":19,"first_name":"Regan","last_name":"Beurich"},
{"id":20,"first_name":"Hedvige","last_name":"Bysaker"},
{"id":21,"first_name":"Jeffrey","last_name":"Tomkys"},
{"id":22,"first_name":"Janeen","last_name":"Gieraths"},
{"id":23,"first_name":"Ulrike","last_name":"Treuge"},
{"id":24,"first_name":"Jodie","last_name":"Scamaden"},
{"id":25,"first_name":"Debbie","last_name":"Ahmed"},
{"id":26,"first_name":"Florida","last_name":"Spinelli"},
{"id":27,"first_name":"Turner","last_name":"Boulding"},
{"id":28,"first_name":"Stanleigh","last_name":"Swindles"},
{"id":29,"first_name":"Kane","last_name":"Burch"},
{"id":30,"first_name":"Anetta","last_name":"Havock"},
{"id":31,"first_name":"Anetta","last_name":"Wane"},
{"id":32,"first_name":"Blake","last_name":"Gerson"},
{"id":33,"first_name":"Alida","last_name":"Harg"},
{"id":34,"first_name":"Lem","last_name":"Rolinson"},
{"id":35,"first_name":"Ruthann","last_name":"Crane"},
{"id":36,"first_name":"Arman","last_name":"Alelsandrowicz"},
{"id":37,"first_name":"Shem","last_name":"Vedeneev"},
{"id":38,"first_name":"Massimo","last_name":"Hurd"},
{"id":39,"first_name":"Gerome","last_name":"Swanwick"},
{"id":40,"first_name":"Filia","last_name":"Steele"},
{"id":41,"first_name":"Boycey","last_name":"Stocking"},
{"id":42,"first_name":"Jefferey","last_name":"Najera"},
{"id":43,"first_name":"Hyacinthie","last_name":"Brideaux"},
{"id":44,"first_name":"Marketa","last_name":"Stutt"},
{"id":45,"first_name":"Lizbeth","last_name":"Newark"},
{"id":46,"first_name":"Robenia","last_name":"Lysons"},
{"id":47,"first_name":"Giacinta","last_name":"Fuller"},
{"id":48,"first_name":"Morganne","last_name":"Blunderfield"},
{"id":49,"first_name":"Vasili","last_name":"Esmond"},
{"id":50,"first_name":"Henriette","last_name":"Prout"},
{"id":51,"first_name":"Charity","last_name":"Stubbings"},
{"id":52,"first_name":"Julianne","last_name":"Dron"},
{"id":53,"first_name":"Allix","last_name":"Pashan"},
{"id":54,"first_name":"Akim","last_name":"Cubbon"},
{"id":55,"first_name":"Bealle","last_name":"Durrell"},
{"id":56,"first_name":"Marion","last_name":"Cutill"},
{"id":57,"first_name":"Mareah","last_name":"Surgeoner"},
{"id":58,"first_name":"Luce","last_name":"Kording"},
{"id":59,"first_name":"Gunar","last_name":"Shoebottom"},
{"id":60,"first_name":"Freeman","last_name":"Kinghorne"},
{"id":61,"first_name":"Elmer","last_name":"Bedle"},
{"id":62,"first_name":"Chic","last_name":"Allott"},
{"id":63,"first_name":"Burton","last_name":"Trighton"},
{"id":64,"first_name":"Maren","last_name":"Rutland"},
{"id":65,"first_name":"Alley","last_name":"Redmond"},
{"id":66,"first_name":"Goldi","last_name":"Winram"},
{"id":67,"first_name":"Mellisa","last_name":"Cotgrove"},
{"id":68,"first_name":"Abagael","last_name":"Ward"},
{"id":69,"first_name":"Brynne","last_name":"Ramirez"},
{"id":70,"first_name":"Wilone","last_name":"Topaz"},
{"id":71,"first_name":"Nikolos","last_name":"McReynolds"},
{"id":72,"first_name":"Andree","last_name":"Barrow"},
{"id":73,"first_name":"Berni","last_name":"Kilgrew"},
{"id":74,"first_name":"Alfie","last_name":"Afield"},
{"id":75,"first_name":"Halsy","last_name":"Alderwick"},
{"id":76,"first_name":"Amil","last_name":"Soigoux"},
{"id":77,"first_name":"Anabelle","last_name":"Corteney"},
{"id":78,"first_name":"Mozes","last_name":"Trembley"},
{"id":79,"first_name":"Prince","last_name":"Gaudin"},
{"id":80,"first_name":"Constantia","last_name":"Abrahamowitcz"},
{"id":81,"first_name":"Cassandra","last_name":"Wason"},
{"id":82,"first_name":"Caren","last_name":"Cameron"},
{"id":83,"first_name":"Renado","last_name":"Andreacci"},
{"id":84,"first_name":"Howie","last_name":"Betje"},
{"id":85,"first_name":"Padgett","last_name":"Woolens"},
{"id":86,"first_name":"Catha","last_name":"Agutter"},
{"id":87,"first_name":"Diahann","last_name":"Tomblett"},
{"id":88,"first_name":"Kean","last_name":"Maffucci"},
{"id":89,"first_name":"Georgetta","last_name":"Ferrotti"},
{"id":90,"first_name":"Ax","last_name":"Millthorpe"},
{"id":91,"first_name":"Brandea","last_name":"McKeowon"},
{"id":92,"first_name":"Conrad","last_name":"Gregoire"},
{"id":93,"first_name":"Eldridge","last_name":"Filippello"},
{"id":94,"first_name":"Etta","last_name":"Jantet"},
{"id":95,"first_name":"Mace","last_name":"Postan"},
{"id":96,"first_name":"Justine","last_name":"Gratton"},
{"id":97,"first_name":"Ailene","last_name":"Andrich"},
{"id":98,"first_name":"Erv","last_name":"Gerhardt"},
{"id":99,"first_name":"Georgie","last_name":"Davies"},
{"id":100,"first_name":"Tish","last_name":"Traylen"}]