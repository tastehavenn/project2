<script>
    import Navbar from "$lib/+navbar.svelte";

    let Products = [
        { img: "Grilled Steak.png", name: "Grilled Steak", price: "$150" },
        { img: "Chicken Burger.png", name: "Chicken Burger", price: "$100" },
        { img: "Ramen.png", name: "Ramen", price: "$150" },
        { img: "Roasted Chicken.png", name: "Roasted Chicken", price: "$350" },
        { img: "Pasta Eleganza.png", name: "Pasta Eleganza", price: "$130" },
        { img: "Braciole.png", name: "Braciole", price: "$150" }
    ];
</script>

<style>
    .img {
        height: 180px;
        width: 100%;
        object-fit: cover;
    }

    .catalogue-container {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("background.jpg");
        background-size: cover;
        background-position: center;
    }
</style>

<Navbar/>

<div class="catalogue-container min-h-screen w-full flex items-center justify-center px-4 py-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-6 sm:gap-x-8 lg:gap-x-12 mt-20 mx-4 md:mx-20">
        {#each Products as product}
            <div class="flex flex-col items-start">
                <img class="img rounded-md" alt="pagkain" src={product.img} />
                <p class="font-bold text-yellow-400 text-lg sm:text-xl">{product.name}</p>
                <p class="text-white font-bold text-md sm:text-lg">{product.price}</p>
            </div>
        {/each}
    </div>
</div>
