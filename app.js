const cards = [
    {
        front: 'The "First Computer Programmer"',
        back: 'Ada Lovelace',
        flipped: false,
    },
    {
        front: 'Invented the "Clarke Calculator"',
        back: 'Edith Clarke',
        flipped: false,

    },
    {
        front: 'Famous World War II Enigma code breaker',
        back: 'Alan Turing',
        flipped: false,
    },
    {
        front: 'Created satellite orbit analyzation software for NASA',
        back: 'Dr. Evelyn Boyd Granville',
        flipped: false,
    },
  ];


//Display our data
//On click flup back and forth
//Get info from new cards from the user
//Add new cards when user hits enter or clicks button
//Delete Cards flip
//Display an error messafe if form is left free
new Vue({
    el: '#flashcard-app',
    data: {
        cards: cards,
        newFront: '',
        newBack: '',
        error: false
    },
    methods: {
        toggleCard: function (card) {
            card.flipped = !card.flipped;
        },
        addNew: function () {
            if (!this.newFront || !this.newBack) {
                this.error = true;
            } else {
                this.cards.push({
                    front: this.newFront,
                    back: this.newBack,
                    flipped: false
                });
                this.newFront = '';
                this.newBack = '';
                this.error = false;
            }
            
        }

    }
});
