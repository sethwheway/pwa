<script>
    import Arrow from "./Arrow.svelte";
    import {selected_events} from "../state.js";

    export let id;
    export let name;
    export let time;
    export let place;
    export let filter;

    let expanded = false;

    function toggle_expanded() {
        expanded =! expanded
    }

    $: selected = $selected_events.has(id);

    function toggle_selected() {
        selected_events.update((store) => {
            if (store.has(id)) {
                store.delete(id)
            } else {
                store.add(id)
            }
            return store
        })
    }
</script>


<div class="event-box" on:click={toggle_expanded} class:blue-border={selected} class:filter={filter && !selected}>
    <h3>{name}</h3>
    <div class="inline">
        <p>{time}</p>
        <p>{place}</p>
    </div>
    <div class="inline-far">
        <Arrow {expanded}/>
        <button class="add" on:click|stopPropagation={toggle_selected}>
            {#if selected}
                ✅
            {:else}
                ➕
            {/if}
        </button>
    </div>
    {#if expanded}
        <p>Additional event info</p>
    {/if}
</div>


<style>
    .event-box {
        padding: 16px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);

        border-radius: 15px;
        border: 1px solid rgba(var(--theme-red), .3);
    }

    .blue-border {
        border-color: dodgerblue !important;
    }

    .filter {
        display: none;
    }

    .event-box h3 {
        margin: 0;
        text-align: center;
    }

    .inline {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .inline p {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .inline-far {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .add {
        background: none;
        border: none;
        font-size: 1rem;
    }
</style>
