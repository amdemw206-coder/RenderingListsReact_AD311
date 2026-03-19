export function Recipe(){
    const recipe = [
    { id: 1, title: "Spaghetti Carbonara", ingredients:  ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://i.imgur.com/DKrxPv1.jpeg"},
    { id: 2, title: "Scrambled Eggs", ingredients:  ["Eggs", "Unsalted Butter", "Whole Milk", "Salt", "Black Pepper", "Chives (optional)"], image: "https://i.imgur.com/RZ6kvdI.jpeg"},
    { id: 3, title: "French Toast", ingredients:  ["White Bread", "Eggs", "Whole Milk", "Vanilla", "Ground Cinnamon", "Caster Sugar", "Salt", "Unsalted Butter", "Maple Syrup"], image: "https://i.imgur.com/jx8JBcN.jpeg"}
];
    return(     
        <ul>
            {recipe.map(list => (
                <li key={list.id}>
                    {list.title}: {list.ingredients.join(", ")}
                    <img 
                        src={list.image}
                        alt={list.title}
                        style={{ width: "200px", display: "block" }}
                    />
                </li>
            ))}
        </ul>
); 
}