import { MongoClient, Db } from 'mongodb';
import { METHODS } from '../config/settings'
import { QueryParam } from '../interfaces/query-param';

class Mongodb {
  
  private client?: MongoClient;
  private isConnected: boolean = false;

  public async connect(databaseUrl: string): Promise<Db | undefined> {
    try {
      if (!this.isConnected) {
        this.client = await MongoClient.connect(databaseUrl);
        this.isConnected = true;
        console.log('Connected to MongoDB.');
      }
      return (this.client?.db());
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error}`);
      return (undefined);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      if (this.isConnected && this.client) {
        await this.client.close();
        this.isConnected = false;
        console.log('Disconnected from MongoDB.');
      } else {
        console.log('Not connected to MongoDB.');
      }
    } catch (error) {
      console.error(`Error disconnecting from MongoDB: ${error}`);
    }
  }

  public async query(queryParam: QueryParam): Promise<any> {
    try {
      if (this.isConnected && this.client) {
        const dataBase = this.client.db(queryParam.data_base_name);
        let queryResponse: any;
        switch (queryParam.method_name) {
          case METHODS.FIND:
            queryResponse = await dataBase.collection(queryParam.collection_name).find(queryParam.query).toArray();
            break;
          case METHODS.COUNT:
            queryResponse = await dataBase.collection(queryParam.collection_name).countDocuments(queryParam.query);
            break;
        }
        return (queryResponse);
      } else {
        console.log('Not connected to MongoDB.');
      }
    } catch (error) {
      console.error(`Error disconnecting from MongoDB: ${error}`);
    }
  }
}

const mongodb = new Mongodb;

export default mongodb;
