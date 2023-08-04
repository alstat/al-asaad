interface Skill {
	skill: string;
	percent: number;
}

export interface SkillsData {
	progLang: LangData;
	natLang: LangData;
}

interface LangData {
	label: string;
	data: Skill[];
}

export const progLangs: Skill[] = [
	{
		skill: 'Julia',
		percent: 100
	},
	{
		skill: 'R',
		percent: 100
	},
	{
		skill: 'Python',
		percent: 100
	},
	{
		skill: 'JS',
		percent: 90
	},
	{
		skill: 'TS',
		percent: 70
	},
	{
		skill: 'Svelte',
		percent: 60
	}
];

const natLangs: Skill[] = [
	{
		skill: 'Tagalog',
		percent: 100
	},
	{
		skill: 'English',
		percent: 90
	},
	{
		skill: 'Arabic',
		percent: 20
	},
	{
		skill: 'Bisaya',
		percent: 90
	},
	{
		skill: 'Tausug',
		percent: 100
	},
	{
		skill: 'Sinama',
		percent: 100
	}
];

export const skillsData: SkillsData = {
	progLang: {
		label: 'Programming Languages',
		data: progLangs
	},
	natLang: {
		label: 'Natural Languages',
		data: natLangs
	}
};
