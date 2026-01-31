document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('itineraryForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusMessage = document.getElementById('statusMessage');
    const originalBtnText = submitBtn.innerHTML;

    // REPLACE THIS WITH YOUR ACTUAL N8N WEBHOOK URL
    const WEBHOOK_URL = 'https://antonyfelix.app.n8n.cloud/webhook/0e03dee8-e1e5-467b-86c5-4a5d54bd9d43';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Basic Validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Gather Form Data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // UI Loading State
        setLoading(true);

        try {
            // Check if URL is placeholder
            if (WEBHOOK_URL.includes('UPDATE_THIS_URL')) {
                throw new Error('Please configure the webhook URL in script.js');
            }

            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                showStatus('Itinerary request sent! Check your email soon.', 'success');
                form.reset();
            } else {
                throw new Error('Failed to send request.');
            }
        } catch (error) {
            console.error('Full Error Details:', error);
            if (error.name === 'TypeError') {
                showStatus('Network Error: Likely a CORS issue or n8n is offline. Check the console (F12) for details.', 'error');
            } else {
                showStatus(error.message || 'Something went wrong. Please try again.', 'error');
            }
        } finally {
            setLoading(false);
        }
    });

    function setLoading(isLoading) {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
            statusMessage.classList.add('hidden');
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    }

    function showStatus(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = `status-message ${type}`;
        statusMessage.classList.remove('hidden');

        // Auto hide success after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                statusMessage.classList.add('hidden');
            }, 5000);
        }
    }
});
