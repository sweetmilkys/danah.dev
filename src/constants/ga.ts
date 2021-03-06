export const ACTION = {
  menu: 'menu',
  button: 'button',
};

export const CATEGORY = {
  home: 'home',
  about: 'about',
  email: 'email',
};

export const LABEL = {
  home: {
    about: 'home_about',
    github: 'home_github',
    email: 'home_email',
  },
  menu: {
    open: 'menu_open',
    overview: 'menu_overview',
    about: 'menu_about',
    email: 'menu_email',
  },
  about: {
    profile: {
      github: 'about_profile_github',
      linkedin: 'about_profile_linked_in',
      stackShare: 'about_profile_stack_share',
    },
    site: {
      estmob: 'about_site_estmob',
      gravity: 'about_site_gravity',
      nox: 'about_site_nox',
      youngHwaRAK: 'about_site_youngHwaRAK',
    },
    project: {
      r: 'about_project_r',
      sendAnywhere: 'about_project_send_anywhere',
      sendy: 'about_project_sendy',
      nh: 'about_project_nh',
    },
  },
  email: {
    submit: 'submit_button',
    success: 'submit_success',
    error: 'submit_error',
  },
};
