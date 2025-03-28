<script>
    import { fridgeMessages } from "../../stores/fridgeMessagesStore.js";


</script>

{#each $fridgeMessages as fridgeMessage}
    <p>{fridgeMessage.creator || ""} {fridgeMessage.message}</p>   
{/each}

<slot></slot>

<h3 id="welcome-mat">Home sweet home</h3>

<style>
    #welcome-mat {
        background-color: rgba(165, 42, 42, 0.381);
        padding: 20px;
        border-radius: 0 0 12px 12px;
    }
</style>