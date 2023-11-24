import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styles from "../App.module.css"
import { AgendaInterfaces } from '../Interfaces/AgendaInterfaces';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { CadastroProfissionalInterface } from '../Interfaces/CadastroProfissionalInterface';

const ListagemAgenda = () => {
    const [agenda, setAgenda] = useState<AgendaInterfaces[]>([]);
    const [profissional, setProfissional] = useState<CadastroProfissionalInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('');
    //const[profissional, setProfissional] = useState<string>('');
    const [error, setError] = useState("");
   
    const hadleStateSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setPesquisa(e.target.value);
    }

    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {
                console.log(profissional)
                console.log(pesquisa)
                const response = await axios.post('http://127.0.0.1:8000/api/cadastroAgenda',
                    {
                        profissional_id: profissional,
                        data_hora: pesquisa
                    }
                ).then(function (response) {
                    console.log(response);
                    if (response.data.status == true) {
                        setAgenda(response.data.data);
                    }
                    else {
                        setAgenda([]);
                    }
                }).catch(function (error) {
                    console.log(error);
                });

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/cliente/retornarTodes');
                setAgenda(response.data.data);
            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <main className={styles.main}>
                <div className='container'>

                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-5'>
                                        <select name="selectProfissional"  >
                                            <option selected value="0">Selecione um Profissional</option>
                                            {profissional.map(profissional => (
                                                <option value={profissional.id}>{profissional.nome}</option>
                                            ))}

                                        </select>

                                    </div>
                                    <div className='col-5'>
                                        <input type="text" name='pesquisa' className='form-control' />
                                    </div>

                                    <div className='col-1'>
                                        <button type='submit'
                                            className='btn btn-success'>Pesquisar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem Agenda
                            </h5>
                            <table className='table table-hover table-bordered border-dark border border-success p-2 mb-2 border-opacity-25 '>
                                <thead>
                                    <tr>
                                        {/* <th>ID</th> */}
                                        <th>profisional_id</th>
                                        <th>data_hora</th>

                                    </tr>


                                </thead>
                                <tbody>
                                    {agenda.map(agenda => (
                                        <tr key={agenda.id}>
                                            <td>{agenda.profissional_id}</td>
                                            <td>{agenda.data_hora}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}

export default ListagemAgenda;