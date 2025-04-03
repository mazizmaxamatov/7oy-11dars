import React from 'react'

const List = () => {
    return (
        <div>

            <div class="flex min-h-screen bg-white text-gray-800">

                <aside class="w-64 border-r px-6 py-8">
                    <h2 class="text-2xl font-bold mb-8">My Account</h2>
                    <nav class="flex flex-col gap-4">
                        <a href="#" class="flex items-center text-green-600 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A9 9 0 1119.88 3.03a9 9 0 01-14.758 14.774z" />
                            </svg>
                            Account Details
                        </a>
                        <a href="#" class="flex items-center hover:text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V5a2 2 0 00-2-2H6a2 2 0 00-2 2v8" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-6H4v6h16z" />
                            </svg>
                            My Products
                        </a>
                        <a href="#" class="flex items-center hover:text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1117.657 16.657z" />
                            </svg>
                            Address
                        </a>
                        <a href="#" class="flex items-center hover:text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                            Wishlist
                        </a>
                        <a href="#" class="flex items-center hover:text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h2l1 2h13l1-2h2" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14h14v6H5z" />
                            </svg>
                            Track Order
                        </a>
                    </nav>
                    <div class="border-t mt-8 pt-6">
                        <a href="#" class="flex items-center text-red-600 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                            </svg>
                            Log out
                        </a>
                    </div>
                </aside>

            </div>


        </div>
    )
}

export default List