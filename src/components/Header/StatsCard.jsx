const StatsCard = ({ globalClients, teamMembers, businessExperience }) => {
  return (
    <div className="absolute bottom-10 right-10 bg-white text-[#004D3F] p-6 rounded-lg shadow-lg">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-bold text-xl">{globalClients}</span>
          <span>Global Clients</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-xl">{teamMembers}</span>
          <span>Team Members</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-xl">{businessExperience}</span>
          <span>Business Experience</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
