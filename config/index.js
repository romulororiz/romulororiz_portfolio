module.exports = {
	// Social Links & Email
	socialMedia: [
		{
			name: 'Github',
			url: 'https://github.com/romulororiz',
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/romulororiz',
		},
		{
			name: 'Linkedin',
			url: 'https://linkedin.com/in/romulororiz',
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/roriz_romulo',
		},
		{
			name: 'Email',
			url: 'mailto:romulonmroriz@gmail.com',
		},
	],

	// Navigation
	navLinks: [
		{
			name: 'About',
			url: '/#about',
		},
		// {
		// 	name: 'Experience',
		// 	url: '/#experience',
		// },
		{
			name: 'Tech Stack',
			url: '/#tech-stack',
		},
		{
			name: 'Projects',
			url: '/#projects',
		},
		{
			name: 'Contact',
			url: '/#contact',
		},
	],

	// About Section
	slides: [
		{
			src: '/assets/romuloProfile.webp',
			width: 550,
			height: 500,
			alt: 'profile picture',
		},
		{
			src: '/assets/rio.jpg',
			width: 550,
			height: 500,
			alt: 'rio de janeiro',
		},
		{
			src: '/assets/dublinxperugia.jpg',
			width: 550,
			height: 500,
			alt: 'dublin e perugia',
		},
		{
			src: '/assets/coding.jpg',
			width: 550,
			height: 500,
			alt: 'coding',
		},
		{
			src: '/assets/tibia.jpg',
			width: 550,
			height: 500,
			alt: 'Tibia RPG',
		},
		{
			src: '/assets/kart.webp',
			width: 550,
			height: 500,
			alt: 'Kart',
		},
	],

	about: [
		{
			text: "Hey there, my name is Rômulo. I'm a Brazilian/Italian in his late 20's living in Zurich, Switzerland. I haven't always been a developer and even though my passion for Web Development goes back a long way, I've only had the opportunity to take it more seriously on a personal level about three years ago.",
		},
		{
			text: "I'm originally from Rio de Janeiro, Brazil. There I studied law and when I was about to graduate, about 6 years ago, the opportunity to come to Europe presented itself to me. I'm very glad I took that chance and I have been since trying to make the most out of it!",
		},
		{
			text: 'Before settling in in Switzerland, I lived in Ireland and then Italy, respectively. These two places have taught me a lot and I have nothing but gratitude for the experiences I had during this period. Leaving Brazil was one of the hardest yet most amazing things I could have done.',
		},
		{
			text: 'I arrived in Zurich in 2019 and that was when I really started to dive into Web Development. In 2020 I attended an intensive Full-Stack course in Zurich, which helped me to broaden my horizons and gave me the ground knowledge to step into the Web Development world and to decide which direction to follow.',
		},
		{
			text: "People don't usually take me for a nerd, but I am. And I'm proud of it! In my free time I love playing some good ol' RPG. As a kid, that's how I fell in love with the english language in the first place.",
		},
		{
			text: "Balance is everything. I have been learning that day by day. It's so easy to get caught up in a project and literally forget about time. So I've found out that what works for me is to take a break to either go for a walk, take a dive in the lake, go to the cinema or play some video-games to come back with a fresher head.",
		},
	],

	// Skills icons
	icons: [
		{
			name: 'Git',
		},
		{
			name: 'Html5',
		},
		{
			name: 'Css3',
		},
		{
			name: 'Tailwind',
		},
		{
			name: 'Javascript',
		},
		{
			name: 'React',
		},
		{
			name: 'NextJs',
		},
		{
			name: 'NodeJs',
		},
		{
			name: 'Mongodb',
		},
		{
			name: 'Postman',
		},
		{
			name: 'Vercel',
		},
		{
			name: 'Heroku',
		},
		{
			name: 'Redux',
		},
		{
			name: 'GraphQL',
		},
		{
			name: 'Typescript',
		},
		{
			name: 'Express',
		},
	],

	projects: [
		{
			name: 'Movie Mingle',
			description:
				'A Web App finding the information you need about your favorite movies and tv shows - In Progress',
			url: 'https://movie-mingle.vercel.app/',
			repository: 'https://github.com/romulororiz/Movie-Mingle',
			image: '/assets/projects/movie-mingle.jpg',
			stack: [
				'NextJs',
				'·',
				'TailwindCss',
				'·',
				'Shadcn UI',
				'·',
				'TMDB API',
				'·',
				'Vercel',
			],
		},
		{
			name: 'Kanban Task Manager',
			description:
				'A Fullstack Kanban Application, in which users are able to authenticate, create boards and tasks, and manage them accordingly.',
			url: 'https://kanban-task-mngmt.herokuapp.com/',
			repository: 'https://github.com/romulororiz/Kanban-Task-Management',
			image: '/assets/projects/kanban-task-mngmt.jpg',
			stack: [
				'React',
				'·',
				'Sass',
				'·',
				'Express',
				'·',
				'MongoDB',
				'·',
				'Heroku',
			],
		},
		{
			name: 'Personal Portfolio',
			description:
				'A minimalistic portfolio website that gave so much joy in building it. It really translates to the screen what I think and love to do in Frontend Development.',
			url: 'https://romulororiz.com',
			repository: 'https://github.com/romulororiz/romulororiz_portfolio',
			image: '/assets/projects/portfolio.jpg',
			stack: ['NextJs', '·', 'Sass', '·', 'Vercel'],
		},
		{
			name: 'Spotify Connected',
			description:
				'A Web App that allows you to connect to your Spotify account and get information about your favorite artists and songs',
			url: 'https://spotify-connected.herokuapp.com/',
			repository: 'https://github.com/romulororiz/spotify-connected',
			image: '/assets/projects/spotify-connected.png',
			stack: [
				'React',
				'·',
				'Express',
				'·',
				'Apollo Client',
				'·',
				'Styled Components',
				'·',
				'Heroku',
			],
		},
		{
			name: 'Rick and Morty Characteropedia',
			description:
				'A Rick and Morty Hub for you to easily get the information you seek on your favorite characters of the best show ever made',
			url: 'https://rickandmorty-characteropedia.herokuapp.com/',
			repository: 'https://github.com/romulororiz/rickandmorty-characteropedia',
			image: '/assets/projects/rickandmorty.png',
			stack: [
				'React ',
				'·',
				'Vanilla Css ',
				'·',
				'Rick and Morty API ',
				'·',
				'GraphQL',
				'·',
				'Heroku',
			],
		},
	],
};
