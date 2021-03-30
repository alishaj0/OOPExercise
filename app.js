// OOP EXERCISE


//1 - OOP with Properties & Methods
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`, 
    quote: function(){
        return `Dishonor! Dishonor on your whole family!`;
    },
    storyline: function (){
        return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of China's greatest heroines in the process.`
    }
}
    console.log(mulan.quote());
        // Dishonor! Dishonor on your whole family!
    console.log(mulan.storyline());
        // In the movie Mulan, to save her father from death in the army, a young maiden named Fa Mulan secretly goes in his place and becomes one of China's greatest heroines in the process.


//2 - OOP with Properties & Methods
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
    quote: function(){
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`
    },
    storyline: function (){
        return `In ${this.title}, the magically long-haired ${this.main} has spent her entire life in a tower, but no that a runaway thief has stumnbled upon her, she is about to discover the world for the first time, and who she really is.`
    }
}
    console.log(tangled.quote());
        // I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!
    console.log(tangled.storyline());
        // In Tangled, the magically long-haired Rapunzel has spent her entire life in a tower, but no that a runaway thief has stumnbled upon her, she is about to discover the world for the first time, and who she really is.


//3 - Constructor Function
function DisneyMovie(title, main){
    this.title = title;
    this.main = main;
}
    // Prototype - Mulan
DisneyMovie.prototype.storyline = function (){
    return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of China's greatest heroines in the process.`
}

const mulan1 = new DisneyMovie(`Mulan`, `Fa Mulan`);
    console.log(mulan1);
        // DisneyMovie { title: 'Mulan', main: 'Fa Mulan' }
    console.log(mulan1.storyline());
        // In the movie Mulan, to save her father from death in the army, a young maiden named Fa Mulan secretly goes in his place and becomes one of China's greatest heroines in the process.

const tangled1 = new DisneyMovie(`Tangled`, `Rapunzel`);
    console.log(tangled1);
        // DisneyMovie { title: 'Tangled', main: 'Rapunzel' }


//4 - Classes
class DM {
    constructor(title, main){
        this.title = title;
        this.main = main;
    }
    // Prototype Method added inside DM class - do not need to seperate
    storyline(){
        return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of China's greatest heroines in the process.`
    }
    // Static Method
    static loveDisneyMovies(){
        return `I Love Disney Movies!`
    }
}

const mulan2 = new DM(`Mulan`, `Fa Mulan`);
    console.log(mulan2);

const tangled2 = new DM(`Tangled`, `Rapunzel`);
    console.log(tangled2);

// Run static method
    console.log(DM.loveDisneyMovies());


//5 - Subclasses
class DMCast extends DM {
    constructor(title, main, cast){
        super(title, main);
        this.cast = cast;
    }
}

const mulan3 = new DMCast(`Mulan`, `Fa Mulan`, { 
    mulan: `Ming-Na Wen`,
    mushu: `Eddie Murphy`,
    shang: `BD Wang`,
    theEmperor: `Pat Morita`
});
    console.log(mulan3);
        // DMCast {
        //     title: 'Mulan',
        //     main: 'Fa Mulan',
        //     cast: {
        //     mulan: 'Ming-Na Wen',
        //     mushu: 'Eddie Murphy',
        //     shang: 'BD Wang',
        //     theEmperor: 'Pat Morita'
        //     }
        // }

const rapunzel3 = new DMCast(`Tangled`, `Rapunzel`, {
    rapunzel: `Mandy Moore`,
    flynnRider: `Zachary Levi`,
    motherGothel: `Donna Murphy`
});
    console.log(rapunzel3);
        // DMCast {
        //     title: 'Tangled',
        //     main: 'Rapunzel',
        //     cast: {
        //     rapunzel: 'Mandy Moore',
        //     flynnRider: 'Zachary Levi',
        //     motherGothel: 'Donna Murphy'
        //     }
        // }