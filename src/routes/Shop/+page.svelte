<script lang="ts">
	import Navbar from "$lib/+navbar.svelte";

    let checked = false;
    let order: string[] = [];
    let list;
    let steak = 1;

    function updateQuantity(change: number) {
        steak = Math.max(1, steak + change);
    }
</script>

<style>
    .image {
        height: 430px;
        width: 600px;
        margin-left: -50px;
        
    }

    .abs {
        position: absolute;
        top: 280px;
        left: 20px;
    }

    .quantity {
        padding-top: 0.40rem;
        padding-bottom: 0.40rem;
    }
</style>

<Navbar></Navbar>

<div class="bg-white h-screen w-full items-center justify-center flex">
    <div class="flex justify-between items-center w-screen mt-20">
        <div class="">
            <img alt="food" src="background.jpg" class="image">
            <h1 class="abs text-6xl font-bold drop-shadow-sm text-white py"><span class="text-yellow-400">EAT</span> WELL, <br>
                <span class="text-yellow-400">LIVE</span> WELL
            </h1>
        </div>
        <div class="w-[60%] bg-slate-100 justify-around px-5 py-10 flex flex-row mr-10 rounded-lg border border-black">
            <div class="w-[55%] space-y-5">
                <div class="">
                    <label for="name" class="block font-bold text-sm">NAME</label>
                    <input id="name" placeholder="e.g Juan Dela Cruz" class="w-full border border-black py-2 px-4 rounded-full"/>
                </div>
                <div class="">
                    <label for="email" class="block font-bold text-sm">EMAIL</label>
                    <input id="email" placeholder="e.g XXXXXXXXX@gmail.com" class="w-full border border-black py-2 px-4 rounded-full"/>
                </div>
                <div class="">
                    <label for="phone" class="block font-bold text-sm">PHONE</label>
                    <input id="phone" placeholder="e.g +63XX XXX XXXX" class="w-full border border-black py-2 px-4 rounded-full"/>
                </div>
                <div class="">
                    <label for="address" class="block font-bold text-sm">ADDRESS</label>
                    <input id="address" placeholder="Barangay/Street/Home No." class="w-full  border border-black py-2 px-4 h-20 rounded-lg"/>
                </div>
            </div>
            <div class=" w-[40%] flex flex-col justify-between">
                <div class="flex flex-row justify-between">
                    <div class="flex flex-col justify-start w-auto">
                        <p class=" ms-7 font-bold text-sm">FOOD</p>
                        <div class="flex flex-row items-center py-2 px-1">
                            <input id="steak" type="checkbox" bind:checked={checked}  class="w-5 h-5 rounded">
                            <label for="steak"><span class="ms-2 font-semibold">Grilled Steak</span></label>
                        </div>
                        <div class="flex flex-row items-center py-2 px-1">
                            <input id="burger" type="checkbox" value="" class=" w-5 h-5 rounded">
                            <label for="burger"><span class="ms-2 font-semibold">Chicken Burger</span></label>
                        </div>
                        <div class="flex flex-row items-center py-2 px-1">
                            <input id="ramen" type="checkbox" value="" class="w-5 h-5 rounded">
                            <label for="ramen"><span class="ms-2 font-semibold">Ramen</span></label>
                        </div>
                        <div class="flex flex-row items-center py-2 px-1">
                            <input id="chicken" type="checkbox" value="" class="w-5 h-5 rounded">
                            <label for="chicken"><span class="ms-2 font-semibold">Roasted Chicken</span></label>
                        </div>
                        <div class="flex flex-row items-center py-2 px-1">
                            <input id="pasta" type="checkbox" value="" class="w-5 h-5 rounded">
                            <label for="pasta"><span class="ms-2 font-semibold">Pasta Eleganza</span></label>
                        </div>
                        <div class="flex flex-row items-center py-2 px-1">
                            <input id="braciole" type="checkbox" value="" class="w-5 h-5 rounded">
                            <label for="braciole"><span class="ms-2 font-semibold">Braciole</span></label>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p class="font-bold text-sm mr-3">QUANTITY</p>
                        <div class="quantity flex justify-end px-1">
                            <p class=" font-bold">{steak}x</p>
                            <div class=" ml-3 flex flex-col"> 
                                <button aria-label="add" disabled={!checked} onclick={() => updateQuantity(1)}  class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                </button>
                                <button aria-label="remove" disabled={!checked} onclick={() => updateQuantity(-1)}  class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                                                        
                                </button>
                            </div>
                        </div>
                        <div class="quantity flex justify-end px-1">
                            <p class=" font-bold">1x</p>
                            <div class=" ml-3 flex flex-col"> 
                                <button aria-label="add" class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                    
                                </button>
                                <button aria-label="remove" class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                                                        
                                </button>
                            </div>
                        </div>
                        <div class="quantity flex justify-end px-1">
                            <p class=" font-bold">1x</p>
                            <div class=" ml-3 flex flex-col"> 
                                <button aria-label="add" class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                    
                                </button>
                                <button aria-label="remove" class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                                                        
                                </button>
                            </div>
                        </div>
                        <div class="quantity flex justify-end px-1">
                            <p class=" font-bold">1x</p>
                            <div class=" ml-3 flex flex-col"> 
                                <button aria-label="add" class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                    
                                </button>
                                <button aria-label="remove" class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                                                        
                                </button>
                            </div>
                        </div>
                        <div class="quantity flex justify-end px-1">
                            <p class=" font-bold">1x</p>
                            <div class=" ml-3 flex flex-col"> 
                                <button aria-label="add" class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"/>
                                    </svg>
                                    
                                </button>
                                <button aria-label="remove" class="rounded-full flex items-center hover:border hover:border-black w-4">
                                    <svg class="w-[14px] h-[14px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="black" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"/>
                                    </svg>                          
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- SUBMIT BUTTON -->
                <div class="w-full flex justify-center">
                    <button class=" rounded-full bg-red-900 text-white font-bold py-2 px-4 w-full">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>