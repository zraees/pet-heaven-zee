// This file will be used for exporting the constants

export enum Navigation {
  HOME = '/',
  CONTACT = '/contact',
  PetDetails = '/pet-details',
  PetCare = '/pet-care',
  ABOUT = '/about',
}

export enum OneTimeAnimations {
  CONTACT_PAGE_ANIMATION = 'contact_page_animation',
  CONTACT_FORM_ANIMATION = 'contact_form_animation',
  BOTTOM_BANNER_ANIMATION = 'bottom_banner_animation',
  TOP_BANNER_ANIMATION = 'top_banner_animation',
  CUSTOMER_LIST_ANIMATION = 'customer_list_animation',
  PET_DETAILS_ANIMATION = 'pet_details_animation',
}

export const BASE_URL =
  'https://d0d70d41-858e-4b30-89b0-3b6a3dd32625.mock.pstmn.io/';


export const navbarItems = [
    {title: 'Home', path: '/'},
    {title: 'About', path: '/about'},
    {title: 'Pet Care', path: '/pet-care'},
    {title: 'Contact', path: '/contact'},
]

