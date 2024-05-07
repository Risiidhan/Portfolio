export async function getRepos() {
    try {
        const response = await fetch('https://api.github.com/users/risiidhan/starred', {
            headers: {
                Authorization: `token ${import.meta.env.VITE_API_TOKEN}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error('Error fetching repositories:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}