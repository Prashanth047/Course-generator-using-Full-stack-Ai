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
  

   export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic: Cad, Chapter: Introduction to CAD and its Applications, in JSON Format with list of array with field as title,explanation on give chapter in detail,Code example(Code field in <precode>format) if applicable\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"chapterTitle\": \"Introduction to CAD and its Applications\",\n  \"sections\": [\n    {\n      \"title\": \"What is CAD?\",\n      \"explanation\": \"Computer-Aided Design (CAD) is the use of computer systems to assist in the creation, modification, analysis, or optimization of a design.  It encompasses a wide range of software tools and techniques used to create 2D and 3D models of physical components and systems. CAD is used across various industries, from architecture and engineering to manufacturing and product design. It replaces manual drafting methods, offering increased accuracy, efficiency, and collaboration opportunities.\",\n      \"codeExample\": null \n    },\n    {\n      \"title\": \"Key Features of CAD Software\",\n      \"explanation\": \"CAD software typically includes features like: \\n\\n* **Drawing tools:** Lines, circles, arcs, curves, splines, etc., for creating geometric shapes.\\n* **Geometric constraints:** Defining relationships between geometric elements (e.g., parallelism, perpendicularity, tangency) to ensure accurate and consistent design.\\n* **Dimensioning and annotation:** Adding dimensions, text, and other annotations to the design for clarity and manufacturing specifications.\\n* **Modeling tools:** Creating 2D and 3D models with different levels of detail and complexity, often utilizing techniques like wireframe, surface, and solid modeling.\\n* **Rendering and visualization:** Creating realistic images or animations of the design for presentation or analysis.\\n* **Simulation and analysis:** Performing simulations (e.g., finite element analysis, computational fluid dynamics) to evaluate the performance and behavior of the design.\\n* **Data management:** Organizing and managing design data, including version control and collaboration tools.\",\n      \"codeExample\": null\n    },\n    {\n      \"title\": \"Types of CAD Software\",\n      \"explanation\": \"There's a wide variety of CAD software available, categorized by functionality and target users: \\n\\n* **2D CAD:** Primarily for creating 2D drawings and diagrams. Examples include AutoCAD LT and DraftSight.\\n* **3D CAD:** For creating 3D models, offering more advanced features like solid modeling, surface modeling, and parametric design. Popular examples include AutoCAD, SolidWorks, Inventor, Fusion 360, and CATIA.\\n* **Specialized CAD:** Software tailored to specific industries or applications, such as architectural CAD (Revit), mechanical CAD (SolidWorks), electrical CAD (Eagle), and civil engineering CAD (Civil 3D).\",\n      \"codeExample\": null\n    },\n    {\n      \"title\": \"Applications of CAD\",\n      \"explanation\": \"CAD has broad applications across many fields: \\n\\n* **Manufacturing:** Designing and manufacturing products, from simple parts to complex assemblies.\\n* **Architecture, Engineering, and Construction (AEC):** Designing buildings, bridges, and other infrastructure projects.\\n* **Automotive:** Designing vehicle components and assemblies.\\n* **Aerospace:** Designing aircraft, spacecraft, and related systems.\\n* **Product design:** Creating prototypes and final designs for consumer products.\\n* **GIS (Geographic Information Systems):** Mapping and spatial data analysis.\\n* **Robotics:** Designing and simulating robotic systems.\",\n      \"codeExample\": null\n    },\n    {\n      \"title\": \"Advantages of using CAD\",\n      \"explanation\": \"Using CAD offers numerous benefits:\\n\\n* **Increased accuracy:** Eliminates manual drafting errors.\\n* **Improved efficiency:** Automates repetitive tasks and speeds up the design process.\\n* **Enhanced collaboration:** Facilitates teamwork and data sharing.\\n* **Better visualization:** Provides realistic representations of designs.\\n* **Reduced costs:** Minimizes material waste and production errors.\\n* **Easier modifications:** Designs can be easily modified and updated.\",\n      \"codeExample\": null\n    },\n    {\n      \"title\": \"Disadvantages of using CAD\",\n      \"explanation\": \"While CAD offers significant advantages, there are some drawbacks:\\n\\n* **High initial cost:** CAD software can be expensive to purchase and maintain.\\n* **Steep learning curve:** Mastering CAD software requires time and effort.\\n* **Hardware requirements:** Powerful computers are often needed to run advanced CAD software.\\n* **Software dependency:** Designs are dependent on the specific software used.\",\n      \"codeExample\": null\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    //console.log(result.response.text());
  
  
