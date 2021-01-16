const quotes = [
    "“You know you\’re in love when you can\’t fall asleep because reality is finally better than your dreams.   –Dr Suess",
    "“Get busy living or get busy dying.   –Stephen King.",
    "“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.   –Mark Caine.",
    "“When one door of happiness closes\, another opens\; but often we look so long at the closed door that we do not see the one which has been opened for us.   –Helen Keller.",
    "“Twenty years from now you will be more disappointed by the things that you didn\’t do than by the ones you did do.   –Mark Twain.",
    "“When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.  –Audre Lorde.",
    "“Great minds discuss ideas; average minds discuss events; small minds discuss people.    –Eleanor Roosevelt.",
    "“A successful man is one who can lay a firm foundation with the bricks others have thrown at him.   –David Brinkley.",
    "“Those who dare to fail miserably can achieve greatly. –John F. Kennedy.",
    "“I can\’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.    -Herbert Bayard Swope.",
    "“It is hard to fail, but it is worse never to have tried to succeed.    –Theodore Roosevelt.",
    "“I’m a success today because I had a friend who believed in me and I didn\’t have the heart to let him down.    –Abraham Lincoln.",
    "“Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.   –Lucille Ball.",
    "“Let us always meet each other with smile, for the smile is the beginning of love.   –Mother Teresa.",
    "“Challenges are what make life interesting and overcoming them is what makes life meaningful.  –Joshua J. Marine.",
    "“Love is a serious mental disease.    –Plato.",
]

const h1 = document.getElementById('quoteDisplay');

const newQuote = document.getElementById('newQuote');

newQuote.addEventListener('click',()=>{
    let randomQuote = Math.floor(Math.random()*(quotes.length));
     h1.innerHTML = quotes[randomQuote];
});