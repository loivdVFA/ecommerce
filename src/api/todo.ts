
export const getTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    return res.json();
};

export const postTodo = async (todo: { title: string }) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(todo)
    });
    return res.json();
};


