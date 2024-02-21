
import { OPENAI } from '../config/settings';
import { Request, Response } from 'express';
import { getTimeGrain } from '../helpers/get-time-grain';
import { JsonResponse } from '../interfaces/json-response';
import { getContentData } from '../helpers/get-content-data';
import { SUCCESS, INTERNAL_SERVER_ERROR } from '../config/json-response';

class ChatController {

  public async openaiAnswer(req: Request, res: Response): Promise<Response> {
    const question = req.body.question;
    let response: JsonResponse = JSON.parse(JSON.stringify(SUCCESS));
    try {
      const message = await getTimeGrain(question);
      if (message?.function_call) {
        const functionName = message.function_call.name;
        const parameters = JSON.parse(message.function_call.arguments);
        const functionResponse = await getContentData(parameters.time_grain);
        let secondResponse = await OPENAI.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `
                Respond in English in this format: Hi! I have found some results. {time grain}, I estimate around {quantity}. {new question}
              `,
            },
            message,
            { role: 'function', name: functionName, content: JSON.stringify(functionResponse) },
          ],
        });
        if (secondResponse?.choices[0]) {
          response.data = secondResponse.choices[0].message;
        } else {
          response = JSON.parse(JSON.stringify(INTERNAL_SERVER_ERROR));
          response.description = 'Message was not generated.';
        }
      } else {
        response = JSON.parse(JSON.stringify(INTERNAL_SERVER_ERROR));
        response.description = 'Error getting time grain.';
      }
      return (res.status(response.status).json(response));
    } catch (error) {
      response = JSON.parse(JSON.stringify(INTERNAL_SERVER_ERROR));
      console.error(`ChatController | ${error}`);
      response.description = `ChatController | ${error}`;
      return (res.status(response.status).json(response)); 
    }
  }

}

const chatController = new ChatController();

export default chatController;
