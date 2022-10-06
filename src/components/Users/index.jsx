import React from 'react';
import { useState } from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({ count, invites, onClickInvite, items, isLoading, setSucces }) => {
	const [filter, setFilter] = useState(null);
	const editInput = (value) => {
		setFilter(value);
	}
	return (
		<>
			<div className="search">
				<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
				</svg>
				<input value={filter} onChange={(e) => editInput(e.target.value)} type="text" placeholder="Найти пользователя..." />
			</div>
			{isLoading ? (
				<div className="skeleton-list">
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			) : (
				<ul className="users-list">
					{items.map(obj => filter === '' || !filter ? <User onClickInvite={onClickInvite} isInvited={invites.includes(obj.id)} {...obj}></User> : (obj.first_name.toLowerCase().includes(filter.toLowerCase()) || obj.last_name.toLowerCase().includes(filter.toLowerCase()) ? <User {...obj}></User> : null))}
				</ul>
			)}
			{count > 0 && <button onClick={() => setSucces(true)} className="send-invite-btn">Отправить приглашение</button>}
		</>
	);
};
