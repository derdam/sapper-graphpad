
<script>
    import { count, lsFin } from '../stores/_lsFinStore.js';
    import PrivateClient from '../components/privateClient.svelte';
    import ProfessionalClient from '../components/professionalClient.svelte';
    import PrivateClientOptions from '../components/privateClientOptions.svelte';
</script>


<style>

  .classification {
   color:white;
  }
</style>

<div class="classification">
    <h3>Classification</h3>
    <p>{$count}</p>
    <p>Client type {$lsFin.clientType}</p>

    {#if $lsFin.clientType === undefined}
        <PrivateClient></PrivateClient>
        <ProfessionalClient></ProfessionalClient>
    {/if}

    {#if $lsFin.clientType === "Private Client"}
        <PrivateClientOptions></PrivateClientOptions>
        
    {/if}

</div>

