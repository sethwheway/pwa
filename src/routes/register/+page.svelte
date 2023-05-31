<svelte:head>
    <title>Register</title>
</svelte:head>


<script>
    import {ref, set} from "firebase/database";
    import {db} from "../../state.js";
    import {base} from "$app/paths";

    let selected

    function handle_input(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            selected = reader.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    function submit() {
        set(ref(db, `img/${localStorage.getItem("username")}`), selected)
        window.location.pathname = `${base}/account`
    }
</script>


<input type="file" accept="image/*" on:change={handle_input}/>
{#if selected}
    <img src={selected} alt="Selected Image"/>
    <button on:click={submit}>Submit</button>
{/if}