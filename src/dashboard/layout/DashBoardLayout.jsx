import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaSync, FaSearch } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/raleway"; // Import Raleway font
import "@fontsource/raleway/500.css"; // Medium weight
import "@fontsource/raleway/700.css"; // Bold weight

const DashBoardLayout = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, [page]);

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://server-hpxb.onrender.com/api/v1/appointments/all-appointments?page=${page}`
      );
      if (page === 1) {
        setAppointments(response.data.data);
      } else {
        setAppointments((prev) => [...prev, ...response.data.data]);
      }
      setFilteredAppointments(response.data.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log(appointments);

  useEffect(() => {
    const results = appointments.filter(
      (appointment) =>
        appointment.fullName
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        appointment.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.service?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAppointments(results);
  }, [searchTerm, appointments]);

  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://server-hpxb.onrender.com/api/v1/appointments/${id}`
      );
      fetchAppointments();
      toast.success("Appointment deleted successfully!");
    } catch (error) {
      console.error("Error deleting appointment:", error);
      toast.error("Failed to delete appointment.");
    }
  };

  const handleRefresh = () => {
    setPage(1);
    fetchAppointments();
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#A7EB94] to-[#D1F5C6] flex"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      {/* Drawer */}
      <div className="w-64 bg-white/20 backdrop-blur-lg shadow-lg p-4 border-r border-white/30">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <ul className="space-y-2">
          <li className="text-gray-700 hover:bg-white/30 p-2 rounded cursor-pointer transition-all">
            Appointments
          </li>
          <li className="text-gray-700 hover:bg-white/30 p-2 rounded cursor-pointer transition-all">
            Contact Info
          </li>
          <li className="text-gray-700 hover:bg-white/30 p-2 rounded cursor-pointer transition-all">
            Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Appointments</h1>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg border border-white/30 bg-white/20 backdrop-blur-lg focus:outline-none focus:border-[#A7EB94]"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>
          <button
            onClick={handleRefresh}
            className="bg-gradient-to-r from-[#A7EB94] to-[#8DD879] text-white px-4 py-2 rounded-lg hover:from-[#8DD879] hover:to-[#A7EB94] transition-all flex items-center"
          >
            <FaSync className="mr-2" /> Refresh
          </button>
        </div>
        <div className="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-white/30">
          <table className="min-w-full">
            <thead className="bg-white/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/20">
              {filteredAppointments.map((appointment) => (
                <tr
                  key={appointment._id}
                  className="hover:bg-white/20 cursor-pointer transition-all"
                  onClick={() => openModal(appointment)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {appointment.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {appointment.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {appointment.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {appointment.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
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
          {loading && <div className="text-center py-4">Loading...</div>}
          <div className="flex justify-center py-4">
            <button
              onClick={handleLoadMore}
              className="bg-gradient-to-r from-[#A7EB94] to-[#8DD879] text-white px-6 py-2 rounded-lg hover:from-[#8DD879] hover:to-[#A7EB94] transition-all"
            >
              Load More
            </button>
          </div>
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
          <div className="bg-gradient-to-br from-[#A7EB94]/50 to-[#D1F5C6]/50 rounded-2xl shadow-2xl border border-white/30 w-full max-w-2xl max-h-[90vh] p-8 relative z-10 overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Appointment Details
            </h2>
            <div className="space-y-4 text-gray-700 overflow-y-auto max-h-[70vh] pr-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Name:</p>
                <p className="text-gray-900">{selectedAppointment.fullname}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Email:</p>
                <p className="text-gray-900">{selectedAppointment.email}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Service:</p>
                <p className="text-gray-900">{selectedAppointment.service}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Phone:</p>
                <p className="text-gray-900">{selectedAppointment.phoneNumber}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Subject:</p>
                <p className="text-gray-900">{selectedAppointment.subject}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Date:</p>
                <p className="text-gray-900">
                  {new Date(selectedAppointment.date).toLocaleDateString()}
                </p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Time:</p>
                <p className="text-gray-900">{selectedAppointment.time}</p>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="font-medium text-gray-800">Message:</p>
                <p className="text-gray-900">{selectedAppointment.message}</p>
              </div>
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

      {/* Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default DashBoardLayout;
