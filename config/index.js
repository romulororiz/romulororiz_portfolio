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
			url: 'https://twitter.com/romulororiz',
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
			src: '/assets/romulo.jpg',
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
			src: '/assets/post.jpg',
			width: 550,
			height: 500,
			alt: '',
		},
		{
			src: '/assets/tibia.jpg',
			width: 550,
			height: 500,
			alt: '',
		},
		{
			src: '/assets/kart.jpeg',
			width: 550,
			height: 500,
			alt: '',
		},
	],

	about: [
		{
			text: "Hello there, I'm Rômulo, a Brazilian/Italian in his late 20's living in Zurich, Switzerland. I haven't always been a developer and even tough my passion for Web Development goes back a long way, I have only had the opportunity to take it more seriously on a personal level about three years ago.",
		},
		{
			text: "I come originally from Rio de Janeiro, Brazil. There I studied law and when I was about to graduate about 6 years go, the opportunity to come to Europe presented itself to me in the form of an Italian passport, due to my Great-Grandfather's roots. Thanks a lot Grandpa!",
		},
		{
			text: 'Before settling in Switzerland, I lived in Ireland and then Italy, respectively. Two places that taught me a lot and I have nothing but gratitude for the experiences I had during this period. Leaving Brazil was one of the hardest yet most amazing things I could ever have done.',
		},
		{
			text: 'I arrived in Zurich in 2019 and that was when I really started to dive into Web Development. In 2020 I attended an intensive Full-Stack course in Zurich, which helped me to broaden my horizons and gave me the ground basis to step into the Web Development world and to know which direction to follow.',
		},
		{
			text: "Since then, I have reached the German B2.2 level and have worked at different places, having Die Post as my last and current employer. Parallel to my current job, I've been learning more about new technologies every day as well as designing and developing websites as a Freelancer in order to bring more ideas to life, little by little.",
		},
		{
			text: "People don't usually take me for a nerd, but I am. And I'm proud of it! In my free time I love playing some good ol' RPG. As a kid, that's how I fell in love with the english language in the first place.",
		},
		{
			text: "Balance is everything. I have been learning that day by day. It's so easy to get caught with a project and forget about time. So I've found out that what works for me is to take a break to either go for a walk, take a dive in the lake, go to the cinema (I love it) or play some video-games to come back with a fresh head.",
		},
	],

	// Skills icons
	icons: [
		{
			name: 'Git',
			percentage: '70%',
		},
		{
			name: 'Html5',
			percentage: '90%',
		},
		{
			name: 'Css3',
			percentage: '85%',
		},
		{
			name: 'Sass',
			percentage: '80%',
		},
		{
			name: 'Styled Components',
			percentage: '65%',
		},
		{
			name: 'Tailwind',
			percentage: '80%',
		},
		{
			name: 'Javascript',
			percentage: '75%',
		},
		{
			name: 'React',
			percentage: '85%',
		},
		{
			name: 'NextJs',
			percentage: '85%',
		},
		{
			name: 'NodeJs',
			percentage: '70%',
		},
		{
			name: 'Mongodb',
			percentage: '75%',
		},
		{
			name: 'Postman',
			percentage: '90%',
		},
		{
			name: 'Vercel',
			percentage: '85%',
		},
		{
			name: 'Heroku',
			percentage: '65%',
		},
		{
			name: 'Redux',
			percentage: '75%',
		},
		{
			name: 'Express',
			percentage: '65%',
		},
	],

	projects: [
		{
			id: 1,
			name: 'A Vida + Rica',
			description:
				'A financial blog specialized in Investing, Personal Finances and Entrepreneurship. You can scroll over the recent posts, check the categories dropdown or easily search for a specific keyword in the search bar',
			url: 'https://avidamaisrica.com',
			repository: 'https://github.com/romulororiz/A-Vida-Mais-Rica-Frontend',
			image: '/assets/projects/avidamaisrica.jpg',
			stack: ['NextJs', 'Vanilla Css', 'Strapi CMS', 'Heroku', 'Vercel'],
		},
		{
			id: 2,
			name: 'Personal Portfolio',
			description:
				'A minimalistic portfolio website that gave so much joy in building it. It really translates to the screen what I think and love to do in Frontend Development.',
			url: 'https://romulororiz.com',
			repository: 'https://github.com/romulororiz/romulororiz_portfolio',
			image: '/assets/projects/portfolio.jpg',
			stack: ['NextJs', 'Sass', 'Vercel'],
		},
		{
			id: 3,
			name: 'Rick and Morty Characteropedia',
			description:
				'A Rick and Morty Hub for you to easily get the information you seek on your favorite characters of the best show ever made - In progress.',
			url: '',
			repository: '',
			image: '/assets/projects/rickandmorty.jpg',
			stack: ['NextJs', 'Vanilla Css', 'Rick and Morty API', 'Vercel'],
		},
		{
			id: 4,
			name: 'Github Finder',
			description:
				'A React Application for searching and displaying Github user`s profiles and it`s repositories',
			url: 'https://github-finder-delta-two.vercel.app/',
			repository: 'https://github.com/romulororiz/Github-Finder',
			image: '/assets/projects/githubfinder.jpg',
			stack: ['React', 'Context API', 'Tailwind CSS', 'Vercel'],
		},
	],
};
