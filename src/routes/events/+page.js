// @ts-ignore
export async function load({fetch}) {
    const resp = await fetch("https://raw.githubusercontent.com/sethwheway/pwa/data/events.json");
    const events = await resp.json();
    return {events}
}