import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import {Link} from 'react-router-dom'

function CadastroCategoria(){
    const [categorias, setCategorias] = useState (['Teste'])
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    nomeDaCategoria
                ]);
            } }>
                <label>
                    Nome da Categoria:
                <input 
                     type="text"
                     value={nomeDaCategoria}
                     onChange={function HandlerFunction (infosDoEvento) {
                         setNomeDaCategoria(infosDoEvento.target.value);
                     }}   
                    />
                </label>
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>
            
            <Link to="/">
              <h2>Ir para Home</h2> 
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;