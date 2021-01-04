export const runMutation = {
    methods: {
        async runMutation(mutation) {
            // console.log(mutation);
            try {
                const fetchResponse = await fetch("/.netlify/functions/runMutation", {
                    method: "POST",
                    headers: { 
                        "Accept": "application/json", "Content-Type": "application/json",
                        "woo-session": localStorage.getItem("woo-session") 
                    },
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