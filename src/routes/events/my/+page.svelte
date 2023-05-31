<svelte:head>
    <title>My Events</title>
</svelte:head>


<script>
    import EventsContainer from "$lib/EventsContainer.svelte";
    import {selected_events} from "../../../state.js";
    export let data;
</script>


{#if $selected_events.size !== 0}
    <EventsContainer events={data.events} filter={true}/>
{:else}
    <p>No events selected</p>
{/if}


<style>
    p {
        margin: auto;
        font-size: x-large;
        font-weight: bold;
    }
</style>