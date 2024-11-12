<script>
    import { base } from '$app/paths';

    export let tabs = [
        { name: "Shop", link: "/project2/Shop" },
        { name: "Contact", link: "/project2/Contact" },
        { name: "Catalogue", link: "/project2/catalogue" },
    ];

    let dropdown = false;
</script>

<div class="w-full flex px-10 justify-between items-center bg-slate-300 h-20 shadow-md absolute top-0 z-10">
    <a href="{base}/">
        <p class="drop-shadow-md font-bold text-4xl text-slate-100"><span class="text-yellow-300">TASTE</span> HAVEN</p>
    </a>
    <div class="space-x-2">
        <a class="rounded-full drop-shadow-sm font-semibold text-white border-2 border-white hover:bg-red-900 px-4 py-3" href="{tabs[0].link}">{tabs[0].name}</a>
        <a class="rounded-full drop-shadow-sm font-semibold text-white border-2 border-white hover:bg-red-900 px-4 py-3" href="{tabs[2].link}">{tabs[2].name}</a>
        <a class="rounded-full drop-shadow-sm font-semibold text-white border-2 border-white hover:bg-red-900 px-4 py-3" href="{tabs[1].link}">{tabs[1].name}</a>
    </div>
</div>