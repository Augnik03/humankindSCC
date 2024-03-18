import React from 'react';

function Card({ imageUrl, title, description, customClass }) {
    // Splitting the description into an array of paragraphs
    const paragraphs = description.split('\n');

    return (
        <div className='mt-36'>
            <div className={`grid grid-cols-2 gap-x-8 gap-y-8 bg-white border-4 border-black rounded-3xl items-center p-6 mb-[-86px] ${customClass}`}>
                <div>
                    <img
                        src={imageUrl}
                        width="776"
                        height="776"
                        alt="Card Image"
                        className="block mx-auto cursor-zoom-in bg-gray-300 rounded-md transition duration-300 hover:bg-gray-200"
                    />
                </div>
                <div className="grid grid-cols-1 gap-y-6 grid-row-gap-6 rounded-md flex flex-col items-start">
                    <h1 className="flex justify-start text-4xl font-bold">{title}</h1>
                    {/* Rendering each paragraph separately */}
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="justify-start text-justify">{paragraph}</p>
                    ))}
                    <div>
                        <button className="text-black font-bold border-2 rounded-full bg-white hover:shadow-black hover:border-4 border-black px-6 py-4 mr-2">🎁 Get a Lunchbox</button>
                        <button className="text-white font-bold rounded-full bg-black hover:bg-orange-600 hover:border-4 border-black px-6 py-4 ml-2">⚔️ Play Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Cards() {
    // Sample data for cards
    const cardsData = [
        {
            imageUrl: "src/assets/64f086fc9537ff63dda7f953_Arcadewrestle-p-800-ezgif.com-webp-to-png-converter.png",
            title: "Wrestle. Wrestle. Wrestle!",
            description: "Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.",
            customClass: "custom-class" // Add your custom class here
        },
        {
            imageUrl: "src/assets/ezgif.com-webp-to-png-converter.png",
            title: "Play Herokind!",
            description: "Herokind is a unique game made just for Humankind NFT collectors. It combines the fun of collectibles with the anticipation of daily adventure events.\nSend your Humankind collectibles to places like Tenotch Forest, Skull Volcano, and Cloud Island, where the environment and events are unpredictable and can change at any time.",
            customClass: "" // Add your custom class here
        },
        {
            imageUrl: "src/assets/3rdcard.png",
            title: "Bring your ideas to life with the Humankind Fund",
            description: "Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.",
            customClass: "flex justify-start" // Add your custom class here
        },
        {
            imageUrl: "src/assets/63765b76de5f1356947d9d23_Lunchboxes.gif",
            title: "Grab your lunchbox. It will be a long journey.",
            description: "We are delighted you’re finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a long journey!\nEvery lunchbox will unlock a Humankind on a brave quest. You’ll be able to claim your Kind with them. We’ve made our generative lunchboxes with art we’ve been creating for the last year.",
            customClass: "h-479" // Add your custom class here
        }
        // Add more card data objects as needed
    ];

    return (
        <>
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </>
    );
}
