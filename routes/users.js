import express from 'express';
// uuid for random ids
import {v4 as uuidv4 } from 'uuid';


const router = express.Router();


let users = [
 
]



// all routes here are starting with /users from index.js file
router.get('/', (req, res) => {
  console.log(users)
  res.send(users);
})

router.post('/', (req, res) => {
  console.log('post route reched')

  const newUser = req.body;

  const userId = uuidv4();

  const userWithId = { ...newUser, id: userId}

  users.push(userWithId)

  res.send(`User with the name ${newUser.firstName} added to the DB`)
})


router.get('/:id', (req, res) => {

  const {id}  = req.params

  const foundUser = users.find((users) => users.id === id)

  res.send(foundUser)
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;



  users = users.filter((user) => user.id != id)

  res.send(`User with the id ${id} deleted from DB`)
})

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const { firstName, lastName, age } = req.body;

   const user = users.find((user) => user.id === id);

   if(firstName) {
    user.firstName = firstName
   }
   if(lastName) {
    user.firstName = lastName
   } 
   if(age) {
    user.firstName = age
   } 
})


export default router; 