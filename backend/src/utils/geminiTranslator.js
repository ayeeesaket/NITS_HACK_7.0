import { GoogleGenerativeAI } from "@google/generative-ai";

const translator = async (content, lang) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: { responseMimeType: "application/json" } });
    const prompt = `Convert ${content} to ${lang}. In the json keep the key to be the number of the string`;

    const result = await model.generateContent(prompt);
    const bookText = result.response.text();

    const jsonBook = JSON.parse(bookText);
    return jsonBook;
};

export default translator;