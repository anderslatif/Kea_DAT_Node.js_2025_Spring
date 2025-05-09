<script>
    import { nickname } from "../../stores/nicknameStore.js";

    let nicknameInput;

    async function submitNickname() {
        if (!nicknameInput) {
            return;
        }


        await fetch("http://localhost:8080/api/nicknames", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nickname: nicknameInput }) 
        });

        nickname.set(nicknameInput);

    }
</script>


<input bind:value={nicknameInput} placeholder="nickname..." >
<button onclick={submitNickname}>Submit Nickname</button>