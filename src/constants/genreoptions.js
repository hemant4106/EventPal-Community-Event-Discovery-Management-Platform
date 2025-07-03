const genreOptions = [
  {
    label: "Education & Professional",
    value: "education_professional",
    colorcode: "#b2c7f7", // Chalky Blue
    options: [
      { label: "Workshop", value: "workshop" },
      { label: "Seminar", value: "seminar" },
      { label: "Hackathon", value: "hackathon" },
      { label: "Conference", value: "conference" },
      { label: "Webinar", value: "webinar" },
      { label: "Networking", value: "networking" },
    ],
  },
  {
    label: "Entertainment",
    value: "entertainment",
    colorcode: "#ff94c2", // Neon Pink
    options: [
      { label: "Concert", value: "concert" },
      { label: "Stand-up Comedy", value: "standup_comedy" },
      { label: "Theatre/Drama", value: "theatre_drama" },
      { label: "Film Screening", value: "film_screening" },
      { label: "Music Festival", value: "music_festival" },
    ],
  },
  {
    label: "Sports & Fitness",
    value: "sports_fitness",
    colorcode: "#f6be7f", // Retro Orange
    options: [
      { label: "Sports Tournament", value: "sports_tournament" },
      { label: "ESports Tournament", value: "Esports_tournament" },
      { label: "Marathon", value: "marathon" },
      { label: "Yoga Session", value: "yoga_session" },
      { label: "Fitness Bootcamp", value: "fitness_bootcamp" },
    ],
  },
  {
    label: "Tech & Innovation",
    value: "tech_innovation",
    colorcode: "#93e6c4", // Soft Mint
    options: [
      { label: "Tech Talk", value: "tech_talk" },
      { label: "AI/ML Meetup", value: "ai_ml_meetup" },
      { label: "Product Launch", value: "product_launch" },
      { label: "Coding Contest", value: "coding_contest" },
      { label: "Startup Pitch", value: "startup_pitch" },
    ],
  },
  {
    label: "Arts & Culture",
    value: "arts_culture",
    colorcode: "#dfbff3", // Pastel Purple
    options: [
      { label: "Art Exhibition", value: "art_exhibition" },
      { label: "Photography Walk", value: "photography_walk" },
      { label: "Literature Fest", value: "literature_fest" },
      { label: "Cultural Night", value: "cultural_night" },
      { label: "Dance Show", value: "dance_show" },
    ],
  },
  {
    label: "Social & Lifestyle",
    value: "social_lifestyle",
    colorcode: "#ffe58a", // Faded Yellow
    options: [
      { label: "Party", value: "party" },
      { label: "Meetup", value: "meetup" },
      { label: "Food Fest", value: "food_fest" },
      { label: "Fashion Show", value: "fashion_show" },
      { label: "Charity Event", value: "charity_event" },
    ],
  },
  {
    label: "College-specific",
    value: "college_specific",
    colorcode: "#ffb4a2", // Warm Salmon
    options: [
      { label: "Orientation", value: "orientation" },
      { label: "Freshers/Goodbye", value: "freshers_goodbye" },
      { label: "Department Event", value: "department_event" },
      { label: "Club Activity", value: "club_activity" },
      { label: "Open Mic", value: "open_mic" },
    ],
  },
];

export default genreOptions;
