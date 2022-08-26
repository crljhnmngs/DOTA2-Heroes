const DOTA2_API_URL = 'https://api.opendota.com/api/heroStats';

async function getHeroes() {
    await fetch(DOTA2_API_URL)
        .then((response) => response.json())
        .then((responseJson) => {
            //Display Heroes Information
            let data = '';
            for (let dotaHeroes of responseJson) {
                data += `
                <div
                class="max-w-card h-auto rounded-lg border shadow-m bg-gray-800 border-gray-700 mb-5"
            >
                <a href="#">
                    <img
                        class="rounded-t-lg min-h-picture"
                        src="https://api.opendota.com${dotaHeroes.img}"
                        alt="Hero Image"
                    />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5
                            class="mb-2 text-2xl font-bold tracking-tigh text-white"
                        >
                            ${dotaHeroes.localized_name}
                        </h5>
                    </a>
                    <h6 class="font-semibold text-white">Attack Type:</h6>
                    <p class="mb-3 font-poppins ml-16 text-gray-400">
                        ${dotaHeroes.attack_type}
                    </p>
                    <a
                        href="hero-info.html?id=${dotaHeroes.id}"
                        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read more
                        <svg
                            aria-hidden="true"
                            class="ml-2 -mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        `;
            }
            document.getElementById('card').innerHTML = data;
        })
        .catch((err) => {
            console.log(err);
        });
}
getHeroes();
