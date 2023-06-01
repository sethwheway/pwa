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

    async function submit() {
        let d = await set(ref(db, `img/${localStorage.getItem("username")}`), selected)
        console.log(d)
        window.location.pathname = `${base}/account`
    }
</script>

<h3>Please upload a profile picture</h3>
<input type="file" accept="image/*" on:change={handle_input}/>
{#if selected}
    <img src={selected} alt="Selected Image"/>
    <button on:click={submit}>Submit</button>
{/if}