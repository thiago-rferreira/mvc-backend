import dados from "../data/dados.js";
const { viloes } = dados;

// GET /viloes - Listar vilões com filtros
const getAllViloes = (req, res) => {
    const { nome, universo, perigoso } = req.query;
    let resultado = viloes;

    if (nome) {
        resultado = resultado.filter((v) => 
            v.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }
    
    if (universo) {
        resultado = resultado.filter((v) => 
            v.universo.toLowerCase().includes(universo.toLowerCase())
        );
    }
    
    if (perigoso !== undefined) {
        resultado = resultado.filter((v) => v.perigoso === (perigoso === 'true'));
    }

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });
};

// POST /viloes - Criar novo vilão
const createVilao = (req, res) => {
    const { nome, identidadeSecreta, poder, objetivo, universo, perigoso } = req.body;

    // Validação de campos obrigatórios
    if (!nome || !universo) {
        return res.status(400).json({
            success: false,
            message: "Nome e universo são obrigatórios para um vilão!",
        });
    }

    // Criar novo vilão
    const novoVilao = {
        id: viloes.length + 1,
        nome,
        identidadeSecreta: identidadeSecreta || "Desconhecida",
        poder: poder || "A ser revelado",
        objetivo: objetivo || "Dominar o mundo",
        universo,
        perigoso: perigoso !== undefined ? perigoso : true,
    };

    // Adicionar à lista de vilões
    viloes.push(novoVilao);

    res.status(201).json({
        success: true,
        message: "Novo vilão catalogado!",
        data: novoVilao,
    });
};

// Exportar as funções
export { getAllViloes, createVilao };