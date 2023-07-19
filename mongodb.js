const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const client = new MongoClient(connectionURL);

const id = new ObjectId();
console.log('ID:', id);
console.log('ID toHexString:', id.toHexString());

async function main() {
  const clientConnection = await client.connect();
  console.log('Connected successfully to server');

  const db = clientConnection.db(databaseName);

  //   try {
  //     const user = await db
  //       .collection('users')
  //       .findOne({ _id: new ObjectId('64a5df911d1f81cf28ce6af4') });
  //     console.log(user);
  //   } catch (error) {
  //     return console.log('Unable to fetch');
  //   }

  //   try {
  //     const user = await db.collection('users').find({ age: 32 }).toArray();
  //     console.log(user);
  //   } catch (error) {
  //     return console.log('Unable to fetch');
  //   }

  //   try {
  //     const user = await db.collection('users').find({ age: 32 }).toArray();
  //     console.log(user);
  //   } catch (error) {
  //     return console.log('Unable to fetch');
  //   }

  //   const insertOneResult = await db
  //     .collection('users')
  //     .insertOne({ name: 'Max', age: 32 });
  //   if (insertOneResult.error) {
  //     console.log('Unable to insert user.');
  //   }
  //   console.log(insertOneResult);

  //   try {
  //     const insertMany = await db.collection('users').insertMany([
  //       { name: 'Jen', age: 28 },
  //       { name: 'Gunther', age: 27 },
  //     ]);

  //     console.log(insertMany);
  //   } catch (error) {
  //     if (error instanceof MongoServerError) {
  //       console.log(`Error worth logging: ${error}`);
  //     }
  //     throw error;
  //   }

  //   try {
  //     const insertMany = await db.collection('tasks').insertMany([
  //       { description: 'Clean the house', completed: true },
  //       { description: 'Renew inspection', completed: false },
  //       { description: 'Pot plants', completed: false },
  //     ]);

  //     console.log(insertMany);
  //   } catch (error) {
  //     if (error instanceof MongoServerError) {
  //       console.log(`Error worth logging: ${error}`);
  //     }
  //     throw error;
  //   }

  //   try {
  //     const user = await db.collection('users').updateOne(
  //       { _id: new ObjectId('64a5da38cc716e4a98a59faa') },
  //       {
  //         $set: {
  //           name: 'Mike',
  //         },
  //       }
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     return console.log('Unable to fetch');
  //   }

  try {
    const user = await db
      .collection('users')
      .deleteMany({ age: 32, name: 'Max' });
    console.log(user);
  } catch (error) {
    return console.log('Unable to fetch');
  }
}

main();
