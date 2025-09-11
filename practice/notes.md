if we use console.table than the entire "key" : "value" pair shorting into a table...

here is the example.

example 1

const myObject = {
    userName : 'Aditya',
    id : 'adit_123',
    password : 'xxxxxx23',
    age : 23,
    skill : 'web development & DSA'
};
console.table(myObject);

output-
┌──────────┬─────────────────────────┐
│ (index)  │ Values                  │
├──────────┼─────────────────────────┤
│ userName │ 'Aditya'                │
│ id       │ 'adit_123'              │
│ password │ 'xxxxxx23'              │
│ age      │ 23                      │
│ skill    │ 'web development & DSA' │
└──────────┴─────────────────────────┘

example 2

const myArray = [
   'aditya' , 12 , 'adit_123' , 'xxxxxx23' , 23 , 'webdevelopment & DSA'
]
console.table(myArray);

output-
┌─────────┬────────────────────────┐
│ (index) │ Values                 │
├─────────┼────────────────────────┤
│ 0       │ 'aditya'               │
│ 1       │ 12                     │
│ 2       │ 'adit_123'             │
│ 3       │ 'xxxxxx23'             │
│ 4       │ 23                     │
│ 5       │ 'webdevelopment & DSA' │
└─────────┴────────────────────────┘


