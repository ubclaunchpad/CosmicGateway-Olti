<script lang="ts">
	import MainPage from '$lib/components/layouts/MainPage.svelte';
	import { onMount } from 'svelte';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import Icon from '$lib/components/general/Icon.svelte';
	import {
		ListIcon,
		GridIcon,
		OrderIcon,
		SettingsIcon,
		VerticalDotsIcon
	} from '$lib/components/general/icons';
	import ApplyModal from '$lib/components/projects/ApplyModal.svelte';
	let projects = [];
	let showApplyModal = false;
	const fetchProjects = async () => {
		// const res = await fetch(`${PUBLIC_PROJECT_API_URI}/projects`);
		// const data = (await res.json());
		projects = [
			{
				title: 'Project 1',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
				start_date: '',
				end_date: '',
				status: 'In Development',
				team_size: 5,
				resources: [
					{
						type: 'Github',
						link: 'https://github.com'
					},
					{
						type: 'Website',
						link: 'https://google.com'
					}
				]
			},
			{
				title: 'Project rwgwglknmlkn1',
				description:
					'Lorem eflkemlknipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
				start_date: '',
				end_date: '',
				status: 'In Development',
				team_size: 5,
				resources: [
					{
						type: 'Github',
						link: 'https://github.com'
					},
					{
						type: 'Figma',
						link: 'https://figma.com'
					}
				]
			}
		];
	};

	onMount(async () => {
		await fetchProjects();
	});
</script>

<MainPage>
	<section slot="main" class="content">
		<div class="topbar header">
			<h2>Launchpad Projects</h2>
		</div>

		<div class="welcome-grid">
			<div class="welcome">
				<div class="title">
					<h3>Student Opportunities</h3>
				</div>
				<p>
					Launch Pad is a platform for students to work on projects that they are passionate about.
					Students can submit their own project ideas or join existing projects. Launch Pad is a
					great way to gain experience and build your portfolio.
				</p>
				<div class="refs">
					<a href="/docs" target="_blank">
						<p>See docs for more info and recruiting</p>
					</a>
				</div>
			</div>

			<div class="welcome">
				<div class="title">
					<h3>Join Us</h3>
				</div>
				<p>
					Launchpad has partnered with various companies to provide perks to students. Perks include
					free software, discounts, and more. Perks are available to all students who join a project
					on Launchpad.
				</p>
				<div class="refs">
					<button on:click={() => (showApplyModal = true)}> Apply </button>
				</div>
			</div>
		</div>

		<div class="header-section">
			<div class="title circle">
				<div>
					<h3>This Year's Projects</h3>
				</div>
			</div>
			<!--			<div class="header-buttons">-->
			<!--				<button disabled>-->
			<!--					<Icon>-->
			<!--						<GridIcon />-->
			<!--					</Icon>-->
			<!--				</button>-->
			<!--				<button disabled>-->
			<!--					<Icon>-->
			<!--						<ListIcon />-->
			<!--					</Icon>-->
			<!--				</button>-->
			<!--			</div>-->
			<!--			<div class="header-buttons">-->
			<!--				<button>-->
			<!--					<Icon>-->
			<!--						<SettingsIcon />-->
			<!--					</Icon>-->
			<!--				</button>-->
			<!--				<button-->
			<!--					><Icon>-->
			<!--						<OrderIcon />-->
			<!--					</Icon>-->
			<!--				</button>-->
			<!--				<button>-->
			<!--					<Icon>-->
			<!--						<VerticalDotsIcon />-->
			<!--					</Icon>-->
			<!--				</button>-->
			<!--			</div>-->
		</div>

		<div class="projects">
			{#if projects.length !== 0}
				{#each projects as project}
					<ProjectCard {project} />
					<ProjectCard {project} />
					<ProjectCard {project} />
					<ProjectCard {project} />
				{/each}
			{/if}
		</div>
	</section>
</MainPage>

<ApplyModal
	isOpen={showApplyModal}
	on:modalevent={(e) => {
		showApplyModal = false;
	}}
/>

<style lang="scss">
	.title {
		display: flex;
		column-gap: 0.5rem;
		align-items: center;
		h3 {
			font-size: 1rem;
		}
	}

	.header-section {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		align-items: center;
		width: 100%;
		column-gap: 2rem;

		.title {
			padding: 2rem;
			width: 300px;
			height: 5rem;
		}

		.circle {
			:global(svg) {
				top: 0;
				left: 0;
				position: absolute;
				width: 180%;
				transform: translate(-20%, -45%);
			}
		}

		.title > div {
			position: relative;
			width: fit-content;
			h3 {
				width: fit-content;
				font-size: 1.3rem;
			}
		}

		.title {
			display: flex;
			column-gap: 0.5rem;
			align-items: center;
			flex: 1;
		}
		.header-buttons {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			width: fit-content;
			column-gap: 5px;

			button {
				padding: 0.4rem;
				border-radius: 10px;
				transition: all 0.2s ease-in-out;
				background-color: var(--color-bg-1);
				:hover {
					background-color: var(--color-bg-0);
				}
				img {
					width: 20px;
				}
			}
		}
	}
	.content {
		position: relative;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;

		h1 {
			font-size: 1.4rem;
		}
		flex-direction: column;
		height: 100%;
		flex: 1;
		width: 100%;
		overflow: scroll;
	}

	.main {
		width: 100%;
	}
	section {
		justify-content: space-between;
		flex-direction: column;
		display: flex;
		row-gap: 0.5rem;
		padding-top: 1rem;
		h2 {
			font-size: 1.3rem;
			font-weight: 600;
			color: var(--color-text-1);
		}
		flex: 1;
		width: 100%;
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: flex-start;
		padding: 0rem 0;
		gap: 0.2rem;
		font-size: 0.7rem;
		flex-wrap: wrap;
		> button {
			padding: 0.3rem;
			border-radius: 4px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	.projects {
		padding: 1rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
		width: 100%;
		gap: 0.5rem;
	}

	.topbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		row-gap: 10px;
		padding: 0rem 0 10px;
		h3 {
			font-size: 1rem;
			font-weight: 600;
			color: var(--color-text-1);
			width: fit-content;
		}
	}

	.header {
		&.topbar {
			border-bottom: 1px solid var(--color-bg-1);
		}
		&.wrapper {
			justify-content: flex-start;
			padding-bottom: 1rem;

			button {
				background-color: var(--color-bg-1);
				padding: 0.5rem;
				border-radius: 0.1rem;
				column-gap: 0.5rem;

				img {
					width: 18px;
				}
			}
		}
	}

	main {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		height: 100%;
		height: 100svh;
		overflow: hidden;
		background: linear-gradient(
			90deg,
			var(--color-bg-primary-faded) 0%,
			var(--color-bg-primary-faded) 100%
		);
		padding: 0.5rem;
		.page {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			width: 100%;
			height: 100%;
			overflow: hidden;
			gap: 1rem;
			p {
				font-size: 0.8rem;
				font-weight: 400;
			}
		}
	}

	.welcome-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		width: 100%;
		gap: 1rem;
		padding: 1rem 0;
	}
	.welcome {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		.refs {
			display: flex;
			flex: 1;
			height: 100%;
			flex-direction: column;
			width: 100%;
			align-items: flex-end;
			justify-content: flex-end;
			row-gap: 1rem;

			a {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				background-color: transparent;
				column-gap: 0.5rem;
				padding: 0 0 0.3rem;
				text-decoration: none;
				border-bottom: 1px solid var(--color-text-0);
				transition: all 0.2s ease-in-out;

				img {
					width: 16px;
				}
				p {
					font-size: 0.8rem;
					font-weight: 500;
					color: var(--color-text-0);
				}
			}
		}

		&:nth-child(1) {
			background: linear-gradient(
				to bottom right,
				var(--color-bg-primary-faded),
				var(--color-bg-primary)
			);
		}

		&:nth-child(2) {
			background: linear-gradient(
				to top right,
				var(--color-bg-secondary-faded),
				var(--color-bg-secondary)
			);
		}

		&:nth-child(3) {
			background: linear-gradient(
				to top right,
				var(--color-bg-tertiary-faded),
				var(--color-bg-tertiary)
			);
		}

		gap: 1rem;

		border-radius: 10px;
		box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		> h1 {
			font-size: 1.5rem;
			font-weight: 600;
			color: var(--color-text-1);
		}
		> p {
			// max-width: 750px;
			padding: 1rem;
			font-size: 1rem;
			font-weight: 500;
			color: var(--color-text-0);
			z-index: 2;
		}
	}
</style>
