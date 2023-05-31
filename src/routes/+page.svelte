<svelte:head>
    <title>Home</title>
</svelte:head>


<script>
    import {ref, set} from "firebase/database";
    import {db} from "../state.js";
    import {base} from "$app/paths";

    let feedback
    let disabled
    function submit() {
        disabled = true
        set(ref(db, `feedback/${Date.now()}`), feedback)
    }
</script>


<div id="container">
    <h1>Welcome</h1>
    <p>To Non-existant University open day.</p>
    <br><hr>
    <p>You can find a list of the events taking place on the <a href={`${base}/events`}>Events</a> tab.</p>
    <p>Adding an event to your schedule will add it to <a href={`${base}/events/my`}>My Schedule</a>.</p>
    <p>You can register/log in to an account, or view your account on the <a href={`${base}/account`}>Account tab</a>.</p>
    <br><hr>
    <h2>Feedback</h2>
    <p>Submit your feedback here.</p>
    <textarea bind:value={feedback}></textarea>
    <button type="button" on:click={submit} disabled={disabled}>{#if !disabled}Submit{:else}Thank you!{/if}</button>
</div>


<style>
    h1 {
        margin-bottom: 10px;
    }

    #container {
        text-align: center;
    }

    textarea {
        width: 100%;
        height: 20%;
    }

    button {
        margin-left: auto;
        margin-right: auto;
        width: 65vw;
        height: 10vw;

        background: ghostwhite;
        border: 1px solid lightslategrey;
        border-radius: 10px;
    }
</style>