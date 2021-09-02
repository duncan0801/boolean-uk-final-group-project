const faker = require("faker");
//import { PrismaClient } from "@prisma/client";
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
function generateUserMessagesAndAppointments(user_ID, counsellor_ID) {
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
function generateUser(user_ID) {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const avatar = faker.image.avatar();
	const userName =
		firstName + faker.datatype.number() + faker.datatype.number();
	const password = faker.internet.password();
	const counsellor_ID = randomNumberGenerator(1, 20);

	const { messages, appointments, reviews } =
		generateUserMessagesAndAppointments(user_ID, counsellor_ID);

	return {
		firstName,
		lastName,
		avatar,
		userName,
		password,
		counsellor_ID,
		// messages,
		// appointments,
		// reviews,
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
function generateReview() {
	// date
	// content
	// user_ID
	// counsellor_ID

	const date = faker.date.recent();
	const content = faker.lorem.paragraph();

	return {
		date,
		content,
	};
}

async function main() {

	// // GENERATE£ FAQs
	// let FAQs = generateFAQs();
	// for (const FAQ of FAQs) {
	// 	await seedingClient.faq.create({
	// 		data: {
	// 			question: FAQ.question,
	// 			answer: FAQ.answer,
	// 		},
	// 	});
	// }

	// //GENERATE SPECIALTIES/ SERVICES
	// for (const specialty of specialtiesList) {
	// 	await seedingClient.service.create({
	// 		data: { name: specialty },
	// 	});
	// }
	// // GENERATE COUNSELLORS
	// let createdCounsellors = [];
	// for (let i = 1; i <= numberOfCounsellors; i++) {
	// 	const counsellor = generateCounsellor();
	// 	createdCounsellors.push(
	// 		await seedingClient.counsellor.create({
	// 			data: {
	// 				...counsellor,
	// 			},
	// 		})
	// 	);
	// }

	// //GENERATE USERS
	// let createdUsers = [];
	// for (let i = 1; i <= numberOfUsers; i++) {
	// 	const user = generateUser(i);
	// 	const userCreated = await seedingClient.user.create({
	// 		data: {
	// 			...user,
	// 			// 	messages: {
	// 			// 		create: {
	// 			// 			date: faker.date.recent(),
	// 			// 			content: faker.lorem.sentence(),
	// 			// 			user: {connect:{id: i}},
	// 			// 			counsellor_ID: user.counsellor_ID,
	// 			// 		},
	// 			// 	},
	// 			// 	appointments: {
	// 			// 		create: {
	// 			// 			date: faker.date.recent(),
	// 			// 			time: faker.time.recent(),
	// 			// 			user: i,
	// 			// 			counsellor_ID: user.counsellor_ID,
	// 			// 		},
	// 			// 	},
	// 			// 	reviews: {
	// 			// 		create: {
	// 			// 			date: faker.date.recent(),
	// 			// 			content: faker.lorem.paragraph(),
	// 			// 			user: i,
	// 			// 			counsellor_ID: user.counsellor_ID,
	// 			// 		},
	// 			// 	},
	// 		},
	// 	});
	// 	createdUsers.push(userCreated);
	// }

	// COUNSELLOR ON SERVICES
	// for (const counsellor of createdCounsellors) {
	// 	for (let j = 1; j <= 5; j++) {
	// 		await seedingClient.counsellorOnService.create({
	// 			data: {
	// 				counsellor: { connect: { id: counsellor.id } },
	// 				service: { connect: { id: randomNumberGenerator(0, 19) } },
	// 			},
	// 		});
	// 	}
	// }

	//create a counsellorOnService where each councillor will have five random services
	//doesn't quite work. Have to manually change the i counter and only adds 3 or 4
	// for (let i = 5; i < numberOfCounsellors * 5; i++) {
	// 	for (let j = 1; j <= 5; j++) {
	// 		const randomNumberArray = [
	// 			randomNumberGenerator(0, 3),
	// 			randomNumberGenerator(4, 9),
	// 			randomNumberGenerator(10, 13),
	// 			randomNumberGenerator(14, 17),
	// 			randomNumberGenerator(18, 19),
	// 		];
	// 		await seedingClient.counsellorOnService.create({
	// 			data: {
	// 				service_ID: randomNumberArray[j],
	// 				counsellor_ID: i,
	// 			},
	// 		});
	// 	}
	// }

	// //GENERATING MESSAGES  TODO
	// for(const user of createdUsers) {
	//     await seedingClient.message.create
	// }

	// for (let i = 1; i <= numberOfCounsellors; i++) {
	// 	const reviewBody = generateReview();
	// 	for (let j = 1; j <= 5; j++) {
	// 		const review = await seedingClient.review.create({
	// 			data: {
	// 				...reviewBody,
	// 				counsellor_ID: i,
	// 				user_ID: randomNumberGenerator(1, 100),
	// 			},
	// 		});
	// 		console.log(review);
	// 	}
	// }
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await seedingClient.$disconnect();
	});
