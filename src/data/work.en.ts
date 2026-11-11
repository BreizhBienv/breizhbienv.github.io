import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Gameplay Programmer",
    company: "FromTheFrench",
    region: "Paris, France",
    description: "Developed a football-themed mobile TCG (Trading Card Game). Designed the game's systems architecture, AI, game logic, network logic, and integrated UI and SFX assets.",
    technologies: [
      "Unity 6",
      "C#",
      "GitHub & GitHub Desktop",
      "FireBase",
      "Amazon GameLift",
      "Notion",
      "Asana",
      "Figma",
    ],
  },
  {
    title: "Gameplay Programmer",
    company: "UNDEAD Battery",
    region: "France",
    description: "Developed a leaderboard and a replay system in the race mode of TRYP FPV, a drone simulation game.",
    technologies: [
      "Unreal Engine 5",
      "C++ & Blueprint",
      "Steam API",
      "Perforce"
    ],
  },
];

export type WorkItem = (typeof work)[number];

