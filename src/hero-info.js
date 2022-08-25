const DOTA2_API_URL = 'https://api.opendota.com/api/heroStats';

const urlValues = window.location.search;
const urlParam = new URLSearchParams(urlValues);
const id = urlParam.get('id');

async function getHeroInfo() {
    await fetch(DOTA2_API_URL)
        .then((response) => response.json())
        .then((responseJson) => {
            let data = '';
            responseJson.map((values) => {
                if (values.id == id) {
                    data = ` <div class="image w-image cardInfo:h-60  cardInfo:w-full">
                    <a href="#">
                        <img class="rounded-t-lg w-full h-full cardInfo:rounded-t-lg" src="https://api.opendota.com${values.img}" alt="" />
                    </a>
                </div>

                <div class="p-5  w-image">
                    <a href="#" class="flex gap-2">
                        <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${values.localized_name}</h5>
                        <img class="h-8" src="https://api.opendota.com${values.icon}" alt="">
                    </a>
                        <div class="flex mt-3">
                            <h6 class=" font-semibold text-white">Primary attribute: </h6> 
                            <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.primary_attr}</p>
                            </div>
                            <div class="flex mt-3">
                                <h6 class=" font-semibold text-white">Attack Type:</h6>
                                <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.attack_type}</p>
                            </div>
                            <div class="flex mt-3">
                                <h6 class=" font-semibold text-white">Roles:</h6>
                                <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.roles}</p>
                            </div>
                            <div class="flex mt-3">
                                <h6 class=" font-semibold text-white">Base Health:</h6>
                                <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.base_health}</p>
                            </div>
                            <div class="flex mt-3">
                                <h6 class=" font-semibold text-white">Base Health Regen:</h6>
                                <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.base_health_regen}</p>
                            </div>
                            <div class="flex mt-3">
                                <h6 class=" font-semibold text-white">Base Mana:</h6>
                                <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.base_mana}</p>
                            </div>
                            <div class="flex mt-3">
                                <h6 class=" font-semibold text-white">Base Mana regen:</h6>
                                <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.base_mana_regen}</p>
                            </div>
                            <div class="flex mt-3">
                                <h6 class=" font-semibold text-white">Base armor:</h6>
                                <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.base_armor}</p>
                            </div>
                            <div class="flex mt-3">
                                <h6 class=" font-semibold text-white">Base magic resistance:</h6>
                                <p class="mb-3 font-poppins text-gray-700 ml-2 dark:text-gray-400">${values.base_mr}</p>
                            </div>
                    </div>
                </div>`;
                } else if (id == null) {
                    location.href = 'heroes.html';
                }
            });
            document.getElementById('info-card').innerHTML = data;
        })
        .catch((err) => {
            console.log(err);
        });
}
getHeroInfo();
