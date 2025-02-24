

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa'; // Import delete icon

const DashBoardLayout = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch appointments from the API
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('https://server-hpxb.onrender.com/api/v1/appointments/all-appointments');
      setAppointments(response.data.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  // Open modal with appointment details
  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  // Delete an appointment
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://server-hpxb.onrender.com/api/v1/appointments/${id}`);
      fetchAppointments(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#A7EB94] to-[#D1F5C6] flex">
      {/* Drawer */}
      <div className="w-64 bg-white/20 backdrop-blur-lg shadow-lg p-4 border-r border-white/30">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <ul className="space-y-2">
          <li className="text-gray-700 hover:bg-white/30 p-2 rounded cursor-pointer transition-all">Appointments</li>
          <li className="text-gray-700 hover:bg-white/30 p-2 rounded cursor-pointer transition-all">Contact Info</li>
          <li className="text-gray-700 hover:bg-white/30 p-2 rounded cursor-pointer transition-all">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Appointments</h1>
        <div className="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-white/30">
          <table className="min-w-full">
            <thead className="bg-white/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/20">
              {appointments.map((appointment) => (
                <tr
                  key={appointment._id}
                  className="hover:bg-white/20 cursor-pointer transition-all"
                  onClick={() => openModal(appointment)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{appointment.fullname}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{new Date(appointment.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click event
                        handleDelete(appointment._id);
                      }}
                      className="text-red-500 hover:text-red-700 flex items-center"
                    >
                      <FaTrash className="mr-2" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedAppointment && (
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* Glass morphism background */}
          <div
            className="fixed inset-0 bg-white/30 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="bg-gradient-to-br from-[#A7EB94]/50 to-[#D1F5C6]/50 rounded-2xl shadow-2xl border border-white/30 w-full max-w-2xl p-8 relative z-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Appointment Details</h2>
            <div className="space-y-4 text-gray-700">
              <p><span className="font-medium text-gray-800">Name:</span> {selectedAppointment.fullname}</p>
              <p><span className="font-medium text-gray-800">Email:</span> {selectedAppointment.email}</p>
              <p><span className="font-medium text-gray-800">Service:</span> {selectedAppointment.service}</p>
              <p><span className="font-medium text-gray-800">Phone:</span> {selectedAppointment.phone}</p>
              <p><span className="font-medium text-gray-800">Subject:</span> {selectedAppointment.subject}</p>
              <p><span className="font-medium text-gray-800">Date:</span> {new Date(selectedAppointment.date).toLocaleDateString()}</p>
              <p><span className="font-medium text-gray-800">Time:</span> {selectedAppointment.time}</p>
              <p><span className="font-medium text-gray-800">Message:</span> {selectedAppointment.message}</p>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-[#A7EB94] to-[#8DD879] text-white px-6 py-2 rounded-lg hover:from-[#8DD879] hover:to-[#A7EB94] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoardLayout;