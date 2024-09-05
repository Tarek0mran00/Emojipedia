const emojipedia = [
    {
      id: 1,
      emoji: "💪",
      name: "Tense Biceps",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
    },
    {
      id: 2,
      emoji: "🙏",
      name: "Person With Folded Hands",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you.",
    },
    {
      id: 3,
      emoji: "🤣",
      name: "Rolling On The Floor, Laughing",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“.",
    },
    {
      id: 4,
      emoji: "😂",
      name: "Face With Tears of Joy",
      meaning:
        "A laughing face with tears of joy. It is used to show something is funny or amusing.",
    },
    {
      id: 5,
      emoji: "😍",
      name: "Smiling Face with Heart-Eyes",
      meaning:
        "A smiling face with heart-shaped eyes, often used to express love or adoration.",
    },
    {
      id: 6,
      emoji: "😒",
      name: "Unamused Face",
      meaning:
        "A face with a slightly annoyed or displeased expression. Used to express dissatisfaction or disapproval.",
    },
    {
      id: 7,
      emoji: "😭",
      name: "Loudly Crying Face",
      meaning:
        "A face with streams of tears running down, indicating extreme sadness, frustration, or overwhelming joy.",
    },
    {
      id: 8,
      emoji: "😎",
      name: "Smiling Face with Sunglasses",
      meaning:
        "A cool, confident face wearing sunglasses. Often used to convey a sense of chill or confidence.",
    },
    {
      id: 9,
      emoji: "😢",
      name: "Crying Face",
      meaning:
        "A face with a single tear, often used to show sadness, pain, or disappointment.",
    },
    {
      id: 10,
      emoji: "😅",
      name: "Smiling Face with Sweat",
      meaning:
        "A smiling face with a bead of sweat, showing relief, nervousness, or hard work.",
    },
    {
      id: 11,
      emoji: "😡",
      name: "Pouting Face",
      meaning:
        "A red, angry face with a frown and furrowed brows, used to express anger or annoyance.",
    },
    {
      id: 12,
      emoji: "🥳",
      name: "Partying Face",
      meaning:
        "A face with a party hat and blowing a party horn, often used to celebrate special occasions.",
    },
    {
      id: 13,
      emoji: "🤔",
      name: "Thinking Face",
      meaning:
        "A face with a hand on its chin, often used to indicate thinking, pondering, or considering something.",
    },
    {
      id: 14,
      emoji: "🤗",
      name: "Hugging Face",
      meaning:
        "A smiling face with open hands, meant to give a virtual hug or express warmth and affection.",
    },
    {
      id: 15,
      emoji: "🤩",
      name: "Star-Struck",
      meaning:
        "A face with starry eyes, often used to show admiration, excitement, or being star-struck.",
    },
    {
      id: 16,
      emoji: "😴",
      name: "Sleeping Face",
      meaning:
        "A peaceful face with closed eyes and a mouth gently opened, often used to indicate sleep or boredom.",
    },
    {
      id: 17,
      emoji: "😋",
      name: "Face Savoring Food",
      meaning:
        "A smiling face with a tongue out, often used to show delicious food or a good meal.",
    },
    {
      id: 18,
      emoji: "🤤",
      name: "Drooling Face",
      meaning:
        "A face with drool, used to indicate delicious food, desire, or sleepiness.",
    },
    {
      id: 19,
      emoji: "🙄",
      name: "Face with Rolling Eyes",
      meaning:
        "A face showing a rolling of eyes, often used to express disbelief, annoyance, or sarcasm.",
    },
    {
      id: 20,
      emoji: "🤐",
      name: "Zipper-Mouth Face",
      meaning:
        "A face with a zipper over its mouth, used to show that one will keep quiet or is sealed shut.",
    },
    {
      id: 21,
      emoji: "😱",
      name: "Face Screaming in Fear",
      meaning:
        "A face with wide-open eyes and mouth, used to express extreme fear, horror, or shock.",
    },
    {
      id: 22,
      emoji: "🥵",
      name: "Hot Face",
      meaning:
        "A red face with a tongue out, used to show being extremely hot or overwhelmed.",
    },
    {
      id: 23,
      emoji: "🥶",
      name: "Cold Face",
      meaning:
        "A blue face with chattering teeth, used to show extreme cold or being frozen.",
    },
    {
      id: 24,
      emoji: "😳",
      name: "Flushed Face",
      meaning:
        "A face with wide eyes and blushing cheeks, used to express embarrassment or surprise.",
    },
    {
      id: 25,
      emoji: "🤯",
      name: "Exploding Head",
      meaning:
        "A face with an exploding head, used to show shock, disbelief, or mind-blowing ideas.",
    },
    {
      id: 26,
      emoji: "😜",
      name: "Winking Face with Tongue",
      meaning:
        "A playful face with a wink and tongue out, used to show joking or having fun.",
    },
    {
      id: 27,
      emoji: "🤪",
      name: "Zany Face",
      meaning:
        "A silly, goofy face with a tilted head, crazy eyes, and a tongue out, used to express craziness or silliness.",
    },
    {
      id: 28,
      emoji: "😇",
      name: "Smiling Face with Halo",
      meaning:
        "A face with a halo, used to show innocence, goodness, or angelic behavior.",
    },
    {
      id: 29,
      emoji: "🥺",
      name: "Pleading Face",
      meaning:
        "A face with big, puppy-dog eyes, used to express pleading, begging, or feelings of being overwhelmed.",
    },
    {
      id: 30,
      emoji: "😈",
      name: "Smiling Face with Horns",
      meaning:
        "A face with devilish horns, used to show mischievousness, naughtiness, or something evil.",
    },
    {
      id: 31,
      emoji: "🤡",
      name: "Clown Face",
      meaning:
        "A clown face, often used to show silliness, foolishness, or clownish behavior.",
    },
    {
      id: 32,
      emoji: "👻",
      name: "Ghost",
      meaning:
        "A ghost face with a silly smile, used to show something spooky, funny, or to represent a ghost.",
    },
    {
      id: 33,
      emoji: "💩",
      name: "Pile of Poo",
      meaning:
        "A smiling pile of poo, often used humorously or to represent something that stinks.",
    },
  ];
  
  export { emojipedia };
  