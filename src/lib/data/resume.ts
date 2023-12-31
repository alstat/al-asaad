import jnj from '$lib/images/jnj-logo.png';
import adi from '$lib/images/adi-logo.png';
import ubp from '$lib/images/ubp-logo.png';
import aev from '$lib/images/aev-logo.png';
import nm from '$lib/images/nm-logo.png';
import dg from '$lib/images/dg-logo.png';
import pgc from '$lib/images/pgc-logo.png';
import psa from '$lib/images/psa-logo.png';
import upd from '$lib/images/upd-logo.png';
import iit from '$lib/images/iit-logo.png';
import tcto from '$lib/images/tcto-logo.png';

interface WorkExperience {
	company: string;
	position: string[];
	dateRange: string | string[];
	address: string;
	logoAlt: string;
	href: string;
}

export const workLogos = [jnj, adi, ubp, aev, nm, dg, pgc, psa];

export const schoolLogos = [upd, upd, iit, tcto, tcto];

export const workExperiences: WorkExperience[] = [
	{
		company: 'Johnson & Johnson',
		position: ['Manager, Advanced Analytics'],
		dateRange: 'Mar 2023 - present',
		address: 'Parañaque City, Philippines',
		logoAlt: 'JnJ Logo',
		href: 'https://www.jnj.com/'
	},
	{
		company: 'Aboitiz Data Innovation',
		position: ['Manager, Senior Data Scientist', 'Assistant Manager, Senior Data Scientist'],
		dateRange: ['Jul 2022 - Mar 2023', 'Apr 2021 - Jul 2022'],
		address: 'Taguig City, Philippines',
		logoAlt: 'ADI Logo',
		href: 'https://aboitizdatainnovation.com/'
	},
	{
		company: 'UnionBank of the Philippines',
		position: ['Manager, Senior Data Scientist', 'Assistant Manager, Senior Data Scientist'],
		dateRange: ['Jul 2022 - Mar 2023', 'Apr 2020 - Jul 2022'],
		address: 'Pasig City, Philippines',
		logoAlt: 'UBP Logo',
		href: 'https://www.unionbankph.com/'
	},
	{
		company: 'Aboitiz Equity Ventures',
		position: ['Assistant Manager, Senior Data Scientist'],
		dateRange: 'Apr 2019 - Feb 2020',
		address: 'Taguig City, Philippines',
		logoAlt: 'AEV Logo',
		href: 'https://aboitiz.com/'
	},
	{
		company: 'NeuralMechanics, Inc.',
		position: ['Data Scientist'],
		dateRange: 'Jan 2018 - Jul 2019',
		address: 'Pasig City, Philippines',
		logoAlt: 'NM Logo',
		href: 'https://neuralmechanics.net/'
	},
	{
		company: 'DiGenomix, PTE. LTD.',
		position: ['Data Scientist'],
		dateRange: 'Jul 2017 - Dec 2017',
		address: 'Pasig City, Philippines',
		logoAlt: 'NM Logo',
		href: 'https://www.companies.sg/business/201724521Z/DIGENOMIX-PTE-LTD-'
	},
	{
		company: 'Philippine Genome Center',
		position: ['Research Associate'],
		dateRange: 'Jul 2016 - Jan 2017',
		address: 'Quezon City, Philippines',
		logoAlt: 'PGC Logo',
		href: 'https://pgc.up.edu.ph/'
	},
	{
		company: 'Philippine Statistics Authority',
		position: ['Statistical Specialist II'],
		dateRange: 'Jan 2016 - Jun 2017',
		address: 'Quezon City, Philippines',
		logoAlt: 'PSA Logo',
		href: 'https://psa.gov.ph/'
	}
];

interface School {
	degree: string;
	schoolYear: string;
	school: string;
	university: string;
	address: string;
	logoAlt: string;
	href: string;
	research?: string;
}

export const schools: School[] = [
	{
		degree: 'Master of Arts in Islamic Studies',
		schoolYear: 'Aug 2022 - present',
		school: 'Institute of Islamic Studies',
		university: 'University of the Philippines Diliman',
		address: 'Quezon City, Philippines',
		logoAlt: 'UPD Logo',
		href: 'https://iis.upd.edu.ph/',
		research: 'Arabic NLP, Islamicate Digital Humanities'
	},
	{
		degree: 'Master of Science in Statistics',
		schoolYear: 'Aug 2014 - Jun 2017',
		school: 'School of Statistics',
		university: 'University of the Philippines Diliman',
		address: 'Quezon City, Philippines',
		logoAlt: 'UPD Logo',
		href: 'http://www.stat.upd.edu.ph/',
		research: 'Stochastic Bayesian Inference'
	},
	{
		degree: 'Bachelor of Science in Statistics',
		schoolYear: 'Jun 2009 - Apr 2013',
		school: 'College of Science and Mathematics',
		university: 'Mindanao State University - Iligan Institute of Technology',
		address: 'Iligan City, Philippines',
		logoAlt: 'IIT Logo',
		href: 'https://www.msuiit.edu.ph/',
		research: 'Spatio-Temporal Models'
	},
	{
		degree: 'Secondary Diploma',
		schoolYear: 'Jun 2005 - Mar 2009',
		school: 'Preparatory High School',
		university: 'Mindanao State University - Tawi-Tawi College of Technology and Oceanography',
		address: 'Tawi-Tawi, Philippines',
		logoAlt: 'TCTO Logo',
		href: 'https://msutawi-tawi.edu.ph/'
	},
	{
		degree: 'Elementary Diploma',
		schoolYear: 'Jun 1999 - Mar 2005',
		school: 'Laboratory Elementary School',
		university: 'Mindanao State University - Tawi-Tawi College of Technology and Oceanography',
		address: 'Tawi-Tawi, Philippines',
		logoAlt: 'TCTO Logo',
		href: 'https://msutawi-tawi.edu.ph/'
	}
];
