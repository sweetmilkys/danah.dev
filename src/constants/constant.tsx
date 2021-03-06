import { LABEL } from './ga';

import {
  ReactJs,
  Gatsby,
  Webpack,
  Javascript,
  Typescript,
  Html5,
  Css3,
  StyledComponents,
  NodeDotJs,
  Jest,
  Jira,
  Figma,
  Nginx,
  Trello,
  Stripe,
  Notion,
  Graphql,
  Postman,
  Mariadb,
  Github as Git,
  Cypress,
  NextDotJs,
  Firebase,
  Webstorm,
  Markdown,
  Storybook,
  Mailchimp,
  Gitkraken,
  Bitbucket,
  Visualstudiocode,
  Bit,
  Sentry,
  MaterialUi,
  Redux,
} from '@icons-pack/react-simple-icons';
import React from 'react';
import { Github, LinkedIn, StackShare } from 'static/svgs';
import { IconProps } from 'types/styled';

import * as Routes from 'constants/routes';

export const LINKS = {
  github: {
    icon: Github,
    url: 'https://github.com/sweetmilkys',
    label: LABEL.about.profile.github,
  },
  linkedIn: {
    icon: LinkedIn,
    url: 'https://www.linkedin.com/in/danah-kim-b36490170',
    label: LABEL.about.profile.linkedin,
  },
  stackShare: {
    icon: StackShare,
    url: 'https://stackshare.io/danah',
    label: LABEL.about.profile.stackShare,
  },
};

export const MENU = {
  overview: {
    name: 'Overview',
    to: Routes.HOME,
    label: LABEL.menu.overview,
  },
  about: {
    name: 'About',
    to: Routes.ABOUT,
    label: LABEL.menu.about,
  },
  mail: {
    name: 'E-Mail',
    to: Routes.EMAIL,
    label: LABEL.menu.email,
  },
};

export const SKILLS = {
  occupational: {
    javascript: {
      color: '#F7DF1E',
      icon(params: IconProps) {
        return <Javascript {...params} />;
      },
    },
    typescript: {
      icon(params: IconProps) {
        return <Typescript {...params} />;
      },
      color: '#007ACC',
    },
    react: {
      icon(params: IconProps) {
        return <ReactJs {...params} />;
      },
      color: '#61DAFB',
    },
    nodeJs: {
      icon(params: IconProps) {
        return <NodeDotJs {...params} />;
      },
      color: '#339933',
    },
  },
  frontEnd: {
    html: {
      icon(params: IconProps) {
        return <Html5 {...params} />;
      },
      color: '#E34F26',
    },
    css: {
      icon(params: IconProps) {
        return <Css3 {...params} />;
      },
      color: '#1572B6',
    },
    markdown: {
      icon(params: IconProps) {
        return <Markdown {...params} />;
      },
      color: '#000000',
    },
    gatsby: {
      icon(params: IconProps) {
        return <Gatsby {...params} />;
      },
      color: '#663399',
    },
    redux: {
      icon(params: IconProps) {
        return <Redux {...params} />;
      },
      color: '#764ABC',
    },
    styledComponent: {
      icon(params: IconProps) {
        return <StyledComponents {...params} />;
      },
      color: '#DB7093',
    },
    webpack: {
      icon(params: IconProps) {
        return <Webpack {...params} />;
      },
      color: '#8DD6F9',
    },
    nextJs: {
      icon(params: IconProps) {
        return <NextDotJs {...params} />;
      },
      color: '#000000',
    },
  },
  backEnd: {
    mariadb: {
      icon(params: IconProps) {
        return <Mariadb {...params} />;
      },
      color: '#003545',
    },
    graphQl: {
      icon(params: IconProps) {
        return <Graphql {...params} />;
      },
      color: '#E10098',
    },
    nginx: {
      icon(params: IconProps) {
        return <Nginx {...params} />;
      },
      color: '#269539',
    },
  },
  tools: {
    github: {
      icon(params: IconProps) {
        return <Git {...params} />;
      },
      color: '#181717',
    },
    bitbucket: {
      icon(params: IconProps) {
        return <Bitbucket {...params} />;
      },
      color: '#0052CC',
    },
    visualStudioCode: {
      icon(params: IconProps) {
        return <Visualstudiocode {...params} />;
      },
      color: '#007ACC',
    },
    webstorm: {
      icon(params: IconProps) {
        return <Webstorm {...params} />;
      },
      color: '#000000',
    },
    gitkraken: {
      icon(params: IconProps) {
        return <Gitkraken {...params} />;
      },
      color: '#179287',
    },
    jira: {
      icon(params: IconProps) {
        return <Jira {...params} />;
      },
      color: '#0052CC',
    },
    figma: {
      icon(params: IconProps) {
        return <Figma {...params} />;
      },
      color: '#F24E1E',
    },
    trello: {
      icon(params: IconProps) {
        return <Trello {...params} />;
      },
      color: '#0079BF',
    },
    notion: {
      icon(params: IconProps) {
        return <Notion {...params} />;
      },
      color: '#000000',
    },
    postman: {
      icon(params: IconProps) {
        return <Postman {...params} />;
      },
      color: '#FF6C37',
    },
  },
  etc: {
    storybook: {
      icon(params: IconProps) {
        return <Storybook {...params} />;
      },
      color: '#FF4785',
    },
    bit: {
      icon(params: IconProps) {
        return <Bit {...params} />;
      },
      color: '#73398D',
    },
    materialUi: {
      icon(params: IconProps) {
        return <MaterialUi {...params} />;
      },
      color: '#0081CB',
    },
    jest: {
      icon(params: IconProps) {
        return <Jest {...params} />;
      },
      color: '#C21325',
    },
    cypress: {
      icon(params: IconProps) {
        return <Cypress {...params} />;
      },
      color: '#17202C',
    },
    sentry: {
      icon(params: IconProps) {
        return <Sentry {...params} />;
      },
      color: '#FB4226',
    },
    firebase: {
      icon(params: IconProps) {
        return <Firebase {...params} />;
      },
      color: '#FFCA28',
    },
    stripe: {
      icon(params: IconProps) {
        return <Stripe {...params} />;
      },
      color: '#008CDD',
    },
    mailchimp: {
      icon(params: IconProps) {
        return <Mailchimp {...params} />;
      },
      color: '#FFE01B',
    },
  },
};

export type ProjectType = {
  project: string;
  description: string;
  techStacks: string[];
  url?: string;
  label: string;
};

export type Experience = {
  period: string;
  location: string;
  position: string;
  homepage?: string;
  projects?: ProjectType[];
};

export const EXPERIENCE: {
  estMob: Experience;
  vanguardLab: Experience;
  gravity: Experience;
  nox: Experience;
  novaTech: Experience;
  youngHwaRAK: Experience;
} = {
  estMob: {
    period: 'Oct 2019 - Present',
    location: 'Seoul, Korea',
    position: 'Front End Developer',
    homepage: 'https://home.sendycloud.com/',
    projects: [
      {
        project: 'R-Project',
        description: 'Private',
        techStacks: ['TypeScript', 'React', 'Redux', 'Redux-Saga', 'Intl', 'Material-ui'],
        label: LABEL.about.project.r,
      },
      {
        project: 'Send Anywhere',
        description: 'Develop file sharing web application that without connect device.',
        techStacks: ['JavaScript', 'React', 'Redux', 'Redux-Thunk', 'Express', 'Pug', 'Socket.io', 'i18next', 'aws'],
        url: 'https://send-anywhere.com/',
        label: LABEL.about.project.sendAnywhere,
      },
      {
        project: 'Sendy',
        description: 'Develop file sharing web application that transfer by link and save to cloud.',
        techStacks: ['TypeScript', 'React', 'Mobx', 'Express', 'firebase', 'i18next', 'aws'],
        url: 'https://sendcloud.com/',
        label: LABEL.about.project.sendy,
      },
    ],
  },
  vanguardLab: {
    period: 'Dec 2018 - Oct 2019',
    location: 'Seoul, Korea',
    position: 'Developer',
    projects: [
      {
        project: "NH Card's Next Generation System",
        description:
          'worked as full-stack developer as develop Card Delivery System in Issuing/Pay of Card member team.',
        techStacks: ['javascript', 'Pro-C', 'pro-frame', 'ez-builder', 'I-studio', 'oracleDB', 'orange', 'UltraEdit'],
        label: LABEL.about.project.nh,
      },
    ],
  },
  gravity: {
    period: 'Feb 2017 - Apr 2018',
    location: 'Seoul, Korea',
    position: 'HRM',
    homepage: 'http://www.gravity.co.kr/en/',
  },
  nox: {
    period: 'Oct 2015 - Dec 2016',
    location: 'Yesan, Korea',
    position: 'HRM',
    homepage: 'https://www.noxglobal.com/eng/',
  },
  novaTech: {
    period: 'Mar 2014 - Jun 2015',
    location: 'Cheonan, Korea',
    position: 'HRM',
  },
  youngHwaRAK: {
    period: 'Nov 2011 - Dec 2012',
    location: 'RAK, UAE',
    position: 'HRM',
    homepage: 'https://yhrak.com/',
  },
};

export const LOCALES = {
  en: 'en_US',
  ko: 'ko_KR',
};
