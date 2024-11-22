const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const GenerateCourseLayout_AI= model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "  Generate a Course Tutorial on following detail with field as Course Name, Description, Along with Chapter Name, about, Duration: Category:'Programming',Topic:Python,Level:Basic,Duration:1 hours, No of Chapters:5 ,in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Introduction to Python Programming\",\n  \"description\": \"This beginner-friendly course provides a comprehensive introduction to Python programming.  Learn the fundamentals of Python syntax, data structures, and control flow. By the end of this course, you will be able to write basic Python programs and solve simple programming problems.\",\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"chapters\": [\n    {\n      \"chapterName\": \"Setting up your Python Environment\",\n      \"about\": \"Learn how to install Python on your computer and set up a suitable development environment. We'll cover installing Python, choosing an IDE or text editor, and running your first Python program.\",\n      \"duration\": \"10 minutes\"\n    },\n    {\n      \"chapterName\": \"Basic Syntax and Data Types\",\n      \"about\": \"This chapter introduces the fundamental building blocks of Python: variables, data types (integers, floats, strings, booleans), operators, and basic input/output.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Flow: Conditional Statements\",\n      \"about\": \"Learn how to control the flow of execution in your programs using `if`, `elif`, and `else` statements. We'll cover comparisons and logical operators.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Control Flow: Loops\",\n      \"about\": \"Master loops in Python, including `for` and `while` loops. Learn how to iterate over sequences and control loop execution using `break` and `continue` statements.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapterName\": \"Introduction to Data Structures: Lists and Tuples\",\n      \"about\": \"This chapter introduces fundamental data structures in Python: lists and tuples. You'll learn how to create, manipulate, and access elements within these structures.\",\n      \"duration\": \"15 minutes\"\n    }\n  ],\n  \"numberOfChapters\": 5\n}\n```\n"},
          ],
        },
      ],
    });
  
    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    //console.log(result.response.text());
  
  
