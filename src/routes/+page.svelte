<script>
  export let data;
  
  let properties = data.properties;
</script>


<svelte:head>
  <title>Mes propriétés</title>
</svelte:head>

<main>
  <div id="title">
    <h1>Mes propriétés</h1>
    <button onclick="window.location.href = '/properties/new';">
      Ajouter une propriété
    </button>
  </div>
  <div id="properties">
    {#each properties as property}
      <div class="property-card">
        <div>
          <h2>{property.name}</h2>
          <p>{property.address}</p>
        </div>
        <button disabled>
          Access property
        </button>
      </div>
    {/each}
    <!-- {#each data as property}
      <div class="property-card">
        <div>
          <h2>{property.name}</h2>
          <p>{property.address}</p>
        </div>
        <button onclick="window.location.href = '/properties/{property.id}';">
          Access property
        </button>
      </div>
    {/each} -->
    <!-- <div class="property-card">
      <div>
        <h2>Property</h2>
        <p>123 main street, City, State</p>
      </div>
      <button>
        Access property
      </button>
    </div> -->
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  #properties {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  
  .property-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
  }

  .property-card button {
    width: 150px;
    height: 50px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
  }
</style>
