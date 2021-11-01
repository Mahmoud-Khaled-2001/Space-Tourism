//destinations data
const moon = {
	name: 'MOON',
	p: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
	url: './images/destination/image-moon.png',
	span1: '384,400 km',
	span2: '3 days'
};
const mars = {
	name: 'MARS',
	p: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
	url: './images/destination/image-mars.png',
	span1: '225 MIL. km',
	span2: '9 months'
};
const europa = {
	name: 'EUROPA',
	p: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
	url: './images/destination/image-europa.png',
	span1: '628 MIL. km',
	span2: '3 years'
};
const titan = {
	name: 'TITAN',
	p: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
	url: './images/destination/image-titan.png',
	span1: '1.6 BIL. km',
	span2: '7 years'
};
let destArr = [ moon, mars, europa, titan ];

//crew data
const douglas = {
	name: 'Douglas Hurley',
	p: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
	url: './images/crew/image-douglas-hurley.png',
	rule: 'Commander'
};
const mark = {
	name: 'MARK SHUTTLEWORTH',
	p: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
	url: './images/crew/image-mark-shuttleworth.png',
	rule: 'Mission Specialist'
};
const victor = {
	name: 'Victor Glover',
	p: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
	url: './images/crew/image-victor-glover.png',
	rule: 'PILOT'
};
const anousheh = {
	name: 'Anousheh Ansari',
	p: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
	url: './images/crew/image-anousheh-ansari.png',
	rule: 'Flight Engineer'
};

let crewData = [ douglas, mark, victor, anousheh ];

//data tecno
const launchVehicle = {
	name: 'LAUNCH VEHICLE',
	p: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
	urlOne: './images/technology/image-launch-vehicle-portrait.jpg',
	urlTwo: './images/technology/image-launch-vehicle-landscape.jpg'
};
const spaceport = {
	name: 'SPACEPORT',
	p: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
	urlOne: './images/technology/image-spaceport-portrait.jpg',
	urlTwo: './images/technology/image-spaceport-landscape.jpg'
};
const spaceCapsule = {
	name: 'SPACE CAPSULE',
	p: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
	urlOne: './images/technology/image-space-capsule-portrait.jpg',
	urlTwo: './images/technology/image-space-capsule-landscape.jpg'
};

let tecnoDate = [ launchVehicle, spaceport, spaceCapsule ];

const bg = document.getElementById('bg');
const header = document.getElementsByTagName('header')[0];
const links = document.getElementById('links');
const link = document.querySelectorAll('#links li');
const openLinks = document.getElementById('open');
const closeLinks = document.getElementById('close');
let homeBage = window.sessionStorage.getItem('homebage');
// console.log(window.sessionStorage.getItem("homebage"))

openLinks.onclick = () => links.classList.toggle('open');
closeLinks.onclick = () => links.classList.toggle('open');

link.forEach((child) => {
	child.addEventListener('click', () => {
		link.forEach((child) => child.classList.remove('active'));
		child.classList.add('active');
		links.classList.remove('open');
	});
});
function bghome() {
	if (bg.classList.contains('bgdestination')) {
		bg.classList.replace('bgdestination', 'bghome');
	} else if (bg.classList.contains('bgcrew')) {
		bg.classList.replace('bgcrew', 'bghome');
	} else if (bg.classList.contains('bgtecno')) {
		bg.classList.replace('bgtecno', 'bghome');
	}
}
function bgdes() {
	if (bg.classList.contains('bghome')) {
		bg.classList.replace('bghome', 'bgdestination');
	} else if (bg.classList.contains('bgcrew')) {
		bg.classList.replace('bgcrew', 'bgdestination');
	} else if (bg.classList.contains('bgtecno')) {
		bg.classList.replace('bgtecno', 'bgdestination');
	}
}
function bgcrew() {
	if (bg.classList.contains('bgdestination')) {
		bg.classList.replace('bgdestination', 'bgcrew');
	} else if (bg.classList.contains('bghome')) {
		bg.classList.replace('bghome', 'bgcrew');
	} else if (bg.classList.contains('bgtecno')) {
		bg.classList.replace('bgtecno', 'bgcrew');
	}
}
function bgteck() {
	if (bg.classList.contains('bgdestination')) {
		bg.classList.replace('bgdestination', 'bgtecno');
	} else if (bg.classList.contains('bgcrew')) {
		bg.classList.replace('bgcrew', 'bgtecno');
	} else if (bg.classList.contains('bghome')) {
		bg.classList.replace('bghome', 'bgtecno');
	}
}
link[0].onclick = () => {
	for (let i = 0; i < bg.children.length; i++) {
		if (bg.children[i].nodeName === 'SECTION') {
			if (bg.children[i].classList.contains('home')) return;
			bg.children[i].remove();
		}
	}
	bghome();
	home();
};
link[1].onclick = () => {
	for (let i = 0; i < bg.children.length; i++) {
		if (bg.children[i].nodeName === 'SECTION') {
			if (bg.children[i].classList.contains('destination')) return;
			bg.children[i].remove();
		}
	}
	bgdes();
	destination();
};
link[2].onclick = () => {
	for (let i = 0; i < bg.children.length; i++) {
		if (bg.children[i].nodeName === 'SECTION') {
			if (bg.children[i].classList.contains('crew')) return;
			bg.children[i].remove();
		}
	}
	bgcrew();
	crew();
};
link[3].onclick = () => {
	for (let i = 0; i < bg.children.length; i++) {
		if (bg.children[i].nodeName === 'SECTION') {
			if (bg.children[i].classList.contains('tecno')) return;
			bg.children[i].remove();
		}
	}
	bgteck();
	technology();
};

if (window.sessionStorage.getItem('homeBage') === 'home') {
	home();
	bghome();
} else if (window.sessionStorage.getItem('homeBage') === 'des') {
	destination();
	link[0].classList.remove('active');
	link[1].classList.add('active');
	bgdes();
} else if (window.sessionStorage.getItem('homeBage') === 'crew') {
	crew();
	link[0].classList.remove('active');
	link[2].classList.add('active');
	bgcrew();
} else if (window.sessionStorage.getItem('homeBage') === 'tech') {
	technology();
	link[0].classList.remove('active');
	link[3].classList.add('active');
	bgteck();
} else home();

function home() {
	homeBage = 'home';
	window.sessionStorage.setItem('homeBage', homeBage);
	const home = document.createElement('section');
	home.classList.add('home');
	const container = document.createElement('div');
	container.classList.add('container-home');
	const info = document.createElement('div');
	info.classList.add('info');
	const heading = document.createElement('h5');
	heading.textContent = 'so, you want to travel to';
	const hOne = document.createElement('h1');
	hOne.textContent = 'space';
	const textp = document.createElement('p');
	// text.textContent = `Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!`;
	const explore = document.createElement('div');
	explore.classList.add('explore');
	const exploreText = document.createElement('span');
	exploreText.textContent = 'explore';
	explore.addEventListener('click', () => {
		document.getElementsByClassName('home')[0].remove();
		destination();
		link[0].classList.remove('active');
		link[1].classList.add('active');
		bgdes();
	});
		let x = 0;
		let text = `Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!`;
		let typer = setInterval(() => {
			textp.textContent += text[x]
			x++
			if (x > text.length - 1) clearInterval(typer)

		}, 30);
	info.appendChild(heading);
	info.appendChild(hOne);
	info.appendChild(textp);
	explore.appendChild(exploreText);
	container.appendChild(info);
	container.appendChild(explore);
	home.appendChild(container);
	bg.appendChild(home);
}
function destination() {
	homeBage = 'des';
	window.sessionStorage.setItem('homeBage', homeBage);
	let count = 0;
	if (window.sessionStorage.getItem('desCount') !== null) {
		count = window.sessionStorage.getItem('desCount');
	}
	const destination = document.createElement('section');
	destination.classList.add('destination');
	bg.appendChild(destination);
	//-----------------------------------------------------
	const mainHeading = document.createElement('h5');
	mainHeading.classList.add('main-head');
	destination.appendChild(mainHeading);
	//---------------
	const mainHeadingNumper = document.createElement('span');
	mainHeadingNumper.textContent = '01';
	mainHeading.appendChild(mainHeadingNumper);
	//---------------
	const mainHeadingText = document.createTextNode('Pick your destination');
	mainHeading.appendChild(mainHeadingText);
	//-----------------------------------------------------
	const content = document.createElement('div');
	content.classList.add('content');
	destination.appendChild(content);
	//-----------------------------------------------------
	const img = document.createElement('img');
	img.setAttribute('src', destArr[count].url);
	img.setAttribute('alt', destArr[count].name);
	content.appendChild(img);
	//-----------------------------------------------------
	const info = document.createElement('div');
	info.classList.add('info');
	content.appendChild(info);
	//-----------------------------------------------------
	const ul = document.createElement('ul');
	info.appendChild(ul);
	//------------------
	for (let i = 0; i < destArr.length; i++) {
		const li = document.createElement('li');
		if (window.sessionStorage.getItem('desCount') !== null && window.sessionStorage.getItem('desCount') == i) {
			li.classList.add('active');
		} else if (i === 0 && window.sessionStorage.getItem('desCount') === null) {
			li.classList.add('active');
		}
		li.textContent = destArr[i].name;
		li.setAttribute('data-content', i);
		li.addEventListener('click', () => {
			for (let i = 0; i < destArr.length; i++) {
				ul.children[i].classList.remove('active');
			}
			li.classList.add('active');
			count = Number(li.dataset.content);
			window.sessionStorage.setItem('desCount', count);
			img.style.transform = 'translateX(-100px)';
			img.style.opacity = '0';
			setTimeout(() => {
				img.setAttribute('src', destArr[count].url);
				img.setAttribute('alt', destArr[count].name);
				img.style.transform = null;
				img.style.opacity = null;
			}, 500);
			textP.textContent = destArr[count].p;
			hTwo.textContent = destArr[count].name;
			spanTwo.textContent = destArr[count].span1;
			spanFour.textContent = destArr[count].span2;
		});
		ul.appendChild(li);
	}
	//------------------------------------------------------
	const hTwo = document.createElement('h2');
	hTwo.textContent = destArr[count].name;
	info.appendChild(hTwo);
	//------------------------------------------------------
	const textP = document.createElement('p');
	textP.textContent = destArr[count].p;
	info.appendChild(textP);
	//------------------------------------------------------
	const disTim = document.createElement('div');
	disTim.classList.add('dis-tim');
	info.appendChild(disTim);
	//-------------------
	const boxOne = document.createElement('div');
	boxOne.classList.add('box');
	disTim.appendChild(boxOne);
	//-------------
	const spanOne = document.createElement('span');
	spanOne.textContent = 'AVG. DISTANCE';
	boxOne.appendChild(spanOne);
	const spanTwo = document.createElement('span');
	spanTwo.textContent = destArr[count].span1;
	boxOne.appendChild(spanTwo);

	const boxtwo = document.createElement('div');
	boxtwo.classList.add('box');
	disTim.appendChild(boxtwo);
	//-------------
	const spanThree = document.createElement('span');
	spanThree.textContent = 'Est. travel time';
	boxtwo.appendChild(spanThree);
	const spanFour = document.createElement('span');
	spanFour.textContent = destArr[count].span2;
	boxtwo.appendChild(spanFour);
	destination.style.opacity = '0.2';
	setTimeout(() => (destination.style.opacity = '1'), 200);
}

function crew() {
	homeBage = 'crew';
	window.sessionStorage.setItem('homeBage', homeBage);
	let count = 0;
	if (window.sessionStorage.getItem('crewCount') !== null) {
		count = window.sessionStorage.getItem('crewCount');
	}
	// console.log(window.sessionStorage.getItem("crewCount"))
	const crew = document.createElement('section');
	crew.classList.add('crew');
	bg.appendChild(crew);
	// console.log(count)
	//----------------------------------------------
	const mainHeading = document.createElement('h5');
	mainHeading.classList.add('main-head');
	crew.appendChild(mainHeading);
	//---------------
	const mainHeadingNumper = document.createElement('span');
	mainHeadingNumper.textContent = '02';
	mainHeading.appendChild(mainHeadingNumper);
	//---------------
	const mainHeadingText = document.createTextNode('Meet your crew');
	mainHeading.appendChild(mainHeadingText);
	//-----------------------------------------------
	const content = document.createElement('div');
	content.classList.add('content');
	crew.appendChild(content);
	//------------------------------------------------
	const info = document.createElement('div');
	info.classList.add('info');
	content.appendChild(info);
	//-----------------------------------------------
	const h3 = document.createElement('h3');
	h3.textContent = crewData[count].rule;
	info.appendChild(h3);
	//---------------------------------------------
	const h2 = document.createElement('h2');
	h2.textContent = crewData[count].name;
	info.appendChild(h2);
	//---------------------------------------------
	const text = document.createElement('p');
	text.textContent = crewData[count].p;
	info.appendChild(text);
	//-------------------------------------------
	const ul = document.createElement('ul');
	info.appendChild(ul);
	//------------------
	for (let i = 0; i < 4; i++) {
		const li = document.createElement('li');
		if (window.sessionStorage.getItem('crewCount') !== null && window.sessionStorage.getItem('crewCount') == i) {
			li.classList.add('active');
		} else if (i === 0 && window.sessionStorage.getItem('crewCount') === null) {
			li.classList.add('active');
		}
		li.setAttribute('data-content', i);
		li.addEventListener('click', () => {
			for (let i = 0; i < crewData.length; i++) {
				ul.children[i].classList.remove('active');
			}
			li.classList.add('active');
			count = Number(li.dataset.content);
			window.sessionStorage.setItem('crewCount', count);
			img.style.opacity = '0';
			setTimeout(() => {
				img.setAttribute('src', crewData[count].url);
				img.setAttribute('alt', crewData[count].name);
				img.style.opacity = null;
			}, 300);
			text.textContent = crewData[count].p;
			h2.textContent = crewData[count].name;
			h3.textContent = crewData[count].rule;
		});
		ul.appendChild(li);
	}
	//----------------------------------------------------
	const img = document.createElement('img');
	img.setAttribute('src', crewData[count].url);
	img.setAttribute('alt', crewData[count].name);
	content.appendChild(img);
}
function technology() {
	homeBage = 'tech';
	window.sessionStorage.setItem('homeBage', homeBage);

	let count = 0;
	if (window.sessionStorage.getItem('tecnoCount') !== null) {
		count = window.sessionStorage.getItem('tecnoCount');
	}
	const technology = document.createElement('section');
	technology.classList.add('tecno');
	bg.appendChild(technology);
	//----------------------------------------------
	const mainHeading = document.createElement('h5');
	mainHeading.classList.add('main-head');
	technology.appendChild(mainHeading);
	//---------------
	const mainHeadingNumper = document.createElement('span');
	mainHeadingNumper.textContent = '03';
	mainHeading.appendChild(mainHeadingNumper);
	//---------------
	const mainHeadingText = document.createTextNode('SPACE LAUNCH 101');
	mainHeading.appendChild(mainHeadingText);
	//------------------------------------------------
	const content = document.createElement('div');
	content.classList.add('content');
	technology.appendChild(content);
	//------------------------------------------------
	const ul = document.createElement('ul');
	content.appendChild(ul);
	//------------------
	for (let i = 0; i < tecnoDate.length; i++) {
		const li = document.createElement('li');
		if (window.sessionStorage.getItem('tecnoCount') !== null && window.sessionStorage.getItem('tecnoCount') == i) {
			li.classList.add('active');
		} else if (i === 0 && window.sessionStorage.getItem('tecnoCount') === null) {
			li.classList.add('active');
		}
		li.setAttribute('data-content', i);
		li.addEventListener('click', () => {
			for (let i = 0; i < tecnoDate.length; i++) {
				ul.children[i].classList.remove('active');
			}
			li.classList.add('active');
			count = Number(li.dataset.content);
			window.sessionStorage.setItem('tecnoCount', count);
			h2.textContent = tecnoDate[count].name;
			text.textContent = tecnoDate[count].p;
			imgTwo.setAttribute('src', tecnoDate[count].urlTwo);
			imgTwo.setAttribute('alt', tecnoDate[count].name);
			imgOne.setAttribute('src', tecnoDate[count].urlOne);
			imgOne.setAttribute('alt', tecnoDate[count].name);
		});
		li.textContent = i + 1;
		ul.appendChild(li);
	}
	//------------------------------------------------
	const info = document.createElement('div');
	info.classList.add('info');
	content.appendChild(info);
	//------------------------------------------------
	const h3 = document.createElement('h3');
	h3.textContent = 'THE TERMINOLOGY…';
	info.appendChild(h3);
	//---------------------------------------------
	const h2 = document.createElement('h2');
	h2.textContent = tecnoDate[count].name;
	info.appendChild(h2);
	//---------------------------------------------
	const text = document.createElement('p');
	text.textContent = tecnoDate[count].p;
	info.appendChild(text);
	//-------------------------------------------
	const img = document.createElement('div');
	img.classList.add('img');
	content.appendChild(img);
	//----------------------------------------------
	const imgOne = document.createElement('img');
	imgOne.setAttribute('src', tecnoDate[count].urlOne);
	imgOne.setAttribute('alt', tecnoDate[count].name);
	img.appendChild(imgOne);

	const imgTwo = document.createElement('img');
	imgTwo.setAttribute('src', tecnoDate[count].urlTwo);
	imgTwo.setAttribute('alt', tecnoDate[count].name);
	img.appendChild(imgTwo);
}

// window.sessionStorage.setItem("homeBage",homeBage);
// home();
