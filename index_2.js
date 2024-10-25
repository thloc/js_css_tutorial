// 1. Closest()
document.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.closest(".class-name"));
    });
});

// 2.Append()
const someContainer = document.getElementById("container");
const  btnToAppend = document.createElement("button");

someContainer.append(btnToAppend, "< This is a button");