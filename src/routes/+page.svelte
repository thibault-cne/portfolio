<script lang="ts">
	// @ts-nocheck
	import { Motion } from 'svelte-motion';
	import Typewriter from 'svelte-typewriter';
	import emailjs from '@emailjs/browser';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	import { techs } from '$lib/constants/techs';

	const toastStore = getToastStore();
	const publicKey = `${import.meta.env.VITE_PUBLIC_KEY}`;
	const templateID = `${import.meta.env.VITE_TEMPLATE_ID}`;
	const serviceID = `${import.meta.env.VITE_SERVICE_ID}`;

	/**
	 * @param {{ target: string | HTMLFormElement; }} e
	 */
	function sendEmail(e: { target: string | HTMLFormElement }) {
		isSendEnabled = false;

		emailjs.sendForm(serviceID, templateID, e.target, publicKey).then(
			(result) => {
				const t: ToastSettings = {
					message: 'Your mail has been sent!',
					classes: 'toast-center toast-bottom w-64 mb-10',
					timeout: 5000
				};
				toastStore.trigger(t);
				isSendEnabled = true;
			},
			(error) => {
				const t: ToastSettings = {
					message: 'There has been an error sending your mail.',
					classes: 'toast-center alert-warning toast-bottom w-64 mb-10',
					timeout: 5000
				};
				toastStore.trigger(t);
				isSendEnabled = true;
			}
		);
	}

	let isSendEnabled = true;

	const variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -500 }
	};

	let i = 1;
	$: v = ['hidden', 'visible'][i];
</script>

<!-- This is the hero/home -->
<section
	id="home"
	class="h-screen w-full bg-brand bg-center bg-no-repeat bg-[length:105%_105%] flex py-28 justify-center items-center transition-all duration-75 sticky top-0"
>
	<div class="space-y-10 text-center">
		<h2 class="font-bold text-2xl md:text-4xl">Hi, I'm Thibault Cheneviere.</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
			<Motion initial="hidden" animate={v} {variants} let:motion>
				<img
					use:motion
					src="logo.jpg"
					alt="Thibault"
					class="rounded-full h-80 w-80 md:h-96 md:w-96 self-center"
				/>
			</Motion>
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2 bottom-0 heartbeat">
			<!-- Scroll buttons with arrows -->
			<a href="#about" class="btn btn-sm variant-ghost-surface h-12 w-12">
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</a>
		</div>
	</div>
</section>
<!-- About me section -->
<section
	id="about"
	class="w-full flex items-center bg-neutrals-900 py-28 relative z-10 xl:min-h-screen flex-col md:flex-row bg-slate-900"
	aria-label="About"
>
	<div class="flex justify-center space-x-2 absolute xl:bottom-32 bottom-10 heartbeat w-full z-10">
		<!-- Scroll buttons with arrows -->
		<a href="#tech" class="btn btn-sm variant-ghost-surface h-12 w-12">
			<div class="flex flex-col items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</a>
	</div>
	<img
		class="object-cover object-center w-full max-h-screen relative md:top-0 -top-28 right-0 md:w-1/2 md:h-full md:pr-10 xl:pr-0 md:absolute"
		loading="lazy"
		src="wp1.jpg"
		width="756"
		alt="placeholder"
		height="1008"
	/>
	<div class="mx-auto w-10/12 2xl:w-[80%] h-full">
		<div class="flex flex-col md:flex-row h-full w-full">
			<div class="basis-1/2 md:self-center">
				<div
					class="font-display font-bold text-brand lg:text-xl text-xl uppercase text-purple-400 mb-4"
				>
					About
				</div>
				<Typewriter mode="loop" interval={100}>
					<span class="text-4xl font-mono uppercase">Developer</span>
					<span class="text-4xl font-mono uppercase">Problem Solver</span>
					<span class="text-4xl font-mono uppercase">Explorer</span>
					<span class="text-4xl font-mono uppercase">Fast learner</span>
				</Typewriter>
				<p class="text-neutrals-50/60 leading-relaxed max-w-prose mt-4 text-slate-400">
					Hi, I'm Thibault Cheneviere, a passionate developer who loves crafting beautiful and
					efficient software. With years of experience in coding and a solid understanding of
					different programming languages and frameworks, I'm always eager to take on new challenges
					and learn from them. Whether I'm working on a complex backend architecture or a sleek
					frontend interface, my goal is to deliver top-notch solutions that exceed expectations.
					When I'm not coding, you can find me playing my favorite video games or doing sport. Let's
					connect and bring your ideas to life!
				</p>
				<!-- Insert a div on small devices for socials -->
				<div class="flex flex-row justify-center md:hidden mt-4">
					<a
						title="resume"
						href="thibault_cheneviere_resume.pdf"
						target="_blank"
						class="flex flex-col items-center justify-center m-4"
						download="thibault_cheneviere_resume.pdf"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="white"
							class="h-8 w-8"
							viewBox="0 0 16 16"
						>
							<path
								d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"
							/>
						</svg>
					</a>
					<a
						title="linkedin"
						href="https://www.linkedin.com/in/thibault-cne/"
						target="_blank"
						class="flex flex-col items-center justify-center m-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="white"
							class="h-8 w-8"
							aria-hidden="true"
							><path
								d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
							/></svg
						>
					</a>
					<a
						title="github"
						href="https://github.com/thibault-cne"
						target="_blank"
						class="flex flex-col items-center justify-center m-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="white"
							class="h-8 w-8"
							aria-hidden="true"
							><path
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
							/></svg
						>
					</a>
					<a
						title="mail"
						href="mailto:thibault.cheneviere@telecomnancy.net"
						target="_blank"
						class="flex flex-col items-center justify-center m-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="white"
							class="h-8 w-8"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Spacer -->
<section class="w-full z-10 relative h-2 py-28 bg-slate-100">
	<div class="mx-auto w-10/12 2xl:w-[80%] text-center">
		<div
			class="font-display font-bold text-brand lg:text-xl text-xl uppercase text-purple-800 mb-4"
		>
			Technologies used
		</div>
		<div class="font-display font-bold text-neutral-900 text-2xl md:text-4xl mb-8">What I use</div>
	</div>
</section>
<!-- Technologies section -->
<section
	id="tech"
	class="w-full flex items-center bg-neutrals-900 relative z-10 xl:min-h-screen min-h-[500px] flex-row bg-slate-900"
	aria-label="Technologies"
>
	<div class="flex justify-center space-x-2 absolute xl:bottom-32 bottom-10 heartbeat w-full z-10">
		<!-- Scroll buttons with arrows -->
		<a href="#projects" class="btn btn-sm variant-ghost-surface h-12 w-12">
			<div class="flex flex-col items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</a>
	</div>
	<div class="mx-auto w-10/12 2xl:w-[80%] h-full">
		<div class="flex flex-col md:flex-row h-full w-full justify-center">
			<!-- Add a cloud of technologies -->
			<div class="grid justify-center grid-cols-5">
				{#each techs as tech}
					<Motion whileHover={{ scale: 1.8 }} initial={{ borderRadius: 25 }} let:motion>
						<a
							title={tech.alt}
							use:motion
							href={tech.link}
							target="_blank"
							class="flex flex-col items-center justify-center m-2 md:m-4"
						>
							<img class="h-16 w-16" src={tech.src} alt={tech.alt} />
						</a>
					</Motion>
				{/each}
			</div>
		</div>
	</div>
</section>
<!-- Spacer -->
<section class="w-full z-10 relative h-2 py-28 bg-slate-100">
	<div class="mx-auto w-10/12 2xl:w-[80%] text-center">
		<div
			class="font-display font-bold text-brand lg:text-xl text-xl uppercase text-purple-800 mb-4"
		>
			My projects
		</div>
		<div class="font-display font-bold text-neutral-900 text-2xl md:text-4xl mb-8">
			What I've done
		</div>
	</div>
</section>
<!-- Projects section -->
<section
	id="projects"
	class="w-full flex items-center bg-neutrals-900 xl:pt-0 pt-16 pb-28 relative z-10 xl:min-h-screen flex-col md:flex-row bg-slate-900"
	aria-label="Projects"
>
	<div class="flex justify-center space-x-2 absolute xl:bottom-32 bottom-10 heartbeat w-full z-10">
		<!-- Scroll buttons with arrows -->
		<a href="#contact" class="btn btn-sm variant-ghost-surface h-12 w-12">
			<div class="flex flex-col items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</a>
	</div>

	<!-- Project list -->
	<div class="grid justify-items-center">
		<ul class="w-4/5 group/list">
			<li class="mb-12">
				<div
					class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
				>
					<div
						class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
					/>
					<div class="z-10 sm:order-2 sm:col-span-6">
						<h3>
							<a
								class="inline-flex items-baseline font-medium leading-tight text-primary-500 group/link text-base"
								href="https://github.com/thibault-cne/ogtiger"
								target="_blank"
								rel="noreferrer"
								aria-label="Build a Spotify Connected App"
							>
								<span
									class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
								/>
								<span>
									ARMv7 Tiger
									<span class="inline-block">
										compiler<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
											aria-hidden="true"
											><path
												fill-rule="evenodd"
												d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
												clip-rule="evenodd"
											/></svg
										>
									</span>
								</span>
							</a>
						</h3>
						<p class="mt-2 text-sm leading-normal">
							An ARMv7 Tiger compiler written in Golang. It was first developped in Java for a
							school projects. It was a 4 team project and you can find the Java source code <a
								href="https://github.com/ElFamos0/pcl">here</a
							>. I decided with one of my classmate to rebuild the project in Golang and try to
							enhance it.
						</p>
						<div class="flex flex-row">
							<a
								title="docker"
								href="https://www.docker.com/"
								target="_blank"
								class="flex flex-col items-center justify-center m-4"
							>
								<img class="h-12 w-12" src="https://skillicons.dev/icons?i=docker" alt="docker" />
							</a>
							<a
								title="golang"
								href="https://go.dev"
								target="_blank"
								class="flex flex-col items-center justify-center m-4"
							>
								<img class="h-12 w-12" src="https://skillicons.dev/icons?i=go" alt="golang" />
							</a>
						</div>
					</div>
					<img
						alt=""
						loading="lazy"
						width="200"
						height="48"
						decoding="async"
						data-nimg="1"
						class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
						style="color:transparent"
						src="ogtiger.png"
					/>
				</div>
			</li>
			<li class="mb-12">
				<div
					class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
				>
					<div
						class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
					/>
					<div class="z-10 sm:order-2 sm:col-span-6">
						<h3>
							<a
								class="inline-flex items-baseline font-medium leading-tight text-primary-500 group/link text-base"
								href="https://github.com/thibault-cne/find-the-cat"
								target="_blank"
								rel="noreferrer"
								aria-label="Build a Spotify Connected App"
							>
								<span
									class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
								/>
								<span>
									Find the
									<span class="inline-block">
										cat<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
											aria-hidden="true"
											><path
												fill-rule="evenodd"
												d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
												clip-rule="evenodd"
											/></svg
										>
									</span>
								</span>
							</a>
						</h3>
						<p class="mt-2 text-sm leading-normal">
							A find like function written in C. It was a school project made for learning linux
							file system but it is developped to work on windows too. It has github actions to test
							on push and works as a CLI with several options.
						</p>
						<div class="flex flex-row">
							<a
								title="c"
								href="https://www.cprogramming.com/"
								target="_blank"
								class="flex flex-col items-center justify-center m-4"
							>
								<img class="h-12 w-12" src="https://skillicons.dev/icons?i=c" alt="c" />
							</a>
							<a
								title="github"
								href="https://github.com/"
								target="_blank"
								class="flex flex-col items-center justify-center m-4"
							>
								<img class="h-12 w-12" src="https://skillicons.dev/icons?i=github" alt="c" />
							</a>
						</div>
					</div>
					<img
						alt=""
						loading="lazy"
						width="200"
						height="48"
						decoding="async"
						data-nimg="1"
						class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
						style="color:transparent"
						src="ftc.png"
					/>
				</div>
			</li>
			<li class="mb-12">
				<div
					class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
				>
					<div
						class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
					/>
					<div class="z-10 sm:order-2 sm:col-span-6">
						<h3>
							<a
								class="inline-flex items-baseline font-medium leading-tight text-primary-500 group/link text-base"
								href="https://github.com/thibault-cne/search"
								target="_blank"
								rel="noreferrer"
								aria-label="Build a Spotify Connected App"
							>
								<span
									class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
								/>
								<span class="inline-block">
									Search<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
										aria-hidden="true"
										><path
											fill-rule="evenodd"
											d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
											clip-rule="evenodd"
										/></svg
									>
								</span>
							</a>
						</h3>
						<p class="mt-2 text-sm leading-normal">
							An implementation of the find function written in Rust. This is a personnal project
							started to learn Rust. I'm still working on it and keep implementing new features.
						</p>
						<div class="flex flex-row">
							<a
								title="rust"
								href="https://www.rust-lang.org/fr"
								target="_blank"
								class="flex flex-col items-center justify-center m-4"
							>
								<img class="h-12 w-12" src="https://skillicons.dev/icons?i=rust" alt="rust" />
							</a>
						</div>
					</div>
					<img
						alt=""
						loading="lazy"
						width="200"
						height="48"
						decoding="async"
						data-nimg="1"
						class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
						style="color:transparent"
						src="search.png"
					/>
				</div>
			</li>
			<li class="mb-12">
				<div
					class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
				>
					<div
						class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
					/>
					<div class="z-10 sm:order-2 sm:col-span-6">
						<h3>
							<a
								class="inline-flex items-baseline font-medium leading-tight text-primary-500 group/link text-base"
								href="https://github.com/thibault-cne/the-maze"
								target="_blank"
								rel="noreferrer"
								aria-label="Build a Spotify Connected App"
							>
								<span
									class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
								/>
								<span>
									The
									<span class="inline-block">
										maze<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
											aria-hidden="true"
											><path
												fill-rule="evenodd"
												d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
												clip-rule="evenodd"
											/></svg
										>
									</span>
								</span>
							</a>
						</h3>
						<p class="mt-2 text-sm leading-normal">
							A web maze game. This is a web game written in Rust and Svelte. I'm still working on
							it to develop the multiplayer part of the game.
						</p>
						<div class="flex flex-row">
							<a
								title="rust"
								href="https://www.rust-lang.org/fr"
								target="_blank"
								class="flex flex-col items-center justify-center m-4"
							>
								<img class="h-12 w-12" src="https://skillicons.dev/icons?i=rust" alt="rust" />
							</a>
							<a
								title="svelte"
								href="https://svelte.dev/"
								target="_blank"
								class="flex flex-col items-center justify-center m-4"
							>
								<img class="h-12 w-12" src="https://skillicons.dev/icons?i=svelte" alt="svelte" />
							</a>
						</div>
					</div>
					<img
						alt="the-maze"
						loading="lazy"
						width="200"
						height="48"
						decoding="async"
						data-nimg="1"
						class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
						style="color:transparent"
						src="the-maze.png"
					/>
				</div>
			</li>
		</ul>
	</div>
</section>
<!-- Spacer -->
<section class="w-full z-10 relative h-2 py-28 bg-slate-100">
	<div class="mx-auto w-10/12 2xl:w-[80%] text-center">
		<div
			class="font-display font-bold text-brand lg:text-xl text-xl uppercase text-purple-800 mb-4"
		>
			Contact
		</div>
		<div class="font-display font-bold text-neutral-900 text-2xl md:text-4xl mb-8">
			How to contact me
		</div>
	</div>
</section>
<!-- Contact section -->
<section
	id="contact"
	class="w-full flex items-center bg-neutrals-900 pb-28 relative z-10 xl:min-h-screen flex-col md:flex-row bg-slate-900"
	aria-label="contact"
>
	<div class="mx-auto w-10/12 2xl:w-[80%] h-full">
		<div class="flex flex-col md:flex-row h-full w-full justify-center">
			<!-- I want 3 fields: name, email & message -->
			<div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-full">
				<form class="space-y-8" on:submit|preventDefault={sendEmail}>
					<div>
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>Your email</label
						>
						<input
							type="email"
							id="email"
							name="reply_to"
							class="textarea"
							placeholder="email@example.com"
							required
						/>
					</div>
					<div>
						<label
							for="subject"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label
						>
						<input
							type="text"
							id="subject"
							name="from_subject"
							class="textarea"
							placeholder="Title of your message"
							required
						/>
					</div>
					<div class="sm:col-span-2">
						<label
							for="message"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>Your message</label
						>
						<textarea
							id="message"
							name="message"
							rows="6"
							class="textarea"
							placeholder="Your message here..."
						/>
					</div>
					<button
						type="submit"
						disabled={!isSendEnabled}
						class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>Send message</button
					>
				</form>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="footer footer-center p-4 bg-slate-700 text-base-content">
	<div>
		<p>Fait avec ♥ par Thibault.</p>
	</div>
</footer>

<style lang="postcss">
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none !important;
		cursor: pointer;
	}

	:root {
		--cursor-color: #fff;
	}

	.heartbeat {
		-webkit-animation: heartbeat 1.5s ease-in-out infinite both;
		animation: heartbeat 1.5s ease-in-out infinite both;
	}
	@-webkit-keyframes heartbeat {
		from {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: center center;
			transform-origin: center center;
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		10% {
			-webkit-transform: scale(0.91);
			transform: scale(0.91);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		17% {
			-webkit-transform: scale(0.98);
			transform: scale(0.98);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		33% {
			-webkit-transform: scale(0.87);
			transform: scale(0.87);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		45% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
	}
	@keyframes heartbeat {
		from {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-transform-origin: center center;
			transform-origin: center center;
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		10% {
			-webkit-transform: scale(0.91);
			transform: scale(0.91);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		17% {
			-webkit-transform: scale(0.98);
			transform: scale(0.98);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
		33% {
			-webkit-transform: scale(0.87);
			transform: scale(0.87);
			-webkit-animation-timing-function: ease-in;
			animation-timing-function: ease-in;
		}
		45% {
			-webkit-transform: scale(1);
			transform: scale(1);
			-webkit-animation-timing-function: ease-out;
			animation-timing-function: ease-out;
		}
	}
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
