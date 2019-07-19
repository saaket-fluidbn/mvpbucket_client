const products = [
     {  id:1,
        isLive: false,
        title: 'Warebik',
        description: 'Web router helping encrypted connections.',
        why: 'easy to use',
        targetUsers: 'All teenagers',
        productStory:' Seen an opportunity in computer networks.',
        github:'github.com/saaketc',
        behance:'',
        liveurl:''
    },
    {    id:2,
        isLive: true,
        title: 'Bownce',
        description: 'peer to peer ride service app.',
        why: 'user friendly',
        targetUsers: 'Employees.',
        productStory:' Seen an opportunity in my local market.',
          github: '',
        behance: 'https://www.behance.com',
        liveurl:'https://www.google.com'
    },
    {
        id: 3,
        isLive: true,
        title: 'Nio',
        description: 'peer to peer ride service app.',
        why: 'user friendly',
        targetUsers: 'Employees.',
        productStory: ' Seen an opportunity in my local market.',
        github: '',
        behance: '',
        liveurl: 'https://www.google.com'
    },
    {
        id: 4,
        isLive: true,
        title: 'Dran',
        description: 'peer to peer ride service app.',
        why: 'user friendly',
        targetUsers: 'Employees.',
        productStory: '',
        github: 'github.com/saaketc',
        behance: 'https://www.behance.com',
        liveurl: 'https://www.google.com'
    }
];


export const addProduct = (product) => {
    products.push(product);
    
}

export const getProducts = () => {
    return products.reverse();
}

export const getProduct = (id) => {
    return products.find(p=>p.id===id);

}