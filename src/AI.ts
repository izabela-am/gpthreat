import {
  GoogleGenerativeAI,
  GenerativeModel
} from '@google/generative-ai';

// const { GEMINI_API_KEY } = process.env;
const genAI = new GoogleGenerativeAI('<api-key>');

export class AI {
  private gemini: GenerativeModel;

  constructor() {
    this.gemini = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash'
    });
  }

  async prompt(prompt: string) {
    const { response } = await this.gemini.generateContent(prompt);

    console.log(response.text())
  }
}
