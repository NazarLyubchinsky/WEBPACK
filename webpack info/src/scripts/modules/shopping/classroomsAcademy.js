export class Audience {
	constructor(name, quantity, faculty) {
		this.name = name;
		this.quantity = quantity;
		this.faculty = faculty;
	}
}
const audiences = [
	new Audience('107', 25, 'Інформатика'),
	new Audience('109', 15, 'Інформатика'),
	new Audience('101', 14, 'Математика'),
	new Audience('104', 18, 'Математика'),
	new Audience('106', 11, 'Біологія'),
	new Audience('102', 20, 'Біологія'),
	new Audience('104', 24, 'фізкультура'),

];
function printAllAudiences() {
	audiences.forEach(audience => {
		console.log(audience);
	});
}

// printAllAudiences(); 
function printAudiencesByFaculty(faculty) {
	const filteredAudiences = audiences.filter(audience => audience.faculty === faculty);
	filteredAudiences.forEach(audience => {
		console.log(audience);
	});
}

printAudiencesByFaculty('Математика');
// 
export class Group {
	constructor(name, numberOfStudents, faculty) {
		this.name = name;
		this.numberOfStudents = numberOfStudents;
		this.faculty = faculty;
	}
}

function printSuitableAudiencesForGroup(group) {
	const filteredAudiences = audiences.filter(audience => audience.faculty === group.faculty && audience.quantity >= group.numberOfStudents);
	filteredAudiences.forEach(audience => {
		console.log(audience);
	});
}

const group1 = new Group('Group 1', 12, 'фізкультура');
printSuitableAudiencesForGroup(group1);
// 
function sortByCapacity(a, b) {
	return a.quantity - b.quantity;
}

audiences.sort(sortByCapacity);
console.log(audiences);

function sortByName(auditoriums) {
	auditoriums.sort(function (А, Б) {
		if (А.faculty < Б.faculty) {
			return -1;
		}
		if (А.faculty > Б.faculty) {
			return 1;
		}
		return 0;
	});
	return auditoriums;
}
console.log(sortByName(audiences))


