<script lang="ts">
	export let digit:string;
</script>

<span class="single-digit">
	{#if digit == '.'}
		,
	{:else if digit == ' '}
		&nbsp;
	{:else}
		<span style="--value:{digit};" />
	{/if}
</span>

<style>
	.single-digit {
		line-height: 1em;
	}
	.single-digit {
		display: inline-flex;
	}
	.single-digit > * {
		height: 1em;
		display: inline-block;
		overflow-y: hidden;
	}
	.single-digit > *:before {
		position: relative;
		content: '0\A 1\A 2\A 3\A 4\A 5\A 6\A 7\A 8\A 9';
		white-space: pre;
		top: calc(var(--value) * -1em);
		text-align: center;
		transition: all 1s cubic-bezier(1, 0, 0, 1);
	}
</style>
