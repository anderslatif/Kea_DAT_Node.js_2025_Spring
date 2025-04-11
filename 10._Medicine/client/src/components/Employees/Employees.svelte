<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../stores/generalStore.js";

    let employees = $state([]);

    onMount(() => {
        fetch($BASE_URL+"/employees")
        .then((response) => response.json())
        .then((result) => {
            employees = result.data;
        });
    });
</script>

<h3>Employees Available</h3>
{#each employees as employee }
    <h4>{employee}</h4>
{/each}
