<svelte:head>
    <title>Events</title>
</svelte:head>


<script>
    import EventsContainer from "$lib/EventsContainer.svelte";
    export let data;
</script>


<p>Press on an event to show more information.
Tap the + to add an event to My Events</p>

<EventsContainer events={data.events}/>


<style>
    p {
        text-align: center;
        margin-bottom: 35px;
    }
</style>