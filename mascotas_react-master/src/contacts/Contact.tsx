import React, {useState} from 'react';
import axios from 'axios';

export default function Contact(){

    let [titulo, setTitulo] = useState("");
    let [correo, setCorreo] = useState("");
    let [celular, setCelular] = useState("");
    let [descripcion, setDescripcion] = useState("");
    let [enviado, setEnviado] = useState(false);

    const handleSubmit = () => {
        //CODIGO PARA LLAMAR A LA API. 
    axios.post('http://localhost:3000/v1/contact',{
        'titulo':titulo,
        'correo':correo,
        'celular':celular,
        'descripcion':descripcion
    }).then(response => {
        console.log(response);
        setEnviado(true);
    }).catch(error => {
        console.log(error);
    });   
    };
    if(enviado===true){
        return(<h1>Su consulta ha sido enviada exitosamente. Si desea enviar otra consulta, por favor recargue el sitio.</h1>);
    }else{
    return(<div>
            <h1>Formulario de contactos</h1>
            <p>Ante alguna duda puedes enviarnos una consulta a nuestro servidor de Discord. Trataremos de atenderte lo mas pronto posible</p>
            <form onSubmit={handleSubmit}>
                <label>Titulo:</label>
                <input type="text" name="titulo" id="titulo" value = {titulo} onChange={ e => {setTitulo(e.target.value)}}/>
                <label>Correo:</label>
                <input type="text" name="correo" id="correo" value = {correo} onChange={ e => {setCorreo(e.target.value)}}/>
                <label>Celular:</label>
                <input type="text" name="celular" id="celular" value = {celular} onChange={ e => {setCelular(e.target.value)}}/>
                <label>Descripcion:</label>
                <input type="textarea" name="descripcion" id="descripcion" value = {descripcion} onChange={ e => {setDescripcion(e.target.value)}}/>
                <input type="submit" value="Enviar consulta"/> 
            </form>
        </div>
        );
    }
}