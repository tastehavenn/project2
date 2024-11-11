<style>
    .image {
        height: 320px;
        width: 420px;
    }
</style>

<script>
    import Navbar from "$lib/+navbar.svelte";
</script>
    <Navbar/>
        
    <div class="h-screen w-full items-center justify-center flex">
        <div class="h-[50%] flex justify-between items-center w-screen mt-20 mx-12">
            <div class="h-[80%] flex flex-col justify-between">
                <span class=" text-2xl text-white drop-shadow-sm">
                    <span class=" text-4xl font-bold">Welcome</span> to <span class=" text-4xl font-bold text-yellow-500">Taste </span> <span class="text-4xl font-bold">Haven!,</span> <br>
                    where every dish tells a story<br>
                    and every bite feels like home!<br>
                    <span class=" text-sm text-yellow-400 ">At Taste Haven, every meal is a delightful experience. <br>
                        Savor our fresh,whether it's a quick bite or a family feast. <br>
                        Join us on this culinary journey and let your taste buds explore our haven!</span>
                </span>
                <div>
                    <a class="px-3 py-2 rounded-full bg-red-700 text-white font-bold border-2 border-red-700 hover:border-2 hover:border-white" href="/project2/catalogue">Explore Menu</a>
                </div>
            </div>

            <img class="image" alt="borgar" src="borgar.png">
        </div>
    </div>

