<script>
	import BetaTesterApplicationCta from './BetaTesterApplicationCTA.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="px-4 py-8 sm:px-6 lg:px-8">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<div class=" md:col-span-2 p-8 md:p-12 lg:px-16 lg:py-24">
			<div class="mx-auto max-w-xl text-center space-y-4">
				<h2 class="text-2xl font-bold md:text-3xl">Get pre-release access</h2>

				<p class="hidden sm:mt-4 sm:block">
					By submitting this form, you are applying to be a beta tester for our application. We
					appreciate your interest!
				</p>
				<BetaTesterApplicationCta />
			</div>
		</div>

		<div class="md:grid-cols-1">
			<img src="/demo.gif" alt="Beta Blitz" class="w-80 object-cover rounded-2xl shadow-2xl" />
		</div>
	</div>
</section>
