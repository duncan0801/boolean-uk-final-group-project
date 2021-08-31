const faker = require("faker");

const specialtiesList = [
	"Anxiety",
	"Depression",
	"Addiction",
	"ADHD",
	"Anger management",
	"Bereavement",
	"Bullying",
	"Cancer",
	"Child related issues",
	"Depression",
	"Discrimination",
	"Drug addiction",
	"Panic attacks",
	"Postnatal depression",
	"Relationship problems",
	"Separation and divorce",
	"Stress",
	"Trauma",
];
const hourlyRates = [40, 50, 60, 70, 80];
const numberOfUsers = 100;
const numberOfCounsellors = 20;

function randomNumberGenerator(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateUser() {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const avatar = faker.image.avatar();
	const userName = firstName + faker.random.number() + faker.random.number();
	const password = faker.internet.password();
}
function generateCounsellor() {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const avatar = faker.image.avatar();
	const about = faker.lorem.paragraph();
	const licensing = faker.lorem.words();
	let specialties = [];
	for (const number of new Array(5)) {
		const randomNumber = randomNumberGenerator(0, 18);
		specialties.push(specialtiesList[randomNumber]);
	}
	const hourlyRate = hourlyRates[randomNumberGenerator(0, 4)];

	return {
		firstName,
		lastName,
		avatar,
		about,
		licensing,
		specialties,
		hourlyRate,
	};
}
function generateUserMessages(userId) {
	const counsellorId = randomNumberGenerator(1, numberOfCounsellors);
	let messages = [];
	for (const number of new Array(5)) {
		messages.push({
			userId: userId,
			counsellorId,
			date: faker.date.recent(),
			content: faker.lorem.sentence(),
		});
	}

	return messages;
}
