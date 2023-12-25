<script>
  export let form;
</script>

<svelte:head>
  <title>Ajouter une propriété</title>
</svelte:head>

<main>
  <div>
    <h1>Ajouter une propriété</h1>
    <button onclick="window.location.href = '/';">
      Retour
    </button>
  </div>
{#if form?.status == 200 }
  <p>{ form?.body.message }</p>
{:else}
  <form method="POST">
    <label for="name">Nom</label>
    <input type="text" id="name" name="name" required>

    <label for="address">Adresse</label>
    <input type="text" id="address" name="address" required>

    <button type="submit">Ajouter</button>
  </form>
{/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  label {
    margin-top: 10px;
  }

  input {
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
  }
</style>
