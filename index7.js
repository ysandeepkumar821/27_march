/* 7. Multiple requests.
Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs.
*/


async function getCombinedData() {
    const [data1, data2] = await Promise.all([
        fetch("http://jsonplaceholder.typicode.com/posts/1").then((response)
=>
        response.json()
        ),
        fetch("http://jsonplaceholder.typicode.com/posts/1").then((response)
=>
        response.json()
        ),
    ]);
    const getCombinedData = {
        todo: data1,
        post: data2,
    };
    return getCombinedData;
}

getCombinedData().then((data) => console.log(data));