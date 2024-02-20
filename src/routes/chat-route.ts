import { Router } from 'express';
import chatController from '../controllers/chat-controller';

class ChatRoute {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  public config(): void {
    this.router.post('/openai-answer', chatController.openaiAnswer);
  }
}

const chatRoute = new ChatRoute();

export default chatRoute.router;
