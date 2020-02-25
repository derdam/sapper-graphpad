<script>
  import {  lsFin } from '../stores/_lsFinStore.js';


  
  let option = undefined;

  $: isProfessionalEligible = 
    option && option > 0


  function setProfessional() {
    lsFin.setProfessional();
    lsFin.setOption("professional");
  }

   function next() {
    lsFin.setOption("");
  }

</script>

 <div>
   Options

<label>
	<input type=radio bind:group={option} value={1}>
	One scoop
</label>

<label>
	<input type=radio bind:group={option} value={2}>
	Two scoops
</label>

<label>
	<input type=radio bind:group={option} value={0}>
	None of the above
</label>

 
    {#if isProfessionalEligible}
    <p>Eligible !</p>
      <button disabled={!isProfessionalEligible} on:click={setProfessional}>I request to be classified as a setProfessional Client.</button>
    {/if}

    {#if option ===0}
       <button  on:click={next}>I confirm i'm a private Client.</button>
      {/if}
  
</div>