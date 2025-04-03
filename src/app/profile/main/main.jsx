import React from 'react'

const Main = () => {
    return (
        <div>

           
            <main class="flex-1 px-10 py-8">
                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium mb-1">* First name</label>
                            <input type="text" value="muxammadaziz" class="w-full border rounded px-4 py-2" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">* Last name</label>
                            <input type="text" value="maxamatov" class="w-full border rounded px-4 py-2" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">* Email address</label>
                            <input type="email" value="maxamatovmuxammadaziz@gmail.com" class="w-full border rounded px-4 py-2" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">* Phone Number</label>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 bg-gray-100 border border-r-0 rounded-l">+998</span>
                                <input type="tel" placeholder="Your phone number..." class="w-full border rounded-r px-4 py-2" />
                            </div>
                        </div>
                        <div class="md:col-span-1">
                            <label class="block text-sm font-medium mb-1">* Username</label>
                            <input type="text" placeholder="Your username…" class="w-full border rounded px-4 py-2" />
                        </div>
                        <div class="md:col-span-1">
                            <label class="block text-sm font-medium mb-1">Profile photo</label>
                            <button type="button" class="flex items-center gap-2 border rounded px-4 py-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16h16V4H4zm8 4v4m0 0v4m0-4h4m-4 0H8" />
                                </svg>
                                Upload
                            </button>
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                            Save changes
                        </button>
                    </div>
                </form>
            </main>
        </div>


   
  )
}

export default Main