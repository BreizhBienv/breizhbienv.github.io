export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Architecture & game engine",
    description: "Designing scalable systems: data-oriented architecture, tools, procedural generation.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd"><path d="M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2zM9 9h6v6H9V9zM11 11h2v2h-2v-2zM9 1h2v3H9V1zM13 1h2v3h-2V1zM9 20h2v3H9v-3zM13 20h2v3h-2v-3zM1 9h3v2H1V9zM1 13h3v2H1v-2zM20 9h3v2h-3V9zM20 13h3v2h-3v-2z"/></svg>`,
    title: "AI in games",
    description: "Pathfinding (A*, navmesh), Behaviour Trees, decision-making, planning (HTN, GOAP), multi-agent systems, and reinforcement learning.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd"><path d="M21.9 11.5C21.5 8.3 20.6 6.1 19 5.4A3.5 3.5 0 0017.5 5c-1 0-1.8.7-3.7.7h-3.6C8.3 5.7 7.5 5 6.5 5a3.5 3.5 0 00-1.5.4C3.4 6.1 2.5 8.3 2.1 11.5c-.4 3.2-.3 5.9 1.1 6.4 1 .3 1.9-.4 2.8-1.5 1-1.2 2.1-1.6 4.6-1.6h2.8c2.5 0 3.6.4 4.6 1.6.9 1.1 1.800 1.800 2.800 1.500 1.400-.5 1.500-3.200 1.100-6.400zM9 9.500H7.800v1.200H6.700V9.500H5.500V8.400h1.200V7.200h1.100v1.200H9v1.100zm6.700.5a.9.9 0 110-1.800.9.9 0 010 1.800zm2.300 1.800a.9.9 0 110-1.800.9.9 0 010 1.800z"/></svg>`,
    title: "Gameplay & game systems",
    description: "Prototyping playable mechanics and their core systems : physics, 3D collisions, and online multiplayer.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>`,
    title: "Optimisation & performance",
    description: "Analyzing and improving game performance: CPU/GPU profiling, code optimisation (multithreading, algorithms), and scene optimisation (LOD, culling)", 
  },
];

export type Skill = (typeof skills)[number];