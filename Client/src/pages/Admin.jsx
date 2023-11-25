import React from "react";
import AdminPanel from "./AdminPanel";
import UserCard from "./UserCard";
export default function Admin() {
	return (
		<>
			<div className="flex h-20 flex-col-2">
				<AdminPanel />
        <div className="w-full">
          
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
        </div>
			</div>
		</>
	);
}
