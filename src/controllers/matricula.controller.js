import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllmatricula=async(req,res)=>{
    try {
        const response=await pool.query('select * from matricula');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readmatricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from matricula where idmatricula=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const creatematricula=async(req,res)=>{
    try {
        const{fecha,ciclo}=req.body;
        await pool.query('insert into matricula(fecha,ciclo)values($1,$2)',[fecha,ciclo]);
        return res.status(200).json(`Matricula generada correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updatematricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{fecha,ciclo}=req.body;
        await pool.query('update matricula set fecha=$1,ciclo=$2 where idmatricula=$3',[fecha,ciclo,id]);
        return res.status(200).json(`Matricula actualizada correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const delmatricula=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from matricula where idmatricula=$1',[id]);
        return res.status(200).json(`Matricula elimindo correctamente...`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}