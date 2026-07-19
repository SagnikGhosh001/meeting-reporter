export const callOllama = async (prompt) => {
    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            model: "gemma4:latest",
            prompt,
            stream: false,
        }),
    });

    const data = await res.json();
    return data.response;
};
