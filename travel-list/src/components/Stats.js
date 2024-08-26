export function Stats({ items }) {

    if (!items.length)
        return (
            <p className="stats">
                <em>
                    Start adding some items to your packing list
                </em>
            </p>
        );

    const numItems = items.length;
    const numPacked = items.filter((items) => items.packed).length;
    const parecentage = Math.round((numPacked / numItems) * 100);

    return <footer className="stats">
        <em> {parecentage === 100
            ? "You got everything ! Ready to go " :
            `you have ${numItems} items on your list,
      and you already packed ${numPacked} (${parecentage}%)`}
        </em>
    </footer>;
}
