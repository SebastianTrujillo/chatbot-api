import mongodb from '../databases/mongodb';
import { DB_PARAMS, METHODS } from '../config/settings'

type TimeGrain = 'daily' | 'weekly' | 'monthly' | 'annual';

export const getContentData = async (timeGrain: TimeGrain) => {
  await mongodb.connect(DB_PARAMS.DB_URL);
  const queryResponse = await mongodb.query({
    data_base_name: DB_PARAMS.DATABASE,
    collection_name: timeGrain,
    method_name: METHODS.COUNT,
    query: {},
  });
  await mongodb.disconnect();
  const contentData: {[key: string]: number} = {};
  return (contentData[timeGrain] = queryResponse);
};
