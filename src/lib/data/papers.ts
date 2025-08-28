export type KeysOfUnion<T> = T extends T ? keyof T : never;

export interface Thesis {
	type: string;
	author: string[];
	year: number;
	title: string;
	publisher: string;
	href: string;
	application: string;
}
// export const thesisKeys: (keyof Thesis)[] = [
//     "type", "author", "year", "title",
//     "publisher", "href", "application"
// ]

export interface Conference {
	type: string;
	author: string[];
	year: number;
	title: string;
	proceeding: string;
	address: string;
	href: string;
	application: string;
	pages?: string;
	publisher?: string;
}
// export const conferenceKeys: (keyof Conference)[] = [
//     "type", "author", "year", "title",
//     "proceeding", "address", "href",
//     "application", "pages", "publisher"
// ]

export interface Journal {
	type: string;
	author: string[];
	year: number;
	title: string;
	journal: string;
	issue: string;
	pages: string;
	doi: string;
	href: string;
	application: string;
}

// export const journalKeys: (keyof Journal)[] = [
//     "type", "author", "year", "title",
//     "journal", "issue", "pages",
//     "doi", "href", "application"
// ]

export type Paper = Thesis | Conference | Journal;
export type PaperKeys = KeysOfUnion<Paper>;
// export const paperKeys: (KeysOfUnion<Paper>)[] = [
//     "type", "author", "year", "title",
//     "journal", "issue", "pages",
//     "doi", "href", "application",
//     "publisher", "proceeding", "address"
// ];

export let papers: Paper[];
papers = [
	{
		type: 'thesis',
		author: ['Asaad, A.-A. B.'],
		year: 2025,
		title: "Text Analytics of the Qur'ān",
		publisher: "Master's Thesis",
		href: 'https://drive.google.com/file/d/17wyCGO_5YqfEAWpSnmsod8bk01ewfS2p/view',
		application: '☪️'
	},
	{
		type: 'thesis',
		author: ['Asaad, A.-A. B.'],
		year: 2017,
		title:
			'Bayesian Autoregressive Distributed Lag via Stochastic Gradient Hamiltonian Monte Carlo',
		publisher: "Master's Thesis",
		href: 'https://drive.google.com/file/d/13656F1ymJVU7rgIsv4t57ygcNI1D7wXP/view',
		application: '📈'
	},
	{
		type: 'thesis',
		author: ['Asaad, A.-A. B.'],
		year: 2013,
		title: 'Seasonal space-time autoregressive integrated moving average modeling',
		publisher: 'Undergraduate Thesis',
		href: 'https://drive.google.com/file/d/1yTmD-QgbEoZGOvNtvjLNzaYA5cj7uMAh/view',
		application: '🌧️'
	},
	{
		type: 'journal',
		author: ['Asaad, A.-A. B.'],
		year: 2023,
		title:
			'Multi-step forecasting of the Philippine storm frequencies using Poisson neural network',
		journal: 'Theor Appl Climatol',
		issue: '152',
		pages: '293-305',
		doi: '10.1007/s00704-023-04394-4',
		href: 'https://rdcu.be/c6olI',
		application: '🌀'
	},
	{
		type: 'journal',
		author: ['Asaad, A.-A. B.'],
		year: 2022,
		title: 'Circular characteristics of the philippine storm tracks',
		journal: 'Spatial Information Research',
		issue: '30(1)',
		pages: '143-153',
		doi: '10.1007/s41324-021-00415-4',
		href: 'https://rdcu.be/cztsX',
		application: '🌀'
	},
	{
		type: 'journal',
		author: ['Asaad, A.-A. B.', 'Salvacion, A.R.', 'Yen, B.T.'],
		year: 2022,
		title: 'ALUES: R package for Agricultural Land Use Evaluation System',
		journal: 'Journal of Open Source Software',
		issue: '7(73)',
		pages: '4228',
		doi: '10.21105/joss.04228',
		href: 'https://joss.theoj.org/papers/10.21105/joss.04228',
		application: '🌾'
	},
	{
		type: 'conference',
		author: ['Asaad, A.-A. B.'],
		year: 2022,
		title: 'Bayesian log-linear Poisson Autoregressive Model',
		proceeding: '15th National Convention on Statistics',
		address: 'Crowne Plaza Manila Galleria, Quezon City, Philippines',
		href: 'https://www.researchgate.net/publication/380818352_Bayesian_Log-Linear_Poisson_Autoregressive_Model',
		application: '🌀'
	},
	{
		type: 'conference',
		author: ['Asaad, A.-A. B.', 'Morales, M.L.R.'],
		year: 2022,
		title: 'On the rolling forecast of the LightGBM for multi-step forecasting',
		proceeding: '15th National Convention on Statistics',
		address: 'Crowne Plaza Manila Galleria, Quezon City, Philippines',
		href: 'https://www.researchgate.net/publication/380818619_On_the_rolling_forecasts_of_the_LightGBM_for_multi-step_forecasting',
		application: '📈'
	},
	{
		type: 'conference',
		author: ['Asaad, A.-A. B.'],
		year: 2021,
		title: 'QuranTree.jl: A Julia Package for Quranic Arabic Corpus',
		proceeding: 'Proceedings of the Sixth Arabic Natural Language Processing Workshop',
		address: 'Kyiv, Ukraine (Virtual)',
		href: 'https://aclanthology.org/2021.wanlp-1.22/',
		application: '☪️',
		pages: '208-212',
		publisher: 'Association for Computational Linguistic'
	},
	{
		type: 'conference',
		author: ['Asaad, A.-A. B.', 'Magadia, J.C.'],
		year: 2019,
		title: 'Stochastic Gradient Hamiltonian Monte Carlo on Bayesian Time Series Modeling',
		proceeding: '14th National Convention on Statistics',
		address: 'Crowne Plaza Manila Galleria, Quezon City, Philippines',
		href: 'https://www.researchgate.net/publication/380818508_Stochastic_Gradient_Hamiltonian_Monte_Carlo_on_Bayesian_Time_Series_Modeling',
		application: '📈'
	},
	{
		type: 'journal',
		author: [
			'Asaad, C.O.',
			'Caraos, G.L.',
			'Robles, G.J.M.',
			'Asa, A.D.D.C.',
			'Cobar, M.L.C.',
			'Asaad, A.-A. B.'
		],
		year: 2016,
		title:
			'Enhancing Cytogenetic Biological Dosimetry Capabilities of the Philippines for Nuclear Incident Preparedness',
		journal: 'Genome Integr',
		issue: '7(4)',
		pages: '143-153',
		doi: '10.4103/2041-9414.197163',
		href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5292908/',
		application: '🧬'
	},
	{
		type: 'conference',
		author: [
			'Mapa, S.C.D.',
			'Del Prado, D.G.L.',
			'Castillo, P.G.S.',
			'Poliquit, I.A.R.',
			'Asaad, A.-A. B.'
		],
		year: 2016,
		title: 'Enhancement of the Composite Leading Economic Indicator System of the Philippines',
		proceeding: '13th National Convention on Statistics',
		address: 'Edsa Shangri-La Hotel, Mandaluyong City, Philippines',
		href: 'https://psa.gov.ph/sites/default/files/Session%204-1%20Enhancement%20of%20the%20Composite%20Leading%20Economic%20Indicator%20System%20of%20the%20Philippines.pdf',
		application: '📈'
	}
];
