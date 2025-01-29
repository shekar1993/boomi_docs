# Boomi AI Glossary 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-c0626e17-f49c-45c8-8756-16bc63f9b79e"/>
</head>

Here are some important artificial intelligence (AI) terms and concepts to understand when working on the Boomi Enterprise Platform.

### AI Agents

AI agents are software components that have a defined purpose and personality. They provide automation and perform specific tasks with or without human intervention. They use AI-based reasoning to decide how to accomplish a task and take action independently. Some AI agents can work together to complete complex processes seamlessly.

For example, a travel booking agent could receive a user’s request and independently orchestrate other AI agents to book the requested travel experience. Different AI agents work together to obtain information and then take action by reserving a hotel, car rentals, and flights.

The AI Agent approach is intended to provide a way to inject generative AI (as well as other AI techniques) into practical digital solutions. Agents are often applied in automation scenarios and human assistance (copilot) scenarios. The agent approach intendeds to provide a framework for building systems of autonomous actors with a high degree of coordination.

<hr class="dashed"></hr>

### AI Agent Garden

Boomi's [AI Agent Garden](/docs/Atomsphere/Platform/atm-BoomiAI_Agent_Garden.md) (AAG) is a capability within the Boomi Enterprise Platform that allows users to see what AI Agents are available for use on the platform. In the future, you'll be able to install AI Agents on the platform and track their activities.

<hr class="dashed"></hr>

### AI Agent Properties

- Inter-agent communication
  - AI Agents may have synchronous “conversations” via API, which could use RESTful communication containing a natural language payload.
  - AI Agents may use asynchronous, event-based communication to issue one-way commands or notify other agents in a pub-sub context. Again, the payloads are likely to contain natural language, on the assumption that all agents can use LLM-based intelligence to interpret the language.
  - It is possible that equipping each AI agent with language interpretation capabilities will not be optimal for efficiency, so specific “interpreter agents” in the architecture that receive natural language messages and translate them into structured calls for other APIs may need to be included.
- Explainability
  - AI Agents require an Activity Audit to trace the actions they carry out.
  - AI Agents also require a Decision Audit to explain their choices based on their LLM-powered reasoning.

<hr class="dashed"></hr>

### AI Agent Registry

The AI Agent Registry (AAR) is a universal mechanism for registering the AI Agents currently in operation (production or otherwise) at an organization.  The need for such a federated registry will grow as the AI Agent economy scales up. Each organization has one AI Agent registry, federated across Boomi Enterprise Platform instances and other agent runtimes (e.g. AWS Bedrock, Langchain).

<hr class="dashed"></hr>

### Boomi AI Agents 

Boomi AI Agents provide AI-powered capabilities within the platform.  These capabilities can be utilized currently through the Boomi GPT conversational user interface (CUI).  Currently, you can use:

- **Boomi GPT** - Enter your prompts in a conversational user interface, and Boomi GPT orchestrates Boomi DesignGen, Boomi Answers, and Boomi Scribe to help you achieve your business goals.
- **Boomi DesignGen** - Design integration processes with generative AI based on 300M+ patterns and best practices and refine them to fit your requirements.
- **Boomi Answers** - Get quick answers to your questions about the Boomi Enterprise Platform using knowledge from Help.Boomi.com and the Boomi Community.
- **Boomi Scribe** - Let generative AI write documentation for your existing and new integration processes.
- **Boomi DataDetective** (Early Access) - Protect sensitive information with AI-powered data classification and track data movement across regions.
- **Boomi Pathfinder** - Get automated data mapping and recommendations for the next steps in building integrations.
- **Boomi HubGen** - Let generative AI build model drafts in Hub based on your data synchronization goals.
- **Boomi Resolve** - Get quick solutions to your integration process errors using knowledge from Help.Boomi.com and the Boomi Community.

<hr class="dashed"></hr>

### Grounding

Grounding in AI means giving a Large Language Model (LLM) the context and guidance to make meaningful, practical, and relevant decisions and responses using the data it was trained on. Grounded AI enhances user experiences by providing more useful outcomes. For example, if you ask an AI, "I'm planning a trip to Paris next month. Any suggestions?" an ungrounded AI might respond with, "Paris is a word that starts with the letter P." In contrast, a grounded AI would understand the context and suggest landmarks and neighborhoods to explore in Paris. There are many methods for grounding LLM’s:

- Prompt engineering is a technique whereby a user sends a set of system and user prompts to an LLM to refine the LLM’s output. It is a useful approach with many applications but is still bound by the scope of the LLM’s training data.
- Retrieval augmented generation (RAG) allows users to incorporate their own proprietary, authoritative data sets into the LLM’s outputs. To do this, RAG uses data vectorization, which is the way LLMs store and relate information. A big advantage is that RAG can be executed in real time without any pre-training, meaning it is a quick way to get the LLM to provide current and relevant responses. In addition to the LLM, RAG typically uses a vector database as well as a user-provided knowledge base.
- Fine tuning is also a method for incorporating proprietary data, but it cannot be executed in real-time. Fine tuning requires training steps, and ultimately produces a customized version of an LLM. Whereas RAG is perfectly suited for data accuracy, fine tuning can be used for more nuanced capabilities such as mimicking a person’s or company’s tone of voice.

<hr class="dashed"></hr>

### Partner AI Agents

Partner AI Agents are pluggable components that allow Boomi Enterprise Platform users to install and use best-of-breed AI functions from our network of partners.  They allow rich capabilities to be incorporated from across the digital ecosystem.

<hr class="dashed"></hr>

### User-created AI Agents

User-created AI agents are developed using the Boomi Enterprise Platform, which provides all the necessary building blocks.

- Boomi’s connectivity and orchestration capabilities enable users to interact with selected models via API, access proprietary data sources, and automate actions through various applications. 
- The Boomi platform’s process canvas allows the creation of sophisticated workflows to retrieve, combine, filter, and contextualize data, facilitating model prompting and techniques like RAG and fine-tuning. 
- Boomi DataHub serves as an access point and repository for the agents’ knowledge base.
- Boomi Flow and Boomi API Management offer human or machine interfaces to package these components into standalone AI agents.

Explore the User AI agents we have available on [Boomi Discover](https://discover.boomi.com/browse-solutions). Browse by selecting AI Agent as the Solution Type.