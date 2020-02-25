<script>
  import {  lsFin } from '../stores/_lsFinStore.js';
</script>

 <div>
    Private Client
    <button on:click={lsFin.setPrivate}>I'm a private Client.</button>
</div>