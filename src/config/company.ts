import {
  FaFacebookF,
  FaImdb,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaVimeo,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const company = {
  name: "Ninety 4 Film",
  location: "Cairo, Egypt",
  email: "info@ninety4film.com",
  whatsapp: {
    display: "+20 10 2200 1200",
    international: "+201022001200",
    url: "https://wa.me/201022001200",
  },
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/ninety4film/",
      icon: FaInstagram,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/Ninety4film",
      icon: FaFacebookF,
    },
    {
      label: "X",
      href: "https://x.com/Ninety4film",
      icon: FaXTwitter,
    },
    {
      label: "Vimeo",
      href: "https://vimeo.com/ninety4film",
      icon: FaVimeo,
    },
    {
      label: "Youtube",
      href: "https://www.youtube.com/@ninety4film",
      icon: FaYoutube,
    },
    {
      label: "IMDB",
      href: "https://www.imdb.com/name/nm7120668/",
      icon: FaImdb,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ninety4film",
      icon: FaLinkedin,
    },
    {
      label: "Tiktok",
      href: "https://www.tiktok.com/@ninety4film",
      icon: FaTiktok,
    },
  ],
};
