import React, { useState } from 'react'
import "./styles.css"

import { Card } from "../../components/Card"

export function Home() {    
  const [studentName, setStudentName] = useState("")
  const [ students, setStudents] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        secound: '2-digit',
      }) 
    }
    setStudents(prevState => [...prevState, newStudent])
  }

  return (
    <div className='container'>
      <h1>Lista de Pesença</h1>

      <input 
        type="text" 
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
          Adicionar
      </button>

      {
        students.map(student => <Card name={student.name} horario={student.time} />) 
        
      }
   
    </div>   
  )
}

