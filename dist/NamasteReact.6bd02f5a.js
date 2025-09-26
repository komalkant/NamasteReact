const heading = React.createElement('h1', {
    id: 'heading'
}, 'H1 from React');
const parent = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {
    id: 'child'
}, [
    React.createElement('h1', {
        id: 'heading'
    }, 'H1 from React'),
    React.createElement('h2', {
        id: 'heading'
    }, 'H2 from React')
]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//# sourceMappingURL=NamasteReact.6bd02f5a.js.map
