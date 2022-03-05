import React from "react"
import Main from '../template/Main'
import './Home.css'
import App2 from "../../Main/App2"
export default props =>

<Main icon='home' title='início' 
subtitle='Projeto feito para teste técnico Carupi'>


<div className='display-4' name="João">Bem Vindo {props.name}!</div>
<hr />
<p className='descrition'>Jogos mais {props.categoria} da plataforma</p>
<App2/>
</Main>