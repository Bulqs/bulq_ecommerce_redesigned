import { User } from '@/types';
import React from 'react';


interface UserTableProps {
    users: User[];
    onDelete: (userId: string) => void;
    onBlock: (userId: string) => void;
    onViewMore: (user: User) => void;
}

const AdminRegisteredUserTable: React.FC<UserTableProps> = ({ users, onDelete, onBlock, onViewMore }) => {
  return (
      <div className="flex flex-col mt-6 w-full">
          <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-appTitleBgColor text-white font-normal font-sans">
                  <tr>
                      <th className="border px-2 py-2">S/N</th>
                      <th className="border px-2 py-2">User ID</th>
                      <th className="border px-2 py-2">First Name</th>
                      <th className="border px-2 py-2"> Last Name </th>
                      <th className="border px-2 py-2">Middle Name</th>
                      <th className="border px-2 py-2">Username</th>
                      <th className="border px-2 py-2">Email</th>
                      <th className="border px-2 py-2">Delete User</th>
                      <th className="border px-2 py-2">Block User</th>
                      <th className="border px-2 py-2">View More</th>

                  </tr>
              </thead>
              <tbody>
                  {users.map((user, index) => (
                      <tr key={user.user_id} className={`text-center font-normal font-sans ${user.isBlocked ? 'bg-red-500 text-wite' : 'bg-white text-black'} `}>
                          <td className="border px-2 py-2">{index + 1}</td>
                          <td className="border px-2 py-2">{user.user_id}</td>
                          <td className="border px-2 py-2">{user.firstname}</td>
                          <td className="border px-2 py-2">{user.lastname}</td>
                          <td className="border px-2 py-2">{user.middlename}</td>
                          <td className="border px-2 py-2">{user.username}</td>
                          <td className="border px-2 py-2">{user.email}</td>
                                                   
                          <td className="border px-2 py-2">
                              <button
                                  className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                  onClick={() => onDelete(user.user_id)}
                              >
                                  Delete
                              </button>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                              <button
                                  className="px-3 py-1 text-white bg-appNav rounded hover:bg-appTitleBgColor"
                                  onClick={() => onBlock(user.user_id)}
                              >
                                  {user.isBlocked ? 'Unblock' : 'Block'}
                              </button>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                              <button
                                  className="px-3 py-1 text-white bg-appTitleBgColor rounded hover:bg-appNav"
                                  onClick={() => onViewMore(user)}
                              >
                                  View More
                              </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
    </div>
  );
}

export default AdminRegisteredUserTable;
