import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './index.css'
import NavBar from './components/NavBar/NavBar';
import ContactList from './components/contacts/ContactList/ContactList';
import AddContact from './components/contacts/AddContact/AddContact';
import ViewContact from './components/contacts/ViewContact/ViewContact';
import EditContact from './components/contacts/EditContact/EditContact';
import { Spinner } from './components/Spinner/Spinner';

let App=()=> {
  return (
    <>
    
    <NavBar/>
  
    <Routes>
      <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
      <Route path={'/contacts/list'} element={<ContactList/>}/>
      <Route path={'/contacts/add'} element={<AddContact/>}/>
      <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
      <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      <Route path={'/contacts/delete/:contactId'} element={<EditContact/>}/>
    </Routes>
    </>
  );
}

export default App;
