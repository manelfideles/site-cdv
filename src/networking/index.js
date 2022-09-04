/*
async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post) => post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}

export async function getEvents() {
    const eventsRes = await fetch(BASE_URL + "/events?_embed");
    const events = await eventsRes.json();
    return events;
}

export async function getEvent(slug) {
    const events = await getEvents();
    const eventArray = events.filter((event) => event.slug == slug);
    const event = eventArray.length > 0 ? eventArray[0] : null;
    return event;
}

export async function getSlugs(type) {
    let elements = [];
    switch (type) {
        case "posts":
            elements = await getPosts();
            break;
        case "events":
            elements = await getEvents();
            break;
    }
    const elementsIds = elements.map((element) => {
        return {
            params: {
                slug: element.slug,
            },
        };
    });
    return elementsIds;
}
*/

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://cdv.dei.uc.pt/wp-json/wp/v2',
    timeout: 150 * 1000,
});

const api = {
    getPosts(query) {
        return axiosInstance.get('/posts' + query);
    },
};

export default api;
