import React, { Component, useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "../App.module.css"
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditarProfissional = () => {
    const [id, setId] = useState<number>();
    const [nome, setNome] = useState<string>("");
    const [celular, setCelular] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cpf, setCpf] = useState<string>();
    const [dataNascimento, setDataNascimento] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [pais, setPais] = useState<string>();
    const [rua, setRua] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [cep, setCep] = useState<string>();
    const [complemento, setComplemento] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [salario, setSalario] = useState<string>();



    const parametro = useParams();

    const Atualizar = (e: FormEvent) => {
        e.preventDefault();

        const dados = {
            id: id,
            nome: nome,
            celular : celular,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            cidade : cidade,
            estado: estado,
            pais: pais,
            rua: rua,
            numero : numero,
            bairro: bairro,
            cep: cep,
            complemento : complemento,
            senha: senha,
            salario: salario,
           

        }
        axios.put("http://127.0.0.1:8000/api/servico/update", dados,
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function (response) {
                if (response.data.success == false) {
                    console.log("Error");
                    console.log(response.data.error);
                    alert("erro ao cadastrar, olhar o console")
                }
                else {
                    window.location.href = "/listagemServico";
                }

            }).catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/servico/find/" + parametro.id)
               // console.log(response)
                setId(response.data.data.id);
                setNome(response.data.data.nome);
                setCelular(response.data.data.descricao);
                setEmail(response.data.data.duracao);
                setCpf(response.data.data.preco);
                setDataNascimento(response.data.data.nome);
                setCidade(response.data.data.descricao);
                setEstado(response.data.data.duracao);
                setPais(response.data.data.preco);
                setRua(response.data.data.nome);
                setNumero(response.data.data.descricao);
                setBairro(response.data.data.duracao);
                setCep(response.data.data.preco);
                setComplemento(response.data.data.descricao);
                setSenha(response.data.data.duracao);
                setSalario(response.data.data.preco);



            } catch (error) {
                console.log("erro ao buscar dados da api");
                console.log(error);

            }
        }
        fetchData();

    }, []);


    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "celular") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "email") {
            setDuracao(e.target.value);
        }
        if (e.target.name === "cpf") {
            setPreco(e.target.value);
        }
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "celular") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "email") {
            setDuracao(e.target.value);
        }
        if (e.target.name === "cpf") {
            setPreco(e.target.value);
        }
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }
        if (e.target.name === "celular") {
            setDescricao(e.target.value);
        }
        if (e.target.name === "email") {
            setDuracao(e.target.value);
        }
        if (e.target.name === "cpf") {
            setPreco(e.target.value);
        }

    }
    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>Editar Servico</h5>
                            <form onSubmit={Atualizar} className='row g-3'>

                                <div className='col-6'>
                                    <label htmlFor="nome" className='form-label'>Nome</label>
                                    <input type="text" name='nome' className='form-control' required onChange={handleState} value={nome} />
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="celular" className='form-label'>Celular</label>
                                    <input type="text" name='celular' className='form-control' required onChange={handleState} value={descricao} />
                                </div>


                                <div className='col-6'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <input type="text" name='email' className='form-control' required onChange={handleState} value={duracao} />
                                </div>

                                <div className='col-6'>
                                    <label htmlFor="cpf" className='form-label'>CPF</label>
                                    <input type="text" name='cpf' className='form-control' required onChange={handleState} value={preco} />
                                </div>

                                <div className='col-12'>
                                    <button type='submit' className=' btn btn-success btn-sm'>Atualizar </button>
                                </div>



                            </form>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </div>
    )
}

export default EditarProfissional;










