
// 1.
buttonElement.addEventListener('click', (e) => {
    if (e.target.className == "some-class") {
        // do something
    }
});
// ------------
buttonElement.addEventListener('click', ({ target }) => {
    if (target.className == "some-class") {
        // do something
    }
});

// 2. Json Copy
const person = {
    name: "Dom",
    age: 38,
    skills: [
        "Cooking",
        "Tennis"
    ]
};

const personCopy = JSON.parse(JSON.stringify(person));
personCopy.skills == person.skills // -> false


// 3. Easy default with OR (||)
let username = getUsername();

if (username === null) {
    username = "dom"
}
// ------------
let username2 = getUsername() || 'dom';

// 4. Not Dublicate
const numbers = [5, 10, 5, 20];
const withoutDuplicates = Array.from(new Set(numbers));

// 5. Self
const someComplexValue = (() => {
    const a = 10;
    const b = 20;

    if (a > b) {
        return a * b;
    }

    return b/a;
})();

someComplexValue; // 2