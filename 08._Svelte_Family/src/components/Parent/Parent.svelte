<script>
    import Child from "../Child/Child.svelte";

    const { name: parentName, children } = $props();

    function handleShowLove(childName) {
        console.log(`${childName} loves ${parentName} very much! 💙`);
    }

    let cookieJar = $state(["🍪", "🍪", "🍪", "🍪"]);

    function handleEatCookie() {
        cookieJar.pop();
        
        if (cookieJar.length === 0) {
            cookieJar = ["🍪", "🍪", "🍪", "🍪"];
        }
    }

</script>


<h1>{parentName}</h1>    



<p>
    {#each cookieJar as cookie}
        {cookie}&nbsp;&nbsp;
    {/each}
</p>

{#each children as child (child.name)}
    <Child {...child} onShowLove={handleShowLove} onEatCookie={handleEatCookie} />
{/each}
