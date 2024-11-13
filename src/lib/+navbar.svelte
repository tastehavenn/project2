<script>
    import { base } from '$app/paths';

    export let tabs = [
        { name: "Shop", link: "/project2/Shop" },
        { name: "Contact", link: "/project2/Contact" },
        { name: "Catalogue", link: "/project2/catalogue" },
    ];

    let dropdown = false;

    function toggleDropdown() {
        dropdown = !dropdown;
    }
</script>

<div class="w-full flex px-10 justify-between items-center bg-slate-300 h-20 shadow-md fixed top-0 z-10">
    <a href="{base}/">
        <p class="drop-shadow-md font-bold text-4xl text-slate-100"><span class="text-yellow-300">TASTE</span> HAVEN</p>
    </a>
    <!-- Desktop Navbar -->
    <div class="hidden md:flex space-x-2">
        {#each tabs as tab}
            <a class="rounded-full drop-shadow-sm font-semibold text-white border-2 border-white hover:bg-red-900 px-4 py-3" href="{tab.link}">{tab.name}</a>
        {/each}
    </div>

    <!-- Mobile Hamburger Icon -->
    <div class="md:hidden">
        <button on:click={toggleDropdown} class="text-white focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    {#if dropdown}
        <div class="absolute top-20 left-0 w-full bg-slate-300 shadow-md flex flex-col items-center md:hidden">
            {#each tabs as tab}
                <a class="w-full text-center py-3 text-white border-b border-white hover:bg-red-900" href="{tab.link}">{tab.name}</a>
            {/each}
        </div>
    {/if}
</div>

<style>
    /* Adjust padding at the top of the page to account for the navbar height */
    :global(body) {
        padding-top: 5rem;
    }
</style>
