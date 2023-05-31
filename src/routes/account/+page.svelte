<svelte:head>
    <title>Account</title>
</svelte:head>


<script>
    import {child, get, onValue, ref, set} from "firebase/database";
    import {db, selected_events} from "../../state.js";
    import {browser} from "$app/environment";
    import {base} from "$app/paths";

    let username = "";
    let password = "";
    let logged
    let incorrect_details = false;

    if (browser) {
        let ls = localStorage.getItem("username")
        if (ls !== null) {
            username = ls
            logged = true
            update_pic()
        }
    }

    function login() {
        if (username.length === 0 || password.length === 0) {
            return
        }

        get(child(ref(db), `pass/${username}`)).then((snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val() !== password) {
                    incorrect_details = true
                    return
                }
                localStorage.setItem("username", username)
                logged = true
                update_pic()
            } else {
                set(ref(db, `pass/${username}`), password)
                localStorage.setItem("username", username)
                window.location.pathname = `${base}/register`
            }
        }).catch((error) => {
            console.error(error)
        })

    }

    function update_pic() {
        onValue(ref(db, `img/${username}`), (snapshot) => {
            document.getElementById("img").src = snapshot.val()
        }, {onlyOnce: true})
    }
</script>


{#if logged}
    <div id="user">
        <img id="img" src="">
        <h2>Hello {localStorage.getItem("username")}</h2>
    </div>
    <p>You have {$selected_events.size} selected events.</p>
    <button type="button" on:click={() => {localStorage.removeItem("username"); location.reload()}}>Log out</button>
{:else}
    <div class="container">
        <h1>Register/Log In</h1>
        <form on:submit|preventDefault={login}>
            <label>
                Username:
                <input type="text" bind:value={username}/>
            </label>
            <br>
            <label>
                Password:
                <input type="password" bind:value={password}/>
            </label>
            <br>
            <button type="submit">Login</button>
            {#if incorrect_details}
                <br>
                <div>Incorrect details</div>
            {/if}
        </form>
    </div>
{/if}


<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #user {
        display: flex;
        flex-direction: row;
    }

    #user img {
        width: 25vw;
        height: 25vw;

        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);

        border-radius: 15px;
        border: 1px solid dodgerblue;
    }

    #user h2 {
        flex-grow: 1;
        text-align: center;
        margin-top: 5px;
    }

    p {
        text-align: center;
        margin-top: 75px;
        margin-bottom: 150px;
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

    form {
        margin-left: auto;
        margin-right: auto;
    }
</style>