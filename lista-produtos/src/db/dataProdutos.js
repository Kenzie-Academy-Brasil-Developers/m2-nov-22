const produtos = [
    {
        id: 1,
        nome: 'Banana',
        preco: '2.00',
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: "./public/img/banana.png",
        promocao: true,
        precoPromocao: '1.00',
        componentes: [
            'Potássio',
            'Vitamina B6',
            'Vitamina C',
            'Folatos'
        ] 
    },
    {
        id: 2,
        nome: 'Morango',
        preco: '2.00',
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './public/img/morango.png',
        promocao: false,
        precoPromocao: '0',
        componentes: [
            'Fibras',
            'Vitamina C',
            'Cálcio',
            'Ferro'
        ] 
    },
    {
        id: 3,
        nome: 'Maçã',
        preco: '2.00',
        secao: 'Hortifruti',
        categoria: 'fruta',
        img: './public/img/maca.png',
        promocao: true,
        precoPromocao: '1.50',
        componentes: [
            'Potássio',
            'Vitamina A',
            'Vitamina E',
            'Vitamina C'
        ] 
    },
    {
        id: 4,
        nome: 'Pão',
        preco: '4.00',
        secao: 'Panificadora',
        categoria: 'Pães',
        img: './public/img/pao.png',
        promocao: true,
        precoPromocao: '2.50',
        componentes: [
            'Cálcio',
            'Sódio',
            'Fibra Alimentar',
            'Proteínas'
        ] 
    },
    {
        id: 5,
        nome: 'Leite',
        preco: '5.00',
        secao: 'Laticinio',
        categoria: 'Leite',
        img: './public/img/leite.png',
        promocao: false,
        precoPromocao: '1.00',
        componentes: [
            'Carboidratos',
            'Proteínas',
            'Gorduras totais'
        ] 
    },
    {
        id: 6,
        nome: 'Leite 2',
        preco: '10.00',
        secao: 'Laticinio',
        categoria: 'Leite',
        img: './public/img/leite.png',
        promocao: false,
        precoPromocao: '1.00',
        componentes: [
            'Carboidratos',
            'Proteínas',
            'Gorduras totais'
        ] 
    },
    
]

export {produtos}
