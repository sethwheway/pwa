<script>
    import "../app.css";
    import Header from "$lib/Header.svelte";

    import {pwaInfo} from "virtual:pwa-info";

    $: webManifest = pwaInfo.webManifest.linkTag;
</script>


<svelte:head>
    {@html webManifest}
</svelte:head>


<div class="app">
    <Header/>

    <main>
        <slot/>
    </main>
</div>


<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>
