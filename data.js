var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Anonymous",
                date: Date.now(),
                content: "Hey"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Anonymous",
                date: Date.now(),
                content: "yo"
            },
            {
                author: "Anonymous",
                date: Date.now(),
                content: "wyd"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}