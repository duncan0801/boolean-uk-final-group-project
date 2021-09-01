const faker = require("faker");
// import { PrismaClient } from "@prisma/client";
const { PrismaClient } = require("@prisma/client");
const seedingClient = new PrismaClient();

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
	const counsellor_ID = randomNumberGenerator(1, 20);

	return {
		firstName,
		lastName,
		avatar,
		userName,
		password,
		counsellor_ID,
	};
}
function generateCounsellor() {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const avatar = faker.image.avatar();
	const about = faker.lorem.paragraph();
	const licensing = faker.lorem.words();
	// let specialties = [];
	// for (const number of new Array(5)) {
	// 	const randomNumber = randomNumberGenerator(0, 18);
	// 	specialties.push(specialtiesList[randomNumber]);
	// }
	const hourlyRate = hourlyRates[randomNumberGenerator(0, 4)];

	return {
		firstName,
		lastName,
		avatar,
		about,
		licensing,
		// specialties,
		hourlyRate,
	};
}
function generateUserMessagesAndAppointments(user_ID) {
	const counsellor_ID = randomNumberGenerator(1, numberOfCounsellors);
	let messages = [];

	for (const number of new Array(5)) {
		messages.push({
			user_ID,
			counsellor_ID,
			date: faker.date.recent(),
			content: faker.lorem.sentence(),
		});
	}

	const reviews = {
		date: faker.date.recent(),
		content: faker.lorem.paragraph(),
		user_ID,
		counsellor_ID,
	};

	const appointments = {
		user_ID,
		counsellor_ID,
		date: faker.date.soon(),
		time: faker.time.recent(),
	};

	return { messages, appointments, reviews };
}
function generateCouncillorAppointments() {
	let appointments = [];
	for (let i = 1; i <= numberOfCounsellors; i++) {
		appointments.push({
			councillorId: i,
			dateTime: faker.date.soon(),
			user_ID: null,
			booked: false,
		});
	}
	return appointments;
}
function generateFAQs() {
	let FAQs = [];
	for (let i = 0; i < 10; i++) {
		FAQs.push({
			question: faker.lorem.sentence() + "?",
			answer: faker.lorem.paragraph(),
		});
	}
	return FAQs;
}
async function main() {
	// for (const specialty of specialtiesList) {
	//     await seedingClient.service.create({
	//         data: { name: specialty },
	//     });
	// }

	// for (let i = 1; i <= numberOfUsers; i++) {
	// 	const user = generateUser();
	// 	const { messages, appointments, reviews } =
	// 		generateUserMessagesAndAppointments(i);

	// 	await seedingClient.user.create({
	// 		data: {
	// 			...user,
	// 			// messages: { create: { ...messages } },
	// 			// appointments: { create: { ...appointments } },
	// 			// reviews: { create: { ...reviews } },
	// 		},
	// 	});
	// }
	for (let i = 1; i <= numberOfCounsellors; i++) {
		const counsellor = generateCounsellor();
		await seedingClient.counsellor.create({
			data: {
				...counsellor,
			},
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await seedingClient.$disconnect();
	});
