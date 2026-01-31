# AI Usage Documentation

## 1. Frontend Development (Cursor AI)
The frontend for **WanderPlan AI** was developed using Cursor AI as a co-pilot implementation.

-   **HTML Construction**: AI was used to scaffold the semantic HTML5 structure, ensuring accessibility and proper form input types (e.g., `number`, `email`).
-   **CSS Styling**: The "Glassmorphism" aesthetic (translucent backgrounds, blurs, gradients) was generated via AI prompts to ensure a modern, premium look without using external heavy frameworks.
-   **JavaScript Logic**: AI assisted in writing the `fetch` logic to handle asynchronous form submissions to the n8n webhook, ensuring proper error handling and flexible JSON payload construction.

## 2. Automation Workflow (n8n & AI)
The core logic resides in an **n8n workflow** that leverages Generative AI.

-   **Webhook Trigger**: Acts as the entry point, receiving JSON data from the frontend.
-   **LLM Node (Artificial Intelligence)**:
    -   **Role**: Acts as the travel agent.
    -   **Prompt Engineering**: The prompt dynamically inserts user variables (`destination`, `budget`, etc.) to generate a bespoke response.
    -   **Constraint**: The AI is instructed to format the output as structured HTML/Text for readability in emails.
-   **Email Node**: Automates the delivery of the AI-generated content directly to the user.

## 3. Design & Logic Decisions
-   **No Backend Framework**: To adhere to constraints, we bypassed Node.js/Python servers. The frontend talks directly to the automation server (n8n), reducing complexity and hosting costs.
-   **Client-Side Validation**: We implemented native HTML5 validation + JavaScript checks to reduce unnecessary API calls to the n8n webhook.
-   **Budget Awareness**: The prompt explicitly instructs the AI to consider the `budget` field (Budget-friendly vs. Luxury) to tailor activity and accommodation suggestions.
