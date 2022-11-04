export const pulseKeyFrames = [
  { offset: 0, transform: "scale(1)" },
  { offset: 0.3, transform: "scale(1.1)" },
  { offset: 0.5, transform: "scale(1)" },
  { offset: 0.7, transform: "scale(1.2)" },
  { offset: 1, transform: "scale(1)" },
];//*Button - Pulse Effect

const profileEvents = {
  onMatch: () => {},
  onUnmatch: () => {},
  onReset: () => {},
};
export const profiles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    name: "John",
    bio: "loves cuddles and belly rubs",
    ...profileEvents,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1592769606534-fe78d27bf450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Charlie",
    bio: "How you doing",
    ...profileEvents,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1627366247844-b4b5df8854d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Shane",
    bio: "Stealing hearts since 2022",
    ...profileEvents,
  },
];