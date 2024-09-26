import neofetch from "@utils/neofetch";
//eslint-disable-next-line

const compileResponseHTML = styleMap => {
	return styleMap
		.map(item => {
			return `<span class="${
				item.folder
					? `style3`
					: `${item.executable ? `style2` : `style1`}`
			}">${
				item.link
					? `<a target="_blank" href="${item.link}">${item.name}</a>`
					: `${item.name}`
			}</span>`;
		})
		.join("  ");
};

const getSpaces = commandList => {
	let defaultSpaces = "\t";
	let lengthList = commandList.map(item => {
		return item.name.length;
	});
	// console.log(commandList)
	let max = Math.max(...lengthList);
	let what = commandList.map(item => {
		return Array(max - item.name.length + 1).join(" ") + defaultSpaces;
	});
	return what;
};

const compileCommandHTML = commandList => {
	let defArgs = [
		{
			name: "ls",
			description: "lists directory content",
		},
		{
			name: "cd",
			description: "changes the current working directory",
		},
		{
			name: "clear",
			description: "clears the terminal screen",
		},
	];
	let argList = [
		...defArgs,
		...commandList.map(item => {
			let extra = " ";
			if (item.subPathStrict[0]) {
				extra += item.subPathStrict[1].name;
			}
			return {
				name: item.name[0] + extra,
				description: item.description,
			};
		}),
	];
	let spaceList = getSpaces(argList);
	let response = `These shell commands are defined internally.
Type <span class="style2">'help'</span> to see this list.\n\n`;
	argList.forEach((item, idx) => {
		let temp = `<span class="style2">${item.name}</span>${spaceList[idx]}${item.description}\n`;
		response += temp;
	});
	return `${response}\nAnd more "hidden" commands...`;
};

let commandList = [
	{
		name: ["resume", "./resume", "resume.sh", "./resume.sh"],
		action: { RESUME: "" },
		response: "",
		subPathStrict: [false],
		description: "view my resume",
	},
	{
		name: ["whoami"],
		action: true,
		response: "Hi there! My name is Kevin Stephens, a graduate student about to graduate with an MSc in Computer Science from the University of London, Birkbeck. I am passionate about creative coding and proficient in React, with a strong background in fullstack development, frontend development, and various web technologies including Gatsby, CRA, and Next. I have experience in digital design, prototyping, and wireframing, and I am skilled in using tools like Adobe Creative Suite, VS Code, IntelliJ, and more. I have held roles such as Chief Innovation Officer at Building Sustainable Borders, where I led website revitalization and innovation strategy, and Creative Marketing Specialist at Lighthouse Publications, where I developed digital visual assets and managed social media platforms. I am eager to apply my diverse skill set to meaningful projects and make a positive impact in the tech industry. You can find more about my work on my website, kevinstephens.dev.",
		subPathStrict: [false],
		description:
			"displays my information",
	},
	{
		name: ["fetchme"],
		action: false,
		response: `<pre>${neofetch}</pre>`,
		subPathStrict: [false],
		description:
			"fetches my information in a cool way", 
	},
	{
		name: ["projects", "./projects", "projects.app", "./projects.app"],
		// action: { PROJECTS: "" },
		action: false,
		response: 'Page Under Development 🚧🔨 | Until then Visit: <a href="https://kevinstephens.notion.site/Portfolio-747b27d3451a4bbe99d4ca8b7e25aa32">"My Notion portfolio" to checkout my projects</a>',
		subPathStrict: [false],
		description: "checkout my projects",
	},
	{
		name: ["x", "twitter"],
		action: true,
		response: 'Visit: <a href="https://x.com/KevDevelops">X.com/KevDevelops</a>',
		subPathStrict: [false],
		description: "checkout my X (twitter) profile",
	  },
	  {
		name: ["github", "git",".github"],
		action: true,
		response: 'Visit: <a href="https://github.com/kvin-stphns">my github @kvin-stphns</a>',
		subPathStrict: [false],
		description: "checkout my github profile",
	  },
	  {
		name: ["linkedin"],
		action: true,
		response: 'Visit: <a href="https://www.linkedin.com/in/kvinstphns/">LinkedIn</a>',
		subPathStrict: [false],
		description: "checkout my linkedIn profile",
	  },
	{
		name: ["code"],
		action: true,
		response: "",
		subPathStrict: [true, { name: ".", response: "" }],
		description: "opens a VS code window for this website's source code",
	},
	// {
	// 	name: ["happiness"],
	// 	action: true,
	// 	response: "",
	// 	subPathStrict: [false],
	// 	description: '<span class="">close your Eyes</span>',
	// },
	{
		name: ["git"],
		action: true,
		response: "",
		subPathStrict: [true, { name: "log", response: "" }],
		description: "lists my github projects",
	},
	{
		name: ["help"],
		action: true,
		response: "",
		subPathStrict: [false],
		description: "displays detailed information about the commands",
	},
];

commandList = commandList.map(item => {
	if (item.name[0] === "help") {
		item.response = `<pre>${compileCommandHTML(commandList)}</pre>`;
	}
	return item;
});

const fileList = [
	{
		name: "whoami",
		link: "",
		folder: false,
		executable: true,
	},
	{
		name: "fetchme",
		link: "",
		folder: false,
		executable: true,
	},
	{
		name: "resume",
		link: "",
		folder: false,
		executable: true,
	},
	{
		name: "projects",
		link: "",
		folder: false,
		executable: true,
	},
	{
		name: "linkedin",
		link: "https://www.linkedin.com/in/kvinstphns/",
		folder: false,
		executable: true,
	},
	{
		name: "x",
		link: "https://x.com/KevDevelops",
		folder: false,
		executable: true,
	},
	{
		name: "github",
		link: "https://github.com/kvin-stphns",
		folder: false,
		executable: true,
	},
	{
		name: "src",
		link: "https://github.com/kvin-stphns/macos-portfolio",
		folder: false,
		executable: true,
	},
	{
		name: "code",
		link: "",
		folder: false,
		executable: true,
	},
];

const getCommandList = commandList => {
	let finalCommandList = {};
	commandList.forEach(item => {
		//eslint-disable-next-line
		let commandBuilder = {};
		item.name.forEach(elem => {
			let action = item.action
				? { [item.name[0].toUpperCase()]: "" }
				: null;
			let resp = item.response;
			commandBuilder = {
				[elem]: {
					validArgs: {
						_dir: {
							action: action,
							response: resp,
						},
						default: {
							action: action,
							response: resp,
						},
					},
				},
			};
			if (item.subPathStrict[0]) {
				commandBuilder[elem].validArgs[item.subPathStrict[1].name] = {
					action: action,
					response: item.subPathStrict[1].response,
				};
			}
			finalCommandList = { ...commandBuilder, ...finalCommandList };
		});
	});
	// console.log(finalCommandList)
	return finalCommandList;
};

const getArgListCd = fileList => {
	let defArgs = {
		_dir: {
			action: null,
			response: "",
		},
		default: {
			action: null,
			response: "cd: cannot access %arg%: Permission Denied",
		},
		"~": {
			action: null,
			response: "",
		},
	};
	let argList = {};
	fileList.forEach(item => {
		argList[item.name] = {
			action: item.folder ? { PATH: item.link } : null,
			response: item.folder ? "" : "zsh: cd: %arg%: Not a directory",
		};
	});
	Object.keys(defArgs).forEach(item => {
		argList[item] = defArgs[item];
	});
	return argList;
};

const commands = {
	ls: {
		validArgs: {
			"/": {
				action: null,
				response:
					"ls: cannot access System Volume Information: Permission Denied",
			},
			_dir: {
				action: null,
				response: compileResponseHTML(fileList),
			},
			default: {
				action: null,
				response: "ls: cannot access %arg%: Permission Denied",
			},
		},
	},
	cd: {
		validArgs: getArgListCd(fileList),
	},
	...getCommandList(commandList),
	src: {
		validArgs: {
			_dir: {
				action: { PATH: "https://github.com/kvin-stphns/macos-portfolio" },
				response: "Opening source code repository...",
			},
			default: {
				action: { PATH: "https://github.com/kvin-stphns/macos-portfolio" },
				response: "Opening source code repository...",
			},
		},
	},
};

export default commands;
