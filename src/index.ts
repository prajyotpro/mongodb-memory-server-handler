import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongod: MongoMemoryServer;

export const connectDb = async () => {
	mongod = await MongoMemoryServer.create();
	const uri = mongod.getUri();

	try {
		await mongoose.connect(uri);
	} catch (error) {
		console.error("error connecting to memory mongodb", error);
	}
};

export const closeDb = async () => {
	if (mongod) {
		await mongoose.connection.dropDatabase();
		await mongoose.connection.close();
		await mongod.stop();
	}
};

export const clearDb = async () => {
	if (mongod) {
		const collections = mongoose.connection.collections;

		for (const key in collections) {
			const collection = collections[key];
			await collection.deleteMany();
		}
	}
};
