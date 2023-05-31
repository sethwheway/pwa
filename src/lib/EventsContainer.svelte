<script>
    import EventBox from "./EventBox.svelte";

    export let events;
    export let filter = false;

    let day = 0;
</script>


<div class="events-container">
    <div class="day-selector">
        <span on:click={() => day = 0} class:selected={day === 0}>Day 1</span>
        <span on:click={() => day = 1} class:selected={day === 1}>Day 2</span>
    </div>

    {#each events[day] as event (event.id)}
        <EventBox {...event} {filter}/>
    {/each}
</div>


<style>
    .events-container {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .day-selector {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 25px;
    }

    .day-selector span {
        font-size: 1.25rem;
        padding-bottom: .1rem;
    }

    .selected {
        border-bottom: 3px solid rgb(var(--theme-red));
    }
</style>