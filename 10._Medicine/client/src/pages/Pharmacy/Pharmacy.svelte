<script>
    import { onMount } from "svelte";

    import Employees from "../../components/Employees/Employees.svelte";

    import { BASE_URL } from "../../stores/generalStore.js";
    import { fetchGet, fetchPost } from "../../util/fetch.js";

    let pills = $state([]);

    onMount(async () => {
        pills = (await fetchGet($BASE_URL+"/pills")).data;
    })

    async function fillPrescription() {
        fetchPost($BASE_URL+"/pills", {
            name: "Ibuprofen"
        });
        pills = (await fetchGet($BASE_URL+"/pills")).data;
    }

</script>
<h1>Pharmacy</h1>

<Employees />

{#each pills as pill}
    <h3>{pill.name}</h3>
{/each}

<button onclick={fillPrescription}>Fill Prescription</button>