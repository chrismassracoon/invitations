import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useState } from 'react';
import { useEffect } from 'react';

// Тут список пользователей: https://reqres.in/api/users

function App() {
	const [users, setUsers] = useState(0);
	const [succes, setSucces] = useState(false);
	const [invites, setInvites] = useState([3, 1]);

	const onClickInvite = (id) => {
		if (invites.includes(id)) {
			setInvites(prev => prev.filter(_id => _id !== id))
		} else {
			setInvites(prev => [...prev, id])
		}
	}

	const timeOutSucces = () => {
		setTimeout(() => setSucces(false), 4000)
	}
	useEffect(() => timeOutSucces, [succes])
	useEffect(() => {
		fetch('https://reqres.in/api/users').then(res => res.json()).then(json => setUsers(json.data)).catch(err => {
			console.log(err);
			alert('Error')
		})
	}, [])
	return (
		<div className="App">
			{succes ? <Success count={invites.length} setSucces={setSucces} /> : <Users count={invites.length} invites={invites} onClickInvite={onClickInvite} setSucces={setSucces} isLoading={!users} items={users} />}
		</div>
	);
}

export default App;
