import React from 'react'
import Person from './person'

function Nameslist() {
    const names= ['bruce','diana','clark','bruce']
    // const persons = [
    //     {
    //       id: 1,
    //       name: 'Bruce',
    //       age: 30,
    //       skill: 'React'
    //     },
    //     {
    //       id: 2,
    //       name: 'Clark',
    //       age: 25,
    //       skill: 'Angular'
    //     },
    //     {
    //       id: 3,
    //       name: 'Diana',
    //       age: 28,
    //       skill: 'Vue'
    //     }
    // ]
    const Namelist = names.map((name ,index)=><h2 key = {index}>{index}{name}</h2>)
    // const personlist = persons.map(person =><Person key = {person.id} person = {person}/>)
    // return (<div>{personlist}
    // </div>)
    return (<div>{Namelist}</div>)
}

export default Nameslist