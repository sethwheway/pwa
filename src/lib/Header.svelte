<script>
    import {page} from "$app/stores";
    import {base} from "$app/paths";
</script>


<header>
    <nav>
        <ul>
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a href="{base}/">Home</a>
            </li>
            <li aria-current={$page.url.pathname === "/events" ? "page" : undefined}>
                <a href="{base}/events">Events</a>
            </li>
            <li aria-current={$page.url.pathname === "/events/my" ? "page" : undefined}>
                <a href="{base}/events/my">My Schedule</a>
            </li>
            <li aria-current={$page.url.pathname === "/account" ? "page" : undefined}>
                <a href="{base}/account">Account</a>
            </li>
        </ul>
    </nav>
</header>


<style>
    nav {
        background: rgba(200, 50, 50, 0.7);
        background-size: contain;
    }

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 3em;
        padding: 0;
        margin: 0;

        list-style: none;
    }

    li {
        position: relative;
        height: 100%;
    }

    li[aria-current="page"]::before {
        position: absolute;
        --size: 8px;
        left: calc(50% - var(--size));

        content: '';
        border: var(--size) solid transparent;
        border-top: var(--size) solid rgba(255, 255, 255, 1);
    }

    nav a {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 0.5rem;

        color: black;
        font-weight: 700;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
    }
</style>
