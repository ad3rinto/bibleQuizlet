let question_list = [
    {
        question: 'Why was Rachel envious of Leah? (Genesis 30:1)',
        choice1: 'Rachel was a virgin',
        choice2: 'Jacob loved Leah more than Rachel',
        choice3: 'Leah was more beautiful than Rachel',
        choice4: 'Rachel was sterile, but Leah had many children',
        answer: '2'
    },
    {
        question: 'Why was Esther afraid to talk to King Ahasuerus?',
        choice1: 'the law said that no one could talk to the king without permission',
        choice2: 'he was balancing on top of a tall tower',
        choice3: 'the king was a wicked person',
        choice4: 'she was allergic to his cat',
        answer: '1'
    },
    {
        question: 'Why did Satan want to do bad things to Job?',
        choice1: ' he simply hated Job',
        choice2: ' he did not want Job to be bored',
        choice3: ' he thought it would be fun',
        choice4: ' he thought it would make Job deny God',
        answer: '4'
    },
    {
        question: 'Why did Sarah laugh when she found out she was going to bear a son? (Genesis 18:11-12)',
        choice1: ' She thought she was too old to have children',
        choice2: 'She did not want a child',
        choice3: 'She was ticklish',
        choice4: 'She wanted a daughter',
        answer: '1'
    },
    {
        question: 'Why did people want to kill Jesus?',
        choice1: ' He said He was the Son of God',
        choice2: 'He was mean to them',
        choice3: 'He wanted to kill them',
        choice4: 'said He was God',
        answer: '1'
    },
    {
        question: 'Why did King Ahasuerus make sure that Queen Vashti was not his queen anymore?',
        choice1: 'she was unfaithful',
        choice2: 'she was too fat',
        choice3: 'she did not know how to swim',
        choice4: 'she disobeyed him',
        answer: '4'
    },
    {
        question: 'Why did Joseph get thrown in jail?',
        choice1: 'Wife of Portiphar told lies about him',
        choice2: 'he killed a man',
        choice3: 'He slept with wife of Portiphar',
        choice4: 'he stole from his boss',
        answer: '1'
    },
    {
        question: 'Why did Joseph and Mary go to the city of David? (Luke 2:4-5)',
        choice1: 'For the census',
        choice2: 'To pay taxes',
        choice3: 'To seek the prophet Simeon',
        choice4: 'To celebrate their wedding',
        answer: '2'
    },
    {
        question: 'Why did Jesus let the people kill him?',
        choice1: 'He had no fight left in him',
        choice2: " it was part of God's plan for saving His children",
        choice3: 'He was tired',
        choice4: 'He was too weak to fight back',
        answer: '2'
    },
    {
        question: 'Why did Jacob marry Leah before he married Rachel? (Genesis 29:16,23-28)',
        choice1: 'because Leah was older',
        choice2: 'he loved Leah most',
        choice3: 'He was forced to do so',
        choice4: 'To make sure that he really wanted to marry Rachel ',
        answer: '3'
    },
    {
        question: 'Why did Abraham have a hard time believing that he and his wife would have a son?',
        choice1: 'He wanted a daughter instead',
        choice2: 'they were both very old',
        choice3: 'they did not want a son',
        choice4: 'he thought it was impossible for him to have children',
        answer: '4'
    },
    {
        question: "Why couldn't Zaccheus see Jesus? (Luke 19:3)",
        choice1: 'Zaccheus was too fat',
        choice2: 'Zaccheus was blind from birth',
        choice3: 'Jesus was too far away',
        choice4: 'Zaccheus was too short to see past the crowd',
        answer: '4'
    },
    {
        question: 'Who wrote the Acts of the Apostles?',
        choice1: 'Luke',
        choice2: 'Matthew',
        choice3: 'Peter',
        choice4: 'Luke',
        answer: '2'
    },
    {
        question: 'Who wrote most of the books in the New Testament?',
        choice1: 'Paul',
        choice2: 'James',
        choice3: 'Sean Paul',
        choice4: ' John',
        answer: '1'
    },
    {
        question: 'Who would not believe that Jesus was resurrected until he saw Him with his own eyes? ',
        choice1: 'Thomas',
        choice2: 'Thompson',
        choice3: 'Joseph',
        choice4: 'Saul/Paul',
        answer: '1'
    },
    {
        question: 'Who was the greatest prophet in Israel? (Deuteronomy 34:10)',
        choice1: ' Moses',
        choice2: 'Aaron',
        choice3: 'Joshua',
        choice4: 'Ephraim',
        answer: '1'
    },
    {
        question: 'Who was much stronger than normal men?',
        choice1: ' King Saul',
        choice2: 'Samson',
        choice3: 'Joseph',
        choice4: 'Jacob',
        answer: '2'
    },
    {
        question: 'Who was Mordecai?',
        choice1: "Esther's  uncle",
        choice2: 'King Ahasuerus',
        choice3: "Persia's best dentist",
        choice4: "Esther's brother",
        answer: '1'
    },
    {
        question: 'Who was given a coat of many colors?',
        choice1: 'Pilate',
        choice2: 'Zach',
        choice3: 'Benny',
        choice4: 'Joseph',
        answer: '4'
    },
    {
        question: 'Who said?:"All these things will I give thee, if thou wilt fall down and worship me"(Matthew 4:9)',
        choice1: 'Satan',
        choice2: 'Nebuchadnezzar',
        choice3: 'Peter',
        choice4: ' Saul',
        answer: '1'
    },
    {
        question: 'Who parted the Red Sea?',
        choice1: 'Elisha',
        choice2: 'David',
        choice3: ' Moses',
        choice4: 'Solomon',
        answer: '3'
    },
    {
        question: 'Who married Moses',
        choice1: 'Zipporah',
        choice2: 'Abigail',
        choice3: ' Phoebe',
        choice4: 'Zilpah',
        answer: '1'
    },
    {
        question: 'Who married Jacob? (Genesis29:28)',
        choice1: 'Miriam',
        choice2: 'Rachel',
        choice3: 'Bathsheba',
        choice4: 'Rebekah',
        answer: '2'
    },
    {
        question: 'Who married Isaac? (Genesis 24:67)',
        choice1: 'Deborah',
        choice2: ' Rachel',
        choice3: 'Rebekah',
        choice4: 'Sarai',
        answer: '3'
    },
    {
        question: 'Who married Abraham? (Genesis 11:29)',
        choice1: 'Sarah',
        choice2: 'Sarai',
        choice3: ' Rebekah',
        choice4: ' Ruth',
        answer: '1'
    },
    {
        question: 'Who killed a giant?',
        choice1: 'Saul',
        choice2: 'Aaron',
        choice3: 'Bart',
        choice4: 'David',
        answer: '4'
    },
    {
        question: 'Who found baby Moses?',
        choice1: "Pharaoh's daughter",
        choice2: 'a slave girl',
        choice3: 'homeless man',
        choice4: 'pack of wolves',
        answer: '1'
    },
    {
        question: 'Who did Moses tell to let his people go?',
        choice1: 'Portiphar',
        choice2: 'Steven',
        choice3: ' Jesus',
        choice4: 'Pharaoh',
        answer: '4'
    },
    {
        question: 'Who did Jesus talk to first after He came back to life?',
        choice1: 'Mary - his mother',
        choice2: 'King David',
        choice3: 'Abraham',
        choice4: 'Mary Magdalene',
        answer: '4'
    },
    {
        question: 'Who did Haman try to destroy?',
        choice1: ' all the Jews in the capital',
        choice2: ' all the Jews in the land',
        choice3: " the king's favorite pet turtle",
        choice4: ' Everyone who worked at Wal-Mart',
        answer: '2'
    },
    {
        question: "Who could interpret King Nebuchadnezzar's dream and later was delivered by God from a den of lions? (Daniel 6:23)",
        choice1: 'Jonathan',
        choice2: 'Daniel',
        choice3: 'Jacob',
        choice4: 'David',
        answer: '2'
    },
    {
        question: 'Who complained that her sister Mary would not help her prepare food as Jesus taught them?',
        choice1: ' Martha',
        choice2: ' Rebekah',
        choice3: 'Miriam',
        choice4: ' Salome',
        answer: '1'
    },
    {
        question: "Who becomes the leader of the children of Israel following Moses' death and brings them to the promised land? (Deuteronomy 34:9)",
        choice1: 'Aaron',
        choice2: ' Noah',
        choice3: 'Joshua',
        choice4: ' Naaman',
        answer: '3'
    },
    {
        question: "Which woman of the Bible was the world's first mother?",
        choice1: 'Eve',
        choice2: 'Evelyn',
        choice3: 'Sarah',
        choice4: ' Jezebel',
        answer: '1'
    },
    {
        question: "Which prophet was born to Elisabeth, Mary's cousin?",
        choice1: 'John the Blessed',
        choice2: 'John the Beloved',
        choice3: 'Peter',
        choice4: 'John the Baptist',
        answer: '4'
    },
    {
        question: "Which of these were NOT part of God's curse on Cain? (Genesis 4:11-14)",
        choice1: 'His first-born son and those of his descendants would all be born malformed',
        choice2: 'He would be separated from the Lord',
        choice3: 'He would have poor harvests all his life',
        choice4: 'His first-born son will be mighty',
        answer: '1'
    },
    {
        question: "Which of these things did Joseph's brothers NOT do to him?",
        choice1: 'throw him a surprise party',
        choice2: 'Sew him a coat of many colours',
        choice3: "steal the gift Joseph's father gave him",
        choice4: 'put him in a pit',
        answer: '1'
    },
    {
        question: 'Which of these events occurred first?',
        choice1: ' Jonah flees from Nineveh',
        choice2: 'Isaiah prophesies of the Messiah',
        choice3: 'Elijah calls down fire from heaven',
        choice4: ' Noah builds an ark',
        answer: '4'
    },
    {
        question: 'Which of these events occurred first?',
        choice1: 'Adam and Eve partake of the forbidden fruit',
        choice2: 'Adam and Eve are chased from the garden of Eden',
        choice3: 'Abraham marries Sarah',
        choice4: " Ruth's husband dies",
        answer: '1'
    },
    {
        question: 'Which of these events occurred first?',
        choice1: 'Lot is born',
        choice2: ' Isaac is born',
        choice3: 'Abraham is born',
        choice4: ' Jacob is born',
        answer: '3'
    },
    {
        question: 'Which of these events occurred first?',
        choice1: 'Moses turns water into wine',
        choice2: ' Moses receives the Ten Commandments',
        choice3: 'Moses turns water into blood',
        choice4: 'Moses leads the Children of Israel out of Egypt',
        answer: '3'
    },
    {
        question: 'Which of these events occurred first?',
        choice1: 'Cain murders Abel',
        choice2: 'David slays Goliath',
        choice3: 'Abel murders Cain',
        choice4: "Daniel is thrown in the lions' den",
        answer: '1'
    },
    {
        question: 'Which of these books are found in the New Testament?',
        choice1: 'Genesis',
        choice2: 'Leviticus',
        choice3: '1 Chronicles',
        choice4: ' Galatians',
        answer: '4'
    },
    {
        question: 'Which of these books are found in the New Testament?',
        choice1: 'Martins',
        choice2: 'Numbers',
        choice3: 'Songs of Solomon',
        choice4: 'Matthew ',
        answer: '4'
    },
    {
        question: 'Which of these books are found in the New Testament?',
        choice1: 'Philippians',
        choice2: 'Ezra',
        choice3: 'Esther',
        choice4: 'Philips',
        answer: '1'
    },
    {
        question: 'Which of these books are found in the New Testament?',
        choice1: ' Judeah',
        choice2: ' Jude',
        choice3: 'Nehemiah',
        choice4: ' Haggai',
        answer: '2'
    },
    {
        question: 'Which of these books are found in the New Testament?',
        choice1: 'Ephesiasticus',
        choice2: 'Ephesians',
        choice3: ' Micah',
        choice4: 'Job',
        answer: '2'
    },
    {
        question: 'Which of these are NOT books in the New Testament?',
        choice1: '3 Peter',
        choice2: '1 Corinthians',
        choice3: ' 2 Thessalonians',
        choice4: '3 John',
        answer: '1'
    },
    {
        question: 'Which of the following are NOT one of the first four books of the New Testament?',
        choice1: '1 James',
        choice2: 'Mark',
        choice3: 'James',
        choice4: 'Matthew ',
        answer: '3'
    },
    {
        question: "Which of Jacob's wives did he love the most? (Genesis 29:30)",
        choice1: 'Abigail',
        choice2: 'Leah',
        choice3: 'Rachel',
        choice4: 'Bilhah',
        answer: '3'
    },
    {
        question: 'Which Jew married the king of Persia and bravely convinced him to reverse the decree calling for the destruction of her people? (Esther 8:3)',
        choice1: 'Esther',
        choice2: 'Vashti',
        choice3: ' Rachel',
        choice4: ' Sarai',
        answer: '1'
    },
    {
        question: 'Which famous missionary did Luke travel and teach with? (2 Timothy 4:11)',
        choice1: 'Mark',
        choice2: ' Peter',
        choice3: 'John',
        choice4: 'Paul',
        answer: '4'
    },
    {
        question: 'Which describes the first four books of the New Testament?',
        choice1: 'they tell the life of Christ, by four different authors',
        choice2: 'they portray life before Christ was born',
        choice3: 'they tell the life of Christ, by 2 different authors',
        choice4: 'they are in chronological order',
        answer: '1'
    },
    {
        question: 'Which book has 50 chapters?',
        choice1: 'John',
        choice2: 'Exodus',
        choice3: 'Genesis',
        choice4: 'Numbers',
        answer: '3'
    },
    {
        question: "Which apostle led Christ's church after Jesus was killed? (Matthew 16:18)",
        choice1: 'Paul',
        choice2: 'Peter',
        choice3: 'Timothy',
        choice4: ' Thomas',
        answer: '2'
    },
    {
        question: 'Which apostle betrayed Jesus with a kiss for money? (Luke 22:48)',
        choice1: ' Judah',
        choice2: 'Timothy',
        choice3: ' Luke',
        choice4: ' Judas',
        answer: '4'
    },
    {
        question: 'Where was Jesus mostly raised as a child? (Matthew 2:23)',
        choice1: 'Nazareth',
        choice2: 'Jerusalem',
        choice3: 'Egypt',
        choice4: 'Nazareth',
        answer: '3'
    },
    {
        question: 'Where did Cain dwell after being cast out by the Lord for murder? (Genesis 4:16)',
        choice1: 'Nod',
        choice2: 'Nur',
        choice3: 'Gomorrah',
        choice4: 'Eden',
        answer: '1'
    },
    {
        question: 'When Rebekah gave birth to Esau, he was: (Genesis 25:25)',
        choice1: 'covered with black hair',
        choice2: 'malformed',
        choice3: 'dead',
        choice4: 'covered with red hair',
        answer: '4'
    },
    {
        question: 'When Moses got older, what did he tell Pharaoh?',
        choice1: 'to let his people go free from slavery',
        choice2: 'to let his people vote',
        choice3: 'to run away from Egypt and never return',
        choice4: 'that he should make Moses his right-hand man',
        answer: '1'
    },
    {
        question: 'When Joseph first dicovered that Mary was pregnant, he: (Matthew 1:18-20)',
        choice1: 'No longer wished to marry her',
        choice2: 'Threw a party',
        choice3: ' Tore his robe',
        choice4: 'Rejoiced',
        answer: '1'
    },
    {
        question: "When Haman made the decree to kill Esther's people, what did they do?",
        choice1: 'Wept',
        choice2: ' build igloos',
        choice3: 'fast',
        choice4: ' start a band',
        answer: '3'
    },
    {
        question: 'When Elijah teased the priests of Baal, what did he NOT say their god was doing?',
        choice1: 'making a meal',
        choice2: 'talking',
        choice3: 'making a milkshake',
        choice4: 'journeying',
        answer: '3'
    },
    {
        question: 'When did Job curse God?',
        choice1: 'When he was young and foolish',
        choice2: 'when he was speeding in his car and got a ticket',
        choice3: 'when he ran out of his favorite cereal',
        choice4: 'he never cursed God',
        answer: '4'
    },
    {
        question: 'When David was young, what animals did he kill?',
        choice1: 'bear and a lion',
        choice2: 'a goat and a giraffe',
        choice3: 'a kangaroo and a wallaby',
        choice4: 'bear and a goat',
        answer: '1'
    },
    {
        question: "What was Zaccheus' office? (Luke 19: 2)",
        choice1: 'Chief among the saducees',
        choice2: 'Leader of the Pharisees',
        choice3: 'High priest',
        choice4: 'Chief among the publicans',
        answer: '4'
    },
    {
        question: 'What was the sixth plague against the Egyptians?',
        choice1: 'Boils',
        choice2: 'Blood',
        choice3: 'Locusts',
        choice4: 'Volcano',
        answer: '1'
    },
    {
        question: 'What was the name of the son of Abram and Hagar? (Genesis 16:11)',
        choice1: 'Jacob',
        choice2: 'Ishmael',
        choice3: 'Esau',
        choice4: ' Icarus',
        answer: '2'
    },
    {
        question: 'What was the name of the giant who David fought?',
        choice1: 'Goliath',
        choice2: 'Hercules',
        choice3: 'Bartholomew',
        choice4: 'Fredrick',
        answer: '1'
    },
    {
        question: "What was the name of Jesus' earthly brother? (Galatians 1:19)",
        choice1: 'Judas',
        choice2: 'Cephas',
        choice3: 'James',
        choice4: 'Joseph',
        answer: '3'
    },
    {
        question: "What was the name of Isaac's wife? (Genesis 24:67)",
        choice1: 'Abigail',
        choice2: 'Leah',
        choice3: 'Rebekah',
        choice4: 'Rachel',
        answer: '3'
    },
    {
        question: 'What was the last plague that was sent against the Egyptians?',
        choice1: 'Death of their firstborn sons',
        choice2: 'Earthquake',
        choice3: 'Death of their firstborn daughters',
        choice4: 'Darkness',
        answer: '1'
    },
    {
        question: 'What was the eleventh plague?',
        choice1: 'Fire and brimestones',
        choice2: 'Death of first born',
        choice3: ' Thunder, hail, and fire',
        choice4: "There weren't eleven plagues",
        answer: '4'
    },
    {
        question: 'What was the eighth plague on the Egyptians?',
        choice1: 'Blood',
        choice2: ' Frogs',
        choice3: 'Locusts',
        choice4: 'Death of first born',
        answer: '3'
    },
    {
        question: "What was Luke's occupation? (Colossians 4:14)",
        choice1: 'physician',
        choice2: 'soldier',
        choice3: 'fisherman',
        choice4: 'Priest',
        answer: '1'
    },
    {
        question: "What was King Ahasuerus' new decree?",
        choice1: 'the Jews would be protected',
        choice2: 'no one could dance on Thursdays',
        choice3: 'the Jews would not be protected',
        choice4: 'everyone had to eat at least two watermelons every day',
        answer: '1'
    },
    {
        question: 'What was Jesus doing when His parents found Him? (Luke 2:46-47)',
        choice1: 'Teaching in the temple',
        choice2: ' Praying to His Father',
        choice3: 'Fishing with nets',
        choice4: 'Teaching by the river',
        answer: '3'
    },
    {
        question: "What was David's job?",
        choice1: 'shepherd',
        choice2: 'Farmer',
        choice3: 'Cowboy',
        choice4: 'baker',
        answer: '1'
    },
    {
        question: 'What was Abraham commanded to do to Isaac? (Genesis 22:2)',
        choice1: 'burn him as a sacrifice to Baal',
        choice2: 'stab him with a spear',
        choice3: 'burn him as a sacrifice',
        choice4: 'poison him slowly',
        answer: '3'
    },
    {
        question: "What was Abel's profession? (Genesis4:2)",
        choice1: 'farmer',
        choice2: 'Tailor',
        choice3: ' Tiller',
        choice4: 'Shepherd',
        answer: '4'
    },
    {
        question: 'What talked to Moses',
        choice1: 'Burning forest',
        choice2: 'Burning bush',
        choice3: 'Burning tree',
        choice4: 'group of rocks',
        answer: '2'
    },
    {
        question: 'What swallowed Jonah?',
        choice1: 'A big fish',
        choice2: 'A whale',
        choice3: 'a snake',
        choice4: 'a lion ',
        answer: '1'
    },
    {
        question: 'What stopped Abraham from killing Isaac? (Genesis 22:11-12)',
        choice1: 'A ram',
        choice2: 'an angel of the Lord',
        choice3: 'Abraham fainted',
        choice4: 'a she-bear',
        answer: '2'
    },
    {
        question: "What special item(s) was/were included in Aaron's breastplate of judgment? (Exodus 28:30)",
        choice1: 'Urim and Thummim',
        choice2: 'Gold and Silver',
        choice3: 'Vials filled with holy water',
        choice4: 'A golden caduceus (symbol with wings and snakes on it)',
        answer: '1'
    },
    {
        question: 'What parable did Jesus give after speaking with Zaccheus? (Luke 19:12)',
        choice1: 'The parable of the pounds',
        choice2: 'The parable of the seeds',
        choice3: 'The parable of the ten virgins',
        choice4: 'The parable of the prodigal son',
        answer: '1'
    },
    {
        question: 'What object was present in the dream Jacob had after leaving his family?',
        choice1: 'A rock',
        choice2: 'a staff',
        choice3: 'a ladder',
        choice4: 'an altar',
        answer: '3'
    },
    {
        question: "What lie did Potiphar's wife say about Joseph?",
        choice1: 'He tried to force himself on her',
        choice2: 'he had done bad things to her',
        choice3: 'he tried to kill Pharaoh',
        choice4: 'he was the prince of a kingdom in another country',
        answer: '1'
    },
    {
        question: 'What landed on Jesus after He was baptized?',
        choice1: 'Pigeon',
        choice2: 'Rain',
        choice3: 'Snow',
        choice4: 'Dove',
        answer: '4'
    },
    {
        question: 'What job did David have when he got older?',
        choice1: ' King of Salem',
        choice2: 'police officer',
        choice3: 'servant to the king',
        choice4: 'King',
        answer: '4'
    },
    {
        question: 'What is the third book in the Old Testament?',
        choice1: 'Numbers',
        choice2: 'Leviticus',
        choice3: 'Exodus',
        choice4: 'Deuteronomy',
        answer: '2'
    },
    {
        question: 'What is the common name given to the first four books of the New Testament?',
        choice1: 'the books of love',
        choice2: 'the Gospels',
        choice3: 'the Revelations',
        choice4: 'the Acts',
        answer: '2'
    },
    {
        question: 'What happened when Elijah asked God to light his sacrifice on fire?',
        choice1: 'God burned the sacrifice and the entire altar',
        choice2: 'God burned the altar',
        choice3: "Elijah's robes caught on fire",
        choice4: 'his sacrifice turned into a pile of marshmallows',
        answer: '1'
    },
    {
        question: 'What had God ordered Moses to do that was the cause of all the plagues?',
        choice1: ' Free the Egyptians from slavery',
        choice2: ' Free the Hebrews from slavery',
        choice3: ' Become the Pharaoh',
        choice4: 'Defeat the Egyptians so they could take their land',
        answer: '1'
    },
    {
        question: 'What event brought Joseph and Mary to Jerusalem once a year? (Luke 2:41)',
        choice1: " The Lord's supper",
        choice2: ' The feast of the Passover',
        choice3: 'The census',
        choice4: 'The tax',
        answer: '2'
    },
    {
        question: `What does Jesus' other name, "Emmanuel", mean? (Matthew 1:23)`,
        choice1: ' God',
        choice2: 'He who is God',
        choice3: ' God with us',
        choice4: 'Son of God',
        answer: '3'
    },
    {
        question: 'What did the Lord NOT do as a result of the disobedience of Adam and Eve? (Genesis 3:16-19',
        choice1: 'Strike them down',
        choice2: 'Give them the ability to feel',
        choice3: 'Kill them instantly',
        choice4: 'Cast them out of Eden and His presence',
        answer: '3'
    },
    {
        question: 'What did the Lord do for Adam and Eve before He exiled them? (Genesis 3:21',
        choice1: 'He clothed them',
        choice2: 'He clothed Eve',
        choice3: ' He allowed them to rest',
        choice4: ' He armed them with weapons',
        answer: '1'
    },
    {
        question: 'What did King Ahasuerus give to Mordecai?',
        choice1: 'great party',
        choice2: 'a fuzzy blanket',
        choice3: 'a cute puppy',
        choice4: 'great honors',
        answer: '4'
    },
    {
        question: 'What did King Ahasuerus do to Haman at the end of the story of Esther? ',
        choice1: 'Put him in prison',
        choice2: 'tickle him until he cried',
        choice3: 'had him executed',
        choice4: 'soak him in banana pudding',
        answer: '3'
    },
    {
        question: "What did Joseph's father Jacob give him?",
        choice1: 'A tail coat',
        choice2: 'a coat of many colors',
        choice3: 'a sword',
        choice4: 'a horse of his own',
        answer: '2'
    },
    {
        question: "What did Joseph's brothers do to him?",
        choice1: 'sell him to some slave traders',
        choice2: 'Kill Him',
        choice3: 'throw apples at him',
        choice4: 'sell him to some travelling circus',
        answer: '1'
    },
    {
        question: "What did Joseph say the pharaoh's dream meant?",
        choice1: 'There would be seven years of good harvest then two years of little rain',
        choice2: 'The end of the world was coming soon',
        choice3: 'Jesus would be born soon',
        choice4: 'There would be seven years of good harvest then seven years of little rain',
        answer: '4'
    },
    {
        question: "What did Job's wife tell Job to do?",
        choice1: 'commit suicide',
        choice2: 'curse God for letting bad things happen to him',
        choice3: 'build an alter',
        choice4: 'sacrifice 100 goats',
        answer: '2'
    },
    {
        question: 'What did God do for Job because Job never cursed Him?',
        choice1: 'He gave him twice as much as he had before',
        choice2: 'He made him an apple pie',
        choice3: 'He made him a toy soldier to play with',
        choice4: 'He gave him ten times as much as he had before',
        answer: '1'
    },
    {
        question: 'What did Esther reveal to King Ahasuerus?',
        choice1: "Haman's plot to overthrow the king ",
        choice2: 'her secret identity',
        choice3: 'the location of her buried treasure',
        choice4: "Haman's plot to kill the Jews",
        answer: '4'
    },
    {
        question: 'What did Abram ask of the Lord? (Genesis 15:1-5)',
        choice1: 'A son',
        choice2: 'Longevity',
        choice3: 'Wisdom',
        choice4: 'Posterity',
        answer: '4'
    },
    {
        question: 'What did Abraham name his son?',
        choice1: 'Jacob',
        choice2: 'Isaac',
        choice3: ' Stevie',
        choice4: 'Esau',
        answer: '2'
    },
    {
        question: 'Was John the Baptist born before or after Jesus was born?',
        choice1: 'Same time',
        choice2: 'Before',
        choice3: 'After',
        choice4: 'None of the above',
        answer: '2'
    },
    {
        question: 'Was Jesus resurrected before or after His Atonement?',
        choice1: 'Same time',
        choice2: 'Before',
        choice3: 'After',
        choice4: 'None of the above',
        answer: '3'
    },
    {
        question: 'Was Jesus born before his siblings or after them?',
        choice1: 'Before',
        choice2: 'Same time',
        choice3: 'After',
        choice4: 'None of the above',
        answer: '1'
    },
    {
        question: 'To whom did Samson tell the secret of his strength?',
        choice1: 'Delilah',
        choice2: 'Hanna',
        choice3: 'Peninah',
        choice4: 'Susan',
        answer: '1'
    },
    {
        question: 'To what country did Joseph get taken?',
        choice1: 'Sodom',
        choice2: 'Ireland ',
        choice3: 'Brazil',
        choice4: 'Egypt',
        answer: '4'
    },
    {
        question: 'Thy faith hath made thee __________" (Luke 17:19)',
        choice1: 'Free',
        choice2: 'beautiful',
        choice3: 'wise',
        choice4: ' whole',
        answer: '4'
    },
    {
        question: 'Throughout his travels in the wilderness, what did Abram do to show his respect for the Lord? (Genesis 12:7-8)',
        choice1: 'Paid tithe',
        choice2: ' Built altars and made sacrifices',
        choice3: ' Wrote psalms to praise Him',
        choice4: ' Carved statues of Him',
        answer: '2'
    },
    {
        question: 'This woman was turned into a pillar of salt because she looked back as Sodom and Gomorrah were being destroyed (Genesis 19:6)',
        choice1: " Lot's wife",
        choice2: " Lot's daughter",
        choice3: " Noah's wife",
        choice4: "Moses' wife",
        answer: '1'
    },
    {
        question: "This woman was Ruth's sister-in-law (Ruth 1:4)",
        choice1: 'Oprah',
        choice2: 'Michal',
        choice3: 'Orpah',
        choice4: 'Miriam',
        answer: '3'
    },
    {
        question: 'This woman married Moses (Exodus 2:21)',
        choice1: 'Zipporah',
        choice2: 'Porah',
        choice3: ' Jezebel',
        choice4: 'Michal',
        answer: '1'
    },
    {
        question: 'This woman gave birth to Moses (Exodus 6:20)',
        choice1: 'Potipharah',
        choice2: 'Jochebed',
        choice3: 'Merab',
        choice4: 'Keturah',
        answer: '2'
    },
    {
        question: 'This wicked queen wanted to kill the prophet Elijah (1 Kings 19:2)',
        choice1: 'Jezebel',
        choice2: 'Vashti',
        choice3: 'Jezebel',
        choice4: 'Zipporah',
        answer: '1'
    },
    {
        question: 'This harlot housed spies sent by Joshua to take the city of Jericho (Joshua 2:1)',
        choice1: 'Rahbah',
        choice2: 'Rahab',
        choice3: 'Bathsheba',
        choice4: ' Leah',
        answer: '2'
    },
    {
        question: "This Egyptian woman was Sarah's handmaiden, and bore Ishmael through Abraham (Genesis 16:15)",
        choice1: 'Hagair',
        choice2: 'Zipporah',
        choice3: 'Hagar',
        choice4: 'Jezebel',
        answer: '3'
    },
    {
        question: 'This brave Israelite woman became queen of Persia and used her influence to protect her people, the Jews (Esther 7:3)',
        choice1: 'Micha',
        choice2: 'Naomi',
        choice3: ' Esther',
        choice4: 'Rachel',
        answer: '3'
    },
    {
        question: 'The writings of Isaiah are found in the',
        choice1: 'Old Testament',
        choice2: 'Songs of Solomon',
        choice3: 'New Testament',
        choice4: 'None of the above',
        answer: '1'
    },
    {
        question: 'The story of Jesus walking on water is found in the _______________',
        choice1: 'New Testament',
        choice2: 'old Testament',
        choice3: 'Revelations',
        choice4: 'None of the above',
        answer: '2'
    },
    {
        question: 'The story of David & Goliath is found in the',
        choice1: 'Old Testament',
        choice2: 'Hebrews',
        choice3: 'New Testament',
        choice4: 'None of the above',
        answer: '1'
    },
    {
        question: 'The parables of Jesus can be found in the _______________',
        choice1: 'New Testament',
        choice2: 'None of the above',
        choice3: 'Psalms',
        choice4: 'Old Testament',
        answer: '1'
    },
    {
        question: 'Meaning of the word: Ecclesiastes',
        choice1: 'Prince',
        choice2: 'the shepherd',
        choice3: 'collector',
        choice4: 'one who convenes an assembly',
        answer: '4'
    },
    {
        question: 'Meaning of the word: Eben-ezer',
        choice1: 'stone of sorrow',
        choice2: 'rock of my salvation',
        choice3: 'I am defeated',
        choice4: 'stone of help',
        answer: '4'
    },
    {
        question: 'Meaning of the word: Diaspora',
        choice1: 'dispersion',
        choice2: 'gathering',
        choice3: 'destruction',
        choice4: 'group of people',
        answer: '1'
    },
    {
        question: 'Meaning of the word: Deuteronomy',
        choice1: 'repetition of the promises of God',
        choice2: 'here is the law',
        choice3: 'repetition of the law',
        choice4: 'the law of Moses',
        answer: '3'
    },
    {
        question: 'Meaning of the word: apostle',
        choice1: 'one sent forth',
        choice2: 'fisher of men',
        choice3: 'representative',
        choice4: 'teacher',
        answer: '1'
    },
    {
        question: 'Meaning of the name: Esau',
        choice1: 'wicked',
        choice2: 'God is strength',
        choice3: 'father of the desert',
        choice4: 'hairy',
        answer: '4'
    },
    {
        question: 'Meaning of the name: Ephraim',
        choice1: 'fruitful',
        choice2: 'fruitless',
        choice3: 'the harvester',
        choice4: 'God is benevolent',
        answer: '1'
    },
    {
        question: 'Meaning of the name: Enos (son of Seth)',
        choice1: 'weakling',
        choice2: 'strength',
        choice3: 'man',
        choice4: 'child',
        answer: '3'
    },
    {
        question: 'Meaning of the name: Elisha',
        choice1: "God's promise",
        choice2: 'God shall save',
        choice3: 'I am saved',
        choice4: "God's attendant",
        answer: '2'
    },
    {
        question: 'Meaning of the name: Eleazar (son of Aaron the high priest)',
        choice1: 'God hath promised',
        choice2: 'God remembered me',
        choice3: 'God hath helped',
        choice4: 'God is mighty',
        answer: '3'
    },
    {
        question: 'Meaning of the name: Edom (a name of Esau, son of Isaac)',
        choice1: 'hairy',
        choice2: 'bear',
        choice3: 'Man',
        choice4: 'Red',
        answer: '4'
    },
    {
        question: 'Meaning of the name: Delilah',
        choice1: 'powerful',
        choice2: 'temptress',
        choice3: 'weak',
        choice4: 'daughter of God d God is my riches',
        answer: '3'
    },
    {
        question: 'Meaning of the name: David',
        choice1: 'beloved',
        choice2: 'Funny',
        choice3: 'Praised',
        choice4: 'honored',
        answer: '1'
    },
    {
        question: 'Meaning of the name: Daniel',
        choice1: 'God',
        choice2: 'I will remember his goodness',
        choice3: 'God is my love',
        choice4: 'a judge is God',
        answer: '4'
    },
    {
        question: 'Meaning of the name: Dan',
        choice1: 'God',
        choice2: ' judge',
        choice3: 'ruler',
        choice4: 'teacher',
        answer: '2'
    },
    {
        question: 'Meaning of the name: Capernaum',
        choice1: 'village of Nazareth',
        choice2: 'house of olives',
        choice3: 'village of Nahum',
        choice4: 'herein is strength',
        answer: '2'
    },
    {
        question: 'Meaning of the name: Boaz',
        choice1: 'in him is my spirit',
        choice2: 'king of olives',
        choice3: 'in him is might',
        choice4: 'masterful hand',
        answer: '3'
    },
    {
        question: 'Meaning of the name: Bethlehem',
        choice1: 'house of bread',
        choice2: 'house of wine',
        choice3: ' house of glory',
        choice4: ' house of shepherds',
        answer: '1'
    },
    {
        question: 'Meaning of the name: Benjamin',
        choice1: ' son of the left hand',
        choice2: 'born in the days of my sorrow',
        choice3: ' son of the right hand',
        choice4: 'son of misery',
        answer: '3'
    },
    {
        question: 'Meaning of the name: Barabbas',
        choice1: ' son of the father',
        choice2: ' son of the soil',
        choice3: ' condemnation',
        choice4: 'great leader',
        answer: '1'
    },
    {
        question: 'Meaning of the name: Baal',
        choice1: 'possessor',
        choice2: 'professor',
        choice3: 'great god',
        choice4: ' king of man',
        answer: '1'
    },
    {
        question: 'Meaning of the name: Apocrypha',
        choice1: ' hidden',
        choice2: 'forgiven',
        choice3: 'compass',
        choice4: 'treasure',
        answer: '1'
    },
    {
        question: 'Meaning of the name: Abram',
        choice1: ' exalted father',
        choice2: ' exalted son',
        choice3: 'father of a great people',
        choice4: 'God is good',
        answer: '1'
    },
    {
        question: 'Meaning of the name: Abed-nego',
        choice1: 'Father of Nego',
        choice2: 'the rock',
        choice3: 'God is strength',
        choice4: 'servant of Nego',
        answer: '4'
    },
    {
        question: 'Mary Magdalene is a(n) _______________ character',
        choice1: 'funny',
        choice2: 'Old Testament',
        choice3: 'New Testament',
        choice4: 'None of the above',
        answer: '3'
    },
    {
        question: 'King Ahasuerus was king of',
        choice1: 'Persia',
        choice2: 'Jerusalem',
        choice3: 'Salem',
        choice4: 'Rome',
        answer: '1'
    },
    {
        question: 'Joseph was one of how many brothers?',
        choice1: '12',
        choice2: '13',
        choice3: '22',
        choice4: '10',
        answer: '1'
    },
    {
        question: "Jacob bought Esau's birthright from him with: (Genesis 25:30-34)",
        choice1: 'porraige',
        choice2: 'a bow',
        choice3: 'three goats',
        choice4: 'pottage',
        answer: '4'
    },
    {
        question: "How would Abraham's servant know which woman would be Isaac's wife?",
        choice1: 'she would offer to fill him and his horses with water',
        choice2: 'she would sing and dance for him',
        choice3: 'he would be told in a dream',
        choice4: 'she would offer to fill him and his camels with water',
        answer: '4'
    },
    {
        question: 'How was Zaccheus able to see Jesus? (Luke 19:4)',
        choice1: 'He climbed the roof',
        choice2: 'He climbed a tree',
        choice3: 'He was healed by Simon Peter',
        choice4: 'He pushed his way closer to Jesus',
        answer: '2'
    },
    {
        question: 'How old was Jesus when his parents lost Him in Jerusalem? (Luke 2:42-45)',
        choice1: '10',
        choice2: '13',
        choice3: '11',
        choice4: '12',
        answer: '4'
    },
    {
        question: 'How many of each animal did God tell Noah to save?',
        choice1: '2',
        choice2: '7',
        choice3: '4',
        choice4: '2',
        answer: '1'
    },
    {
        question: 'How many men came to visit Abraham in the plains of Mamre? (Genesis 18:1-2)',
        choice1: '4',
        choice2: '12',
        choice3: '3',
        choice4: '11',
        answer: '3'
    },
    {
        question: 'How many descendents did God promise Abraham?',
        choice1: 'as many as the stars in the sky and the sands on the seashore',
        choice2: '10000',
        choice3: '120',
        choice4: '10000000',
        answer: '1'
    },
    {
        question: "How many days passed between Jesus' death and resurrection? (Matthew 12:40)",
        choice1: '3',
        choice2: '2',
        choice3: '10',
        choice4: '7',
        answer: '1'
    },
    {
        question: 'How many days did Jesus fast before Satan came tempting him? (Matthew 4:2)',
        choice1: '30',
        choice2: '40',
        choice3: '7',
        choice4: '25',
        answer: '2'
    },
    {
        question: 'How many days and nights did it rain during the great flood? (Genesis 7:12)',
        choice1: '39',
        choice2: '40',
        choice3: '30',
        choice4: '77',
        answer: '2'
    },
    {
        question: 'How many commandments did the Lord give to Moses on tablets? (Exodus 20:3-17)',
        choice1: '12',
        choice2: '16',
        choice3: '40',
        choice4: '10',
        answer: '4'
    },
    {
        question: 'How many chapters does the book of Judges have?',
        choice1: '21',
        choice2: '17',
        choice3: '25',
        choice4: '22',
        answer: '1'
    },
    {
        question: 'How many brothers did Isaac have? (not including half brothers) ',
        choice1: '1',
        choice2: '2',
        choice3: '0',
        choice4: '3',
        answer: '3'
    },
    {
        question: 'How long was Jesus in Jerusalem before His parents found Him? (Luke 2:46)',
        choice1: '3 weeks',
        choice2: '3 hours',
        choice3: '12 hours',
        choice4: '3 days',
        answer: '4'
    },
    {
        question: "How long did Jacob serve Laban before he married one of Laban's daughters? ",
        choice1: '17 years',
        choice2: '14 years',
        choice3: '10 years',
        choice4: '7 years',
        answer: '4'
    },
    {
        question: 'How did the people kill Jesus?',
        choice1: ' they nailed him to a wooden cross',
        choice2: ' they threw Him off a cliff',
        choice3: ' they nailed him to a golden cross',
        choice4: 'they drowned Him',
        answer: '1'
    },
    {
        question: 'How did the king try to kill Shadrach, Meshach, and Abed-nego?',
        choice1: ' he had them thrown into a fiery furnace',
        choice2: ' he ordered his soldiers to shoot',
        choice3: 'he fed them to lions',
        choice4: " he had them thrown into a lion's den",
        answer: '1'
    },
    {
        question: "How did the crowd react to Jesus' request of Zaccheus? (Luke 19:7)",
        choice1: 'They murmured because Zaccheus was a thief',
        choice2: 'They left the two alone',
        choice3: 'They murmured because Zaccheus was a sinner',
        choice4: 'They were happy for Zaccheus',
        answer: '3'
    },
    {
        question: 'How did Samson lose his strength?',
        choice1: 'his hair got cut off',
        choice2: 'his hair got braided',
        choice3: 'he ate onions',
        choice4: 'he forgot to eat his green vegetables ',
        answer: '1'
    },
    {
        question: 'How did Job react to all of this bad news?',
        choice1: 'he was happy and praised God',
        choice2: 'he ran 10 miles',
        choice3: 'he was sad, but he still praised God',
        choice4: 'he jumped on his trampoline for two hours',
        answer: '3'
    },
    {
        question: "How did God tell Noah that he could escape God's punishment?",
        choice1: 'run away from his family',
        choice2: 'save up money',
        choice3: 'make a house out of stones',
        choice4: 'build a large boat',
        answer: '4'
    },
    {
        question: "For how many years were the Moses'  people wandering in the wilderness?",
        choice1: '40 days and 40 nights',
        choice2: '40 years',
        choice3: '40 weeks',
        choice4: '40 decades',
        answer: '2'
    },
    {
        question: 'For how many years did the Children  of Israel wander in the wilderness? (Numbers 14:33)',
        choice1: '40',
        choice2: '12',
        choice3: '3',
        choice4: '30',
        answer: '1'
    },
    {
        question: 'For how many days and nights was Jonah in the belly of the great fish (whale)? ',
        choice1: '3',
        choice2: '2',
        choice3: '1',
        choice4: '5',
        answer: '1'
    },
    {
        question: 'Father, if thou be willing, remove this __________ from me: nevertheless not my will, but thine, be done" (Luke 22:42)',
        choice1: 'pain',
        choice2: 'cup',
        choice3: 'Bowl',
        choice4: 'Spoon',
        answer: '2'
    },
    {
        question: 'Esther was a:',
        choice1: 'Persian',
        choice2: 'pagan',
        choice3: 'saducee',
        choice4: 'Jew',
        answer: '4'
    },
    {
        question: 'Esau was a successful: (Genesis 25:27)',
        choice1: 'tent maker',
        choice2: 'farmer',
        choice3: 'hunter ',
        choice4: 'Potter',
        answer: '3'
    },
    {
        question: 'Did Jesus live before or after Paul?',
        choice1: 'Same time',
        choice2: ' after',
        choice3: 'before',
        choice4: 'During his life time',
        answer: '3'
    },
    {
        question: 'Did Jesus die before or after His mother Mary?',
        choice1: 'Before',
        choice2: 'None of the above',
        choice3: 'after',
        choice4: 'Died with mary',
        answer: '1'
    },
    {
        question: 'Did Jesus bless the children before or after He was killed?',
        choice1: 'Before',
        choice2: 'He did not bless any children',
        choice3: 'after',
        choice4: 'None of the above',
        answer: '1'
    },
    {
        question: "David's original wife was: (1 Samuel 18:26)",
        choice1: 'Abigail',
        choice2: ' Michal',
        choice3: 'Bathsheba',
        choice4: 'Miriam',
        answer: '2'
    },
    {
        question: 'Cain built a city and named it after his son What was the name of this city? ',
        choice1: 'Enoch',
        choice2: 'Hebron',
        choice3: 'Mehujael',
        choice4: 'Irad',
        answer: '1'
    },
    {
        question: 'And he arose, and rebuked the wind, and said unto the __________, Peace, be still And the wind ceased, and there was a great calm" (Mark 4:39',
        choice1: 'sea',
        choice2: 'Ocean',
        choice3: ' earth',
        choice4: 'trees',
        answer: '1'
    },
    {
        question: 'After the priests of Baal worshipped their god all day long, what happened to their sacrifice?',
        choice1: 'Caught fire',
        choice2: 'nothing',
        choice3: ' it exploded',
        choice4: 'it vanished',
        answer: '2'
    },
    {
        question: 'After David looked upon her lustfully, he had an affair with this woman that ultimately led to the death of her original husband (2 Samuel 11:2',
        choice1: 'Abigail',
        choice2: 'Zipporah',
        choice3: 'Leah',
        choice4: 'Bathsheba',
        answer: '4'
    },
    {
        question: 'Abraham commanded that Isaac should not marry a: (Genesis 24:3)',
        choice1: 'Pagan',
        choice2: 'Egyptian',
        choice3: 'Israelite',
        choice4: 'Canaanite',
        answer: '4'
    },
    {
        question: 'Who said?: "This is my beloved Son, in whom I am well pleased" (Matthew 3:17)',
        choice1: 'Jesus',
        choice2: 'God the Father',
        choice3: 'Zacharias',
        choice4: 'Joseph',
        answer: '2'
    },
    {
        question: ' Who had incredible strength until his hair was cut? (Judges 16:6)',
        choice1: 'David',
        choice2: 'Daniel',
        choice3: 'Samson',
        choice4: 'Israel',
        answer: '3'
    },
    {
        question: ' What did Jesus want from Zaccheus? (Luke 19:5)',
        choice1: 'For Zaccheus to receive Jesus into his house',
        choice2: 'For Zaccheus to move to Jerusalem',
        choice3: 'For Zaccheus to receive Jesus into his church',
        choice4: "For Zaccheus to wash Jesus' feet",
        answer: '1'
    },
    {
        question: ` To whom did Jesus explain that He was "about [His] Father's business"? (Luke 2:49)`,
        choice1: 'The people',
        choice2: ' His disciples',
        choice3: 'John',
        choice4: 'Mary',
        answer: '4'
    },
    {
        question: ' This woman rumored that Joseph tried to commit adultery with her (Genesis 39:14)',
        choice1: "Potiphar's wife",
        choice2: "Potiphar's sister",
        choice3: " Pharaoh's wife",
        choice4: " Gideon's wife",
        answer: '1'
    },
    {
        question: ' Meaning of the name: Amos',
        choice1: 'pride',
        choice2: 'servant of the King',
        choice3: ' contempt',
        choice4: 'burden',
        answer: '4'
    },
    {
        question: ' Meaning of the name: Abraham',
        choice1: 'father of a few',
        choice2: 'father of a multitude',
        choice3: 'God is my glory',
        choice4: 'wanderer',
        answer: '2'
    },
    {
        question: ' In how many days did God create the Earth? (Genesis 1:31)',
        choice1: '3',
        choice2: '7',
        choice3: '6',
        choice4: '12',
        answer: '3'
    },
    {
        question: ' How did Elijah plan to show who was the real God?',
        choice1: 'he organized a contest between his God and the false god Baal',
        choice2: ' he was going to do a magic trick',
        choice3: 'he organized a singing competition between his God and the false god Baal',
        choice4: 'he told the people to vote',
        answer: '1'
    },
    {
        question: ' For unto you is born this day in the city of __________ a Saviour, which is Christ the Lord',
        choice1: 'God',
        choice2: 'Saul',
        choice3: ' Nazareth',
        choice4: ' David',
        answer: '4'
    }
]


export {question_list} ;