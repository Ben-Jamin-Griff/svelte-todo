<script>
        import TodoItem from './TodoItem.svelte';
        import { db } from './firebase';
        import { collectionData } from 'rxfire/firestore';
        import { startWith } from 'rxjs/operators';

        export let uid;

        let text = 'task...';

        
        const query = db.collection('todo').where('uid', '==', uid);

//        const query = db.collection('todo').where('uid', '==', uid).orderBy('created');

        const todos = collectionData(query, 'id').pipe(startWith([]));

        function add() {
                db.collection('todo').add({ uid, text, complete: false, created: Date.now() });
                text = '';
        }

        function updateStatus(event) {
                const { id, newStatus } = event.detail;
                db.collection('todo').doc(id).update({ complete: newStatus });
        }

        function removeItem(event) {
                const { id } = event.detail;
                db.collection('todo').doc(id).delete();
        }
</script>

<style>

        input {
                display: block;
                margin: 0 auto;
        }
        button {
                margin: 20px auto;
        }
        ul {
                list-style-type: none;
        }

</style>


<ul>
        {#each $todos as todo}
                <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
        {/each}
</ul>

<input bind:value={text}>

<button on:click={add}>Add Task</button>
