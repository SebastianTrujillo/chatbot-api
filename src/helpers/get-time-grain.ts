import { OPENAI } from '../config/settings'

export const getTimeGrain = async (question: string) => {
  const timeGrain = await OPENAI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: question }],
    functions: [
      {
        name: 'getContentData',
        description: 'Get content data in a given time grain',
        parameters: {
          type: 'object',
          properties: {
            time_grain: {
              type: 'string',
              description: 'Time grain, eg: daily, weekly, monthly or annual',
            },
          },
          required: ['time_grain'],
        },
      },
    ],
    function_call: 'auto',
  });
  return (timeGrain.choices[0].message);
};
