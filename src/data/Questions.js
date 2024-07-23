export const QuestionsData = [
  { question: "Company/Organization", type: "text", multi: false, options: [] },
  { question: "Job Title:", type: "text", multi: false },
  {
    question: "Are you a current student?:",
    type: "list",
    multi: false,
    options: ["Yes", "No"],
  },
  {
    question: "Where did you hear about this event?",
    type: "list",
    multi: true,
    options: ["LinkedIn", "Instagram", "Twitter", "Facebook"],
  },
];
