/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const data = await fetch('https://us-central1-my-web-site-27a15.cloudfunctions.net/getSCStream?offset=0&limit=100');
    const json = await data.json();
    const response = new Response(JSON.stringify(json), {
        headers: {
            'content-type': 'application/json'
        }
    });
    return response.json();

};