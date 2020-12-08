export const runMutation = {
    methods: {
        async runMutation(mutation) {
            try {
                const fetchResponse = await fetch("/.netlify/functions/runMutation", {
                    method: "POST",
                    headers: { "Accept": "application/json", "Content-Type": "application/json"},
                    body: mutation,
                });
                const data = await fetchResponse.json();
                return data;
            } catch (e) {
                return e;
            }
        }
    }
}