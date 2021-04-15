const BASE_STATE =  [
    {
        id: 'board-1',
        type: 1,
        className:'board',
        canBeAdded: true,
        boardName: 'Sin realizar',
        color: 'grey',
        cards: [
            { id:"card-1", className:"card", draggable:"true", type: 1, title: 'Tarea número 1', description: 'Barrer la casa' },
        ] },
    {
        id: 'board-2',
        type: 2,
        className:'board',
        canBeAdded: true,
        boardName: 'En proceso',
        color: 'green',
        cards: [
            { id:"card-2", className:"card", draggable:"true", type: 2, title: 'Tarea número 2', description: 'Pasear el perro' },
        ]
    },
    {
        id: 'board-3',
        type: 3,
        className:'board',
        canBeAdded: true,
        boardName: 'Realizado',
        color: 'orange',
        cards: [
            { id:"card-3", className:"card", draggable:"true", type: 3, title: 'Tarea número 3', description: 'Ir a clases de inglés' },
        ]
    }
];

export default BASE_STATE;
 