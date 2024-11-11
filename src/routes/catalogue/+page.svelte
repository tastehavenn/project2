<script>
    import Navbar from "$lib/+navbar.svelte";

    let Products = [
        {img:"Grilled Steak.png", name: "Grilled Steak", price:"$150"},
        {img:"Chicken Burger.png", name: "Chicken Burger", price:"$100"},
        {img:"Ramen.png", name: "Ramen", price:"$150"},
        {img:"Roasted Chicken.png", name: "Roasted Chicken", price:"$350"},
        {img:"Pasta Eleganza.png", name: "Pasta Eleganza", price:"$130"},
        {img:"Braciole.png", name: "Braciole", price:"$150"}
    ];
</script>

<style>
    .img {
        height: 180px;
        width: full;
    }
</style>
<Navbar/>

<div class="h-screen w-full items-center justify-center flex">
    <div class="grid justify-center grid-cols-3 gap-x-12 gap-y-6 mt-20 mx-20">
            {#each Products as product }
                <div class="flex flex-col justify-start">
                    <img class="img w-full" alt="pagkain" src={product.img}>
                    <p class="font-bold text-yellow-400">{product.name}</p>
                    <p class=" text-white font-bold">{product.price}</p>
                </div>
            {/each}
    </div>
</div>


