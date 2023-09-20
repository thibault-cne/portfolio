<script lang="ts">
	import { onMount } from 'svelte';
	import { splitIntoDigits } from '$lib/utils/splitIntoDigits';
	import Digit from '$lib/components/digit.svelte';

	let finishDate = 'Jul 22, 2050 16:00:00';
	let UTC = new Date(finishDate).getTime();
	let days: number;
	let hours: number;
	let minutes: number;
	let seconds: number;

	function update() {
		let now = new Date().getTime();
		let distance = UTC - now;
		days = Math.floor(distance / (1000 * 60 * 60 * 24));
		hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);
	}

	onMount(() => {
		update();
		setInterval(update, 1000);
	});
</script>

<div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" id="contact">
	{#if days < 0}
		<div class="text-center text-4xl font-bold text-neutral-content mb-10">
			Go open it !
		</div>
	{/if}
	{#if days >= 0}
		<div class="text-center text-4xl font-bold text-neutral-content mb-10">Open in...</div>
		<div class="grid grid-flow-col gap-5 bg-tertiary-800 rounded-box p-2 text-center auto-cols-max">
			<div class="flex flex-col p-2 text-neutral-content">
				<span class="font-mono text-5xl">
					{#each splitIntoDigits(days, 0) as d}
						<Digit digit={d} />
					{/each}
				</span>
				days
			</div>
			<div class="flex flex-col p-2 text-neutral-content">
				<span class="font-mono text-5xl">
					{#each splitIntoDigits(hours, 0, 2) as d}
						<Digit digit={d} />
					{/each}
				</span>
				hours
			</div>
			<div class="flex flex-col p-2 text-neutral-content">
				<span class="font-mono text-5xl">
					{#each splitIntoDigits(minutes, 0, 2) as d}
						<Digit digit={d} />
					{/each}
				</span>
				minutes
			</div>
			<div class="flex flex-col p-2 text-neutral-content">
				<span class="font-mono text-5xl">
					{#each splitIntoDigits(seconds, 0, 2) as d}
						<Digit digit={d} />
					{/each}
				</span>
				seconds
			</div>
		</div>
	{/if}
</div>
