import React from 'react';
import { Seller } from '@/types';


interface SellerTableProps {
    sellers: Seller[];
    onDelete: (sellerId: string) => void;
    onBlock: (sellerId: string) => void;
    onViewMore: (seller: Seller) => void;
}


const AdminRegisteredSellerTable: React.FC<SellerTableProps> = ({sellers, onDelete, onBlock, onViewMore}) => {
  return (
      <div className="flex flex-col mt-6 w-full">
          <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-appTitleBgColor text-white font-normal font-sans">
                  <tr>
                      <th className="border px-2 py-2">S/N</th>
                      <th className="border px-2 py-2">Seller ID</th>
                      <th className="border px-2 py-2">First Name</th>
                      <th className="border px-2 py-2"> Last Name </th>
                      <th className="border px-2 py-2">Middle Name</th>
                      <th className="border px-2 py-2">Username</th>
                      <th className="border px-2 py-2">Email</th>
                      <th className="border px-2 py-2">Delete Seller</th>
                      <th className="border px-2 py-2">Block Seller</th>
                      <th className="border px-2 py-2">View More</th>
                  </tr>
              </thead>
              <tbody>
                  {sellers.map((seller, index) => (
                      <tr key={seller.seller_id} className={`text-center font-normal font-sans ${seller.isBlocked ? 'bg-red-500 text-wite' : 'bg-white text-black'} `}>
                          <td className="border px-2 py-2">{index + 1}</td>
                          <td className="border px-2 py-2">{seller.seller_id}</td>
                          <td className="border px-2 py-2">{seller.firstname}</td>
                          <td className="border px-2 py-2">{seller.lastname}</td>
                          <td className="border px-2 py-2">{seller.middlename}</td>
                          <td className="border px-2 py-2">{seller.username}</td>
                          <td className="border px-2 py-2">{seller.email}</td>

                          <td className="border px-2 py-2">
                              <button
                                  className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                  onClick={() => onDelete(seller.seller_id)}
                              >
                                  Delete
                              </button>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                              <button
                                  className="px-3 py-1 text-white bg-appNav rounded hover:bg-appTitleBgColor"
                                  onClick={() => onBlock(seller.seller_id)}
                              >
                                  {seller.isBlocked ? 'Unblock' : 'Block'}
                              </button>
                          </td>
                          <td className="p-3 text-sm text-gray-700">
                              <button
                                  className="px-3 py-1 text-white bg-appTitleBgColor rounded hover:bg-appNav"
                                  onClick={() => onViewMore(seller)}
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

export default AdminRegisteredSellerTable;
