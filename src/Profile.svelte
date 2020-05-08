<script>
        export let displayName;
        export let photoURL;
</script>

<h3>Hi { displayName }!</h3>

<img src={ photoURL } alt="user avatar">

<style>

        img {
            width: 70%;
            overflow: hidden;
            clip-path: circle(95% at center);
            border-radius: 50%;
            display: block;
            margin: 0 auto;
        }

</style>
