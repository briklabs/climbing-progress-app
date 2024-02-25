<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen items-center">
	<Header />

	<main class="flex-1 flex flex-col p-4 w-full max-w-4xl">
		<slot />
	</main>

	<footer class="flex flex-col justify-center items-center p-4">
		<p>Brik Labs LLC © 2024</p>
		<p>
			<a href="/terms"> Terms & Conditions </a>
		</p>
	</footer>
</div>
