import type { Site, SocialObjects } from "./types";
import type { GiscusProps } from "@giscus/react";

export const SITE: Site = {
  website: "https://manguonmo.tech/", // replace this with your deployed domain
  author: "Diep Do",
  profile: "https://avatars.githubusercontent.com/u/93646638?v=4",
  desc: "Cùng khám phá mã nguồn mở với các kiến thức và nguồn cảm hứng mới, kết nối cộng đồng công nghệ và lập trình viên tại Việt Nam.",
  title: "Mã Nguồn Mở: Khám Phá Kiến Thức Công Nghệ và Cộng Đồng Việt Nam",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  titleHeader: "Mã Nguồn Mở",
};

export const HERO = {
  enable: true,
  title: "Mã nguồn mở",
  description:
    "👋 Mình đam mê mã nguồn mở và thích khám phá những dự án, công cụ thú vị trong cộng đồng công nghệ. Blog này là nơi mình chia sẻ trải nghiệm và kiến thức về mã nguồn mở, mong muốn truyền cảm hứng và mang lại thông tin hữu ích cho cả lập trình viên và những ai yêu thích công nghệ, dù chưa có nhiều kiến thức chuyên môn!",
};

export const LOCALE = {
  lang: "vi", // html lang code. Set this empty and default will be "en"
  langTag: ["vi-VN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/diepdo1810/blog",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "X",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on X`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];

export const GISCUS: GiscusProps = {
  repo: "diepdo1810/niche-site-ma-nguon-mo",
  repoId: "R_kgDONNbjkw",
  category: "Q&A",
  categoryId: "DIC_kwDONNbjk84CkW6r",
  mapping: "pathname",
  reactionsEnabled: "0",
  emitMetadata: "0",
  inputPosition: "bottom",
  lang: "vi",
  loading: "lazy",
};
