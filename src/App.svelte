<script>
  import Profile from './Profile.svelte';
  import Todos from './Todos.svelte';

  import { auth, googleProvider } from './firebase';
  import { authState } from 'rxfire/auth';

  let user;

  const unsubscribe = authState(auth).subscribe(u => user = u);

  function login() {
          auth.signInWithPopup(googleProvider);
  }
</script>

<section> 
        {#if user} 
                <Profile {...user} /> 
                <button on:click={ () => auth.signOut() }>Logout</button> 
                <hr> 
                <Todos uid={user.uid} /> 
        {:else} 
                <button on:click={login}> Sign in with Google </button> 
        {/if} 
</section>
        
<style>
	section {
		text-align: center;
    padding: 2em;
		max-width: 500px;
    margin: 1px auto;
    background-color: #d3d3d3;
    border: 2px solid black;
    border-radius: 25px;
	}

  button {
          margin-top: 20px;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
