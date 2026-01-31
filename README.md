# WanderPlan AI - Travel Itinerary Generator

A modern web application that generates personalized travel itineraries using AI automation.

## 🚀 Features
-   **Glassmorphism UI**: Beautiful, responsive design.
-   **AI-Powered**: Custom itineraries based on budget, travelers, and interests.
-   **Automated Delivery**: Itineraries are emailed directly to you via n8n workflows.

## 🛠️ Setup Instructions

### 1. Frontend
1.  Navigate to the `frontend` folder.
2.  Open `index.html` in your browser.
3.  **Important**: You must update the `WEBHOOK_URL` in `script.js` with your running n8n webhook URL.

### 2. Automation (n8n)
1.  Import `n8n/workflow.json` into your n8n instance.
2.  **Configure Credentials**:
    -   Set up your OpenAI (or other LLM) credentials in the AI node.
    -   Set up your Gmail/SMTP credentials in the Email node.
3.  **Activate**: Execute the workflow or set it to "Active" (Production).
4.  Copy the **Production URL** of the Webhook node and paste it into `frontend/script.js`.

## 📂 Project Structure
-   `/frontend`: HTML, CSS, JS files for the web interface.
-   `/n8n`: Workflow JSON file for automation.
-   `AI_USAGE.md`: Documentation on AI implementation details.

## 📝 Constraints Met
-   ✅ No backend frameworks (Pure HTML/JS)
-   ✅ No paid APIs (Architecture relies on User's n8n/LLM keys)
-   ✅ Cursor AI used as co-pilot
-   ✅ Responsive Design
